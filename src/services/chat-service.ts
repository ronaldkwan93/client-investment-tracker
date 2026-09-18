export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const sendChatMessage = async (
  message: string,
  history: ChatMessage[]
): Promise<string> => {
  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, history }),
  });

  if (!response.ok) {
    throw new Error("Failed to get a response from the copilot");
  }

  const result = await response.json();
  return result.reply;
};
