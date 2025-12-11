import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual del portafolio de "Andrea".
Andrea es una Contadora Pública que evolucionó a Analista de Datos y Desarrolladora de Proyectos.
Tu objetivo es responder preguntas sobre su experiencia profesional, habilidades y proyectos.

Perfil de Andrea:
- **Roles:** Contadora, Analista de Procesos, Optimizadora, Programadora Junior/Mid.
- **Habilidades Tech:** Python (Pandas, Automate), JavaScript (React), Excel Avanzado (VBA), SQL, Power BI, KNIME.
- **Habilidades Blandas:** Pensamiento analítico, resolución de problemas, comunicación efectiva.
- **Estilo:** Profesional, concisa, amable y entusiasta por la automatización.

Si te preguntan sobre contacto, sugiere enviar un email a andreamcorimayo@gmail.com o contactar por LinkedIn.
Responde siempre en español de manera profesional pero moderna.
`;

export const initializeChat = async () => {
  if (!process.env.API_KEY) {
    console.warn("API Key not found");
    return;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  } catch (error) {
    console.error("Error initializing chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "Lo siento, no pude conectar con el servicio de IA en este momento. Por favor verifica la configuración de la API Key.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "No pude generar una respuesta.";
  } catch (error) {
    console.error("Error sending message:", error);
    return "Hubo un error al procesar tu pregunta. Por favor intenta nuevamente.";
  }
};
