import { MessageBubble, Message } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";
import { LiveSessionHeader } from "./LiveSessionHeader";
import { ChatInput } from "./ChatInput";
import React, { useEffect, useRef } from "react";

const mockMessages: Message[] = [
  { 
    id: "1", 
    role: "system", 
    content: "Session Started • June 24, 2024", 
    timestamp: "10:40 AM" 
  },
  { 
    id: "2", 
    role: "customer", 
    content: "I've been charged twice for the enterprise subscription this month. The invoice says it's for 'Tier 2 Add-ons' but we haven't activated those. Can you clarify why the system automatically billed $1,200 extra without authorization?", 
    timestamp: "10:42 AM",
    isEscalated: true
  },
  { 
    id: "3", 
    role: "ai", 
    content: "Checking your account records... I see two transactions processed. The first is your standard Enterprise subscription. The second is indeed labeled as 'Tier 2 Add-ons'. I am currently analyzing the trigger event for this charge against our fair-use burst policy.", 
    timestamp: "10:43 AM" 
  },
];

export function ChatWindow() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="flex flex-col h-full glass-card rounded-[2.5rem] overflow-hidden border-white/5 shadow-2xl">
      <LiveSessionHeader />
      
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar scroll-smooth"
      >
        {mockMessages.map((msg) => (
          <div key={msg.id}>
            <MessageBubble message={msg} />
          </div>
        ))}
        <TypingIndicator />
      </div>

      <ChatInput />
    </div>
  );
}
