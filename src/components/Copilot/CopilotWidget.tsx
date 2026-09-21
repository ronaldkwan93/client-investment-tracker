import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { sendChatMessage } from "../../services/chat-service";
import type { ChatMessage } from "../../services/chat-service";

interface CopilotWidgetProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const CopilotWidget = ({ isOpen, onOpenChange }: CopilotWidgetProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, isOpen]);

  useEffect(() => {
    if (!loading) inputRef.current?.focus();
  }, [loading]);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const history = messages;
    const userMessage: ChatMessage = { role: "user", content: trimmed };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const reply = await sendChatMessage(trimmed, history);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setError("Something went wrong reaching the copilot. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 flex h-[500px] w-80 flex-col rounded-md border border-gray-200 bg-white shadow-lg sm:w-96">
          <div className="flex items-center justify-between rounded-t-md border-b border-gray-200 bg-sky-200 px-4 py-3">
            <span className="font-medium">Investment Copilot</span>
            <button
              onClick={() => onOpenChange(false)}
              aria-label="Close chat"
              className="cursor-pointer text-gray-700 hover:text-gray-900"
            >
              <IoClose size={20} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.length === 0 && (
              <p className="text-sm text-gray-500">
                Ask me about your investment properties &mdash; yields, cash
                flow, comparisons, or details on a specific address.
              </p>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-md px-3 py-2 text-sm shadow-sm ${
                    msg.role === "user"
                      ? "bg-sky-200"
                      : "bg-gray-200"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-md bg-gray-200 px-3 py-2 text-sm text-gray-600 shadow-sm">
                  Thinking&hellip;
                </div>
              </div>
            )}

            {error && <p className="text-sm text-red-600">{error}</p>}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSend}
            className="flex gap-2 border-t border-gray-200 p-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your properties..."
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="cursor-pointer rounded-md bg-sky-200 px-3 py-2 text-sm shadow-sm transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => onOpenChange(!isOpen)}
        aria-label={isOpen ? "Close copilot chat" : "Open copilot chat"}
        className="cursor-pointer rounded-full bg-sky-200 p-4 shadow-lg transition-transform duration-200 hover:-translate-y-1"
      >
        {isOpen ? <IoClose size={24} /> : <BsChatDotsFill size={24} />}
      </button>
    </div>
  );
};

export default CopilotWidget;
