import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Minimize, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

interface ChatMessage {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Simple knowledge base with minimal information
const knowledgeBase = {
  company: {
    name: "UnderTheArch"
  },
  contact: {
    methods: [
      {
        type: "Email",
        value: "contact@underthearch.com"
      },
      {
        type: "Phone",
        value: "+91 98765 43210"
      }
    ]
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      content: "Hello! I'm your UnderTheArch Design Assistant. How can I assist you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const generateResponse = (userMessage: string): string => {
    // Simple default response
    return "Thank you for your message. Please contact us directly at contact@underthearch.com or call +91 98765 43210 for assistance.";
  };

  const handleSend = () => {
    if (message.trim() === "") return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage("");

    // Generate and add bot response
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: Date.now().toString(),
        content: generateResponse(message),
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-4">
      {/* WhatsApp Button - Made smaller */}
      <a
        href="https://wa.me/9876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 animate-float"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 sm:w-7 sm:h-7"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </svg>
      </a>

      {/* Chat button - Made smaller */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-gray-800 to-black text-white shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10"
        >
          <MessageCircle size={20} className="text-white" />
        </button>
      )}

      {/* Chat window - Made smaller and responsive */}
      {isOpen && (
        <div
          className={cn(
            "bg-gradient-to-b from-gray-900 to-black border border-white/20 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 w-[90vw] sm:w-full max-w-xs sm:max-w-sm",
            isMinimized ? "h-12 sm:h-14" : "h-[400px] sm:h-[450px]"
          )}
        >
          {/* Chat header - Made smaller */}
          <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 border-b border-white/20 bg-gradient-to-r from-gray-800 to-black">
            <div className="flex items-center space-x-2">
              <MessageCircle size={16} className="text-white" />
              <h3 className="font-medium text-white text-sm sm:text-base">Design Assistant</h3>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={toggleMinimize}
                className="p-1 sm:p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
              >
                {isMinimized ? <Maximize size={14} /> : <Minimize size={14} />}
              </button>
              <button
                onClick={toggleChat}
                className="p-1 sm:p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Chat content */}
          {!isMinimized && (
            <>
              {/* Messages - Adjusted height */}
              <div className="flex-1 p-3 sm:p-4 h-[290px] sm:h-[330px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent bg-gradient-to-b from-black/80 to-gray-900/80">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "mb-3 max-w-[85%] p-2 sm:p-3 rounded-lg whitespace-pre-line shadow-md text-xs sm:text-sm",
                      msg.sender === "user"
                        ? "ml-auto bg-gradient-to-r from-gray-700 to-gray-800 text-white"
                        : "mr-auto bg-gradient-to-r from-gray-900 to-black text-white border border-white/20"
                    )}
                  >
                    <p className="text-xs sm:text-sm">{msg.content}</p>
                    <span className="text-[10px] sm:text-xs opacity-60 mt-1 block">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input - Made smaller */}
              <div className="p-2 sm:p-3 border-t border-white/20 bg-gradient-to-r from-gray-900 to-black">
                <div className="flex items-center space-x-2">
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="flex-1 min-h-8 sm:min-h-10 max-h-24 sm:max-h-32 bg-gray-800/60 border-white/20 text-white placeholder:text-white/40 text-xs sm:text-sm resize-none focus:ring-1 focus:ring-white/30 focus:border-white/30 py-1.5 px-2"
                    rows={1}
                  />
                  <Button
                    onClick={handleSend}
                    size="icon"
                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-r from-gray-200 to-white text-black hover:opacity-90 transition-opacity"
                    disabled={!message.trim()}
                  >
                    <Send size={16} className="sm:hidden" />
                    <Send size={18} className="hidden sm:block" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
