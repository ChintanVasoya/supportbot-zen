
import { useState, useEffect, useRef } from "react";

// Types for chat messages
type MessageType = "user" | "bot";

interface Message {
  type: MessageType;
  text: string;
  timestamp: Date;
}

const ChatDemo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hi there! I'm SupportBot. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Predefined responses based on user input
  const getBotResponse = (userMessage: string): string => {
    const lowerCaseMsg = userMessage.toLowerCase();
    
    if (lowerCaseMsg.includes("pricing") || lowerCaseMsg.includes("cost") || lowerCaseMsg.includes("plan")) {
      return "We offer three plans: Free, Pro ($19/month), and Enterprise (custom pricing). Would you like more details on any specific plan?";
    }
    
    if (lowerCaseMsg.includes("integrate") || lowerCaseMsg.includes("website") || lowerCaseMsg.includes("install")) {
      return "Integration is simple! Just add a small code snippet to your website, or connect to our API for WhatsApp and other platforms. Our setup wizard will guide you through the process.";
    }
    
    if (lowerCaseMsg.includes("train") || lowerCaseMsg.includes("teach") || lowerCaseMsg.includes("learn")) {
      return "Training your bot is easy! Upload your FAQs, knowledge base articles, or past customer conversations. The AI will learn from these and improve over time with each interaction.";
    }
    
    if (lowerCaseMsg.includes("hello") || lowerCaseMsg.includes("hi") || lowerCaseMsg.includes("hey")) {
      return "Hello! I'm here to answer your questions about SupportBot. What would you like to know?";
    }
    
    if (lowerCaseMsg.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with today?";
    }
    
    return "That's a great question. SupportBot can handle customer inquiries, provide product information, process simple orders, and escalate complex issues to your team. Would you like to see a specific feature in action?";
  };

  // Scroll to bottom of chat when new messages appear
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: "user",
      text: inputValue,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botMessage: Message = {
        type: "bot",
        text: getBotResponse(userMessage.text),
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // Handle pressing Enter to send message
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden h-[480px] md:h-[520px] flex flex-col">
      {/* Chat Header */}
      <div className="px-4 py-3 border-b border-border bg-secondary/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">SupportBot</h3>
            <div className="flex items-center text-xs text-foreground/60">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
              Online
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto hide-scrollbar">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-2 ${
                message.type === "user" ? "justify-end" : ""
              }`}
            >
              {message.type === "bot" && (
                <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
              )}

              <div
                className={`p-3 rounded-xl text-sm max-w-[85%] ${
                  message.type === "user"
                    ? "bg-primary/10 rounded-tr-none"
                    : "bg-secondary rounded-tl-none"
                }`}
              >
                {message.text}
              </div>

              {message.type === "user" && (
                <div className="w-8 h-8 rounded-full bg-accent/10 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <div className="bg-secondary rounded-xl rounded-tl-none p-3 text-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse delay-150"></div>
                  <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-border">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-3 pr-12 rounded-xl border border-border bg-secondary/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors ${
              inputValue.trim() ? "text-primary" : "text-foreground/30"
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
        <div className="mt-2 text-xs text-center text-foreground/50">
          Try asking about pricing, integration, or training the bot
        </div>
      </div>
    </div>
  );
};

export default ChatDemo;
