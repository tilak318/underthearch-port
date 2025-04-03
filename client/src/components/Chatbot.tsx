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

// Knowledge base for the chatbot
const knowledgeBase = {
  company: {
    name: "UnderTheArch",
    founded: "2019",
    location: "Surat, Gujarat",
    expansion: "major cities in Gujarat",
    vision: "revolutionize architectural design in Gujarat",
    pillars: [
      "client-centric approach",
      "sustainable design practices",
      "team of passionate architects"
    ]
  },
  leadership: {
    team: [
      {
        name: "Ar. Kunjan Akbari",
        role: "Managing Partner",
        expertise: "Architectural Design & Project Management"
      },
      {
        name: "Ar. Shruti Salia",
        role: "Managing Director",
        expertise: "Design Strategy & Client Relations"
      },
      {
        name: "Ar. Shyam Gajera",
        role: "Technical Director",
        expertise: "Technical Design & Implementation"
      }
    ],
    vision: "The visionaries leading our architectural practice"
  },
  services: [
    "Commercial Architecture",
    "Residential Architecture",
    "Industrial Architecture",
    "Public Architecture",
    "Cultural Architecture"
  ],
  projects: [
    {
      name: "Sensitive Forge",
      category: "Commercial",
      year: "2021",
      location: "Seattle, WA",
      area: "20,000 sq ft",
      description: "A sophisticated office complex designed for a leading tech company with focus on innovation and collaboration."
    },
    {
      name: "The Inner Coterie",
      category: "Residential",
      year: "2023",
      location: "Nikol, Ahmedabad",
      area: "1,800 sq ft",
      description: "A haven of subtle elegance with soft curves and organic shapes blended with copper accents."
    }
  ],
  contact: {
    methods: [
      {
        type: "Email",
        value: "contact@underthearch.com"
      },
      {
        type: "Phone",
        value: "+91 98765 43210"
      },
      {
        type: "Address",
        value: "123 Architecture Street, Surat, Gujarat - 395001"
      }
    ]
  },
  careers: {
    positions: [
      "Senior Architect",
      "Project Manager",
      "Interior Designer",
      "3D Visualizer",
      "Architectural Drafter"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Professional development",
      "Work-life balance",
      "Creative environment"
    ],
    requirements: [
      "Relevant degree in Architecture/Design",
      "Minimum 2-3 years of experience",
      "Strong portfolio",
      "Proficiency in design software",
      "Team collaboration skills"
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
      content: "Hello! I'm your UnderTheArch Design Assistant. I can help you with information about our architectural services, projects, company details, career opportunities, and how to contact us. How can I assist you today?",
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
    const lowerMessage = userMessage.toLowerCase();
    
    // Company information
    if (lowerMessage.includes("company") || lowerMessage.includes("about") || lowerMessage.includes("who")) {
      return `UnderTheArch was founded in ${knowledgeBase.company.founded} with a vision to ${knowledgeBase.company.vision}. We started in ${knowledgeBase.company.location} and have expanded across ${knowledgeBase.company.expansion}. Our success is built on three pillars: ${knowledgeBase.company.pillars.join(", ")}.`;
    }
    
    // Leadership information
    if (lowerMessage.includes("leader") || lowerMessage.includes("founder") || lowerMessage.includes("partner") || lowerMessage.includes("director")) {
      const teamInfo = knowledgeBase.leadership.team.map(member => 
        `${member.name} - ${member.role}`
      ).join("\n");
      return `Our leadership team consists of:\n${teamInfo}\n\nThey are ${knowledgeBase.leadership.vision.toLowerCase()}.`;
    }
    
    // Services
    if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("do")) {
      return `We offer various architectural services including: ${knowledgeBase.services.join(", ")}. Would you like to know more about any specific service?`;
    }
    
    // Projects
    if (lowerMessage.includes("project") || lowerMessage.includes("work") || lowerMessage.includes("portfolio")) {
      const projects = knowledgeBase.projects.map(p => `${p.name} (${p.category}, ${p.year})`).join(", ");
      return `We have completed several notable projects including: ${projects}. Would you like to know more about any specific project?`;
    }
    
    // Contact information
    if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("get in touch")) {
      const contactInfo = knowledgeBase.contact.methods.map(m => 
        `${m.type}: ${m.value}`
      ).join("\n");
      return `You can reach us through:\n${contactInfo}`;
    }
    
    // Career opportunities
    if (lowerMessage.includes("career") || lowerMessage.includes("job") || lowerMessage.includes("work with us") || lowerMessage.includes("join") || lowerMessage.includes("hiring")) {
      const positions = knowledgeBase.careers.positions.join(", ");
      const requirements = knowledgeBase.careers.requirements.join("\n• ");
      const benefits = knowledgeBase.careers.benefits.join("\n• ");
      
      return `Thank you for your interest in joining UnderTheArch! 🌟\n\nCurrent Opportunities:\n• ${positions}\n\nKey Requirements:\n• ${requirements}\n\nWhat We Offer:\n• ${benefits}\n\nTo apply, please send your resume and portfolio to our email with the position you're interested in. We look forward to having passionate architects and designers join our team!`;
    }
    
    // Default response
    return "I'm here to help you with information about UnderTheArch. You can ask me about our company, services, projects, career opportunities, or how to contact us. What would you like to know?";
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
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8238169574"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 animate-float"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </svg>
      </a>

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
                      "mb-4 max-w-[80%] p-3 rounded-lg whitespace-pre-line",
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
