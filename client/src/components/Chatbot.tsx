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
