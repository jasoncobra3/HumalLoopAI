import React from "react";
import { UserCheck, MoreVertical, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlaTimer } from "./SlaTimer";
import { MessageBubble, Message } from "../chat-playground/MessageBubble";
import { HumanInterventionPanel } from "./HumanInterventionPanel";
import { ChatInput } from "../chat-playground/ChatInput";
import { motion } from "motion/react";

const mockThread: Message[] = [
  { 
    id: "1", 
    role: "customer", 
    content: "We're seeing consistent 504 timeouts on the `/simulate` endpoint during our load tests. This is critical for our Q4 release. Is there an issue with the inference scaling in region us-east-1?", 
    timestamp: "10:42 AM" 
  },
  { 
    id: "2", 
    role: "ai", 
    content: "Checking us-east-1 health status... All systems are operational. Processing 1.4k log lines from last 15 minutes to identify specific scaling triggers for your account.", 
    timestamp: "10:42 AM" 
  },
  { 
    id: "3", 
    role: "customer", 
    content: "It's not just a status check. We have 14 developers blocked. I need a bypass or a dedicated node instance immediately. Can you handle this or do I need to talk to someone?", 
    timestamp: "10:43 AM",
    isEscalated: true
  },
];

interface EscalationDetailProps {
  customerName: string;
}

export function EscalationDetail({ customerName }: EscalationDetailProps) {
  return (
    <div className="flex-1 flex flex-col h-full bg-background/30 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-white/5 bg-accent/20 backdrop-blur-3xl flex items-center justify-between z-10 shadow-xl">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-muted border border-white/5 overflow-hidden shadow-2xl transition-transform hover:scale-105">
             <img 
               src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" 
               alt="avatar" 
               className="w-full h-full object-cover brightness-90 grayscale-[0.2]"
             />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">{customerName}</h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Enterprise Tier · Region: us-east-1</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-10">
          <SlaTimer initialMinutes={12} />
          <div className="h-10 w-px bg-white/5" />
          <div className="flex items-center gap-3">
            <Button className="bg-primary text-primary-foreground font-bold rounded-xl h-12 px-6 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all">
              <UserCheck className="w-4 h-4" />
              Take Action
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-white/5">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar scroll-smooth">
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          <div className="flex justify-center p-4">
            <span className="px-4 py-1.5 bg-muted rounded-full text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-50 border border-white/5">
              Thread Started • Today
            </span>
          </div>

          {mockThread.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}

          {/* Reasoning Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >
            <div className="bg-tertiary/10 border border-tertiary/30 px-8 py-4 rounded-[2rem] flex flex-col items-center gap-2 max-w-lg shadow-[0_0_40px_rgba(245,158,11,0.05)]">
              <div className="flex items-center gap-3 text-tertiary">
                <ShieldAlert className="w-5 h-5" />
                <span className="font-black text-xs uppercase tracking-[0.2em]">Escalation Threshold Breached</span>
              </div>
              <p className="text-center text-[11px] text-muted-foreground font-medium leading-relaxed">
                Customer frustration index (0.84) coupled with infrastructure provisioning request triggered governance halt. Manual oversight required.
              </p>
            </div>
          </motion.div>

          <HumanInterventionPanel 
            reason="The customer is requesting manual resource provisioning which exceeds current AI governance parameters. Marcus Thorne is a Tier 1 executive contact." 
            customerTier="Enterprise Priority"
          />
        </div>
      </div>

      <ChatInput />
    </div>
  );
}
