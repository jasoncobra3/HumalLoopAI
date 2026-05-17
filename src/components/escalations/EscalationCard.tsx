import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, Clock, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

export interface Escalation {
  id: string;
  customerName: string;
  preview: string;
  timestamp: string;
  status: "escalated" | "pending" | "resolved";
  priority: "high" | "medium" | "low";
  confidence: number;
}

interface EscalationCardProps {
  escalation: Escalation;
  isSelected?: boolean;
  onClick?: () => void;
}

export function EscalationCard({ escalation, isSelected, onClick }: EscalationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
      className={cn(
        "p-5 border-b border-white/5 cursor-pointer transition-all relative group",
        isSelected 
          ? "bg-primary/5 border-l-4 border-l-primary" 
          : "hover:bg-white/5"
      )}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
          {escalation.customerName}
        </span>
        <span className="text-[10px] text-muted-foreground font-medium opacity-60">
          {escalation.timestamp}
        </span>
      </div>
      
      <p className="text-muted-foreground text-xs line-clamp-1 mb-3">
        {escalation.preview}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={cn(
            "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider",
            escalation.status === "escalated" ? "bg-amber-400/10 text-amber-500" : "bg-muted text-muted-foreground"
          )}>
            {escalation.status}
          </div>
          <div className={cn(
            "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider",
            escalation.priority === "high" ? "bg-error/10 text-error" : 
            escalation.priority === "medium" ? "bg-amber-400/10 text-amber-500" : 
            "bg-muted text-muted-foreground"
          )}>
            {escalation.priority}
          </div>
        </div>
        
        <div className="flex items-center gap-1.5">
          <div className={cn(
            "w-1.5 h-1.5 rounded-full",
            escalation.confidence < 40 ? "bg-error" : escalation.confidence < 70 ? "bg-amber-500" : "bg-secondary"
          )} />
          <span className={cn(
            "text-[10px] font-bold uppercase",
            escalation.confidence < 40 ? "text-error" : escalation.confidence < 70 ? "text-amber-500" : "text-secondary"
          )}>
            {escalation.confidence}% Confidence
          </span>
        </div>
      </div>
    </motion.div>
  );
}
