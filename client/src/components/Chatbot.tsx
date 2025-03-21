
import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Minimize, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

interface ChatMessage {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      content: "Hello! How can I help you with your architectural project today?",
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

    // Simulate bot response after a short delay
    setTimeout(() => {
      const responses = [
        "Thanks for your message! Our architect team will get back to you soon.",
        "I'd be happy to provide more information about our architectural services.",
        "We specialize in modern and sustainable design solutions. Would you like to know more?",
        "Feel free to check our portfolio for examples of our previous work.",
        "Would you like to schedule a consultation with one of our architects?"
      ];
      
      const botMessage: ChatMessage = {
        id: Date.now().toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
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
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-black text-white shadow-lg hover:bg-black/90 transition-all duration-300"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className={cn(
            "bg-black/90 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-xl transition-all duration-300 w-full max-w-sm",
            isMinimized ? "h-14" : "h-[450px]"
          )}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/60">
            <div className="flex items-center space-x-2">
              <MessageCircle size={18} className="text-white" />
              <h3 className="font-medium text-white">Design Assistant</h3>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={toggleMinimize}
                className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                {isMinimized ? <Maximize size={16} /> : <Minimize size={16} />}
              </button>
              <button
                onClick={toggleChat}
                className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Chat content */}
          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 p-4 h-[330px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "mb-4 max-w-[80%] p-3 rounded-lg",
                      msg.sender === "user"
                        ? "ml-auto bg-white/10 text-white"
                        : "mr-auto bg-black text-white border border-white/10"
                    )}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <span className="text-xs opacity-60 mt-1 block">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-white/10 bg-black/60">
                <div className="flex items-center space-x-2">
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="flex-1 min-h-10 max-h-32 bg-black/60 border-white/20 text-white placeholder:text-white/40 text-sm resize-none"
                    rows={1}
                  />
                  <Button
                    onClick={handleSend}
                    size="icon"
                    className="h-10 w-10 rounded-full bg-white text-black hover:bg-white/90"
                    disabled={!message.trim()}
                  >
                    <Send size={18} />
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
