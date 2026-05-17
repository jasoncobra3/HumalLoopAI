import React from "react";
import { cn } from "@/lib/utils";
import { Bot, User, AlertCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export interface Message {
  id: string;
  role: "customer" | "ai" | "system";
  content: string;
  timestamp: string;
  isEscalated?: boolean;
}

export interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isAi = message.role === "ai";
  const isSystem = message.role === "system";

  if (isSystem) {
    return (
      <div className="flex justify-center p-4">
        <div className="bg-muted/50 text-muted-foreground text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-white/5">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={cn(
        "flex gap-4 max-w-[85%] group",
        isAi ? "ml-auto flex-row-reverse" : "mr-auto"
      )}
    >
      <div className={cn(
        "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-110",
        isAi ? "bg-primary ai-pulse" : "bg-muted shadow-lg"
      )}>
        {isAi ? (
          <Bot className="w-5 h-5 text-primary-foreground" />
        ) : (
          <User className="w-5 h-5 text-muted-foreground" />
        )}
      </div>
      
      <div className="space-y-1">
        <div className={cn(
          "p-4 rounded-2xl border transition-all duration-300",
          isAi 
            ? "bg-primary/5 border-primary/20 rounded-tr-none shadow-[0_0_20px_rgba(99,102,241,0.05)]" 
            : "bg-card border-white/5 rounded-tl-none shadow-xl group-hover:border-white/10"
        )}>
          {isAi && (
            <div className="flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3 h-3 text-primary animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.15em]">HumanLoop AI</span>
            </div>
          )}
          <p className={cn(
            "text-sm leading-relaxed",
            isAi ? "text-foreground" : "text-muted-foreground"
          )}>
            {message.content}
          </p>
        </div>
        
        <div className={cn(
          "flex items-center gap-2 px-1",
          isAi ? "justify-end" : "justify-start"
        )}>
          <span className="text-[10px] text-muted-foreground/50 font-medium">
            {message.timestamp}
          </span>
          {message.isEscalated && !isAi && (
            <div className="flex items-center gap-1 text-error">
              <AlertCircle className="w-3 h-3" />
              <span className="text-[9px] font-bold uppercase tracking-wider">Escalated</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
