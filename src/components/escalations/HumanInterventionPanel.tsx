import React from "react";
import { AlertCircle, UserCheck, ShieldAlert, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

interface HumanInterventionPanelProps {
  reason: string;
  customerTier: string;
}

export function HumanInterventionPanel({ reason, customerTier }: HumanInterventionPanelProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 border border-error/30 bg-error/5 rounded-[2.5rem] relative overflow-hidden group shadow-2xl"
    >
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
        <ShieldAlert className="w-40 h-40 text-error" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-error text-error-foreground rounded-2xl shadow-lg shadow-error/20">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-error tracking-tight">Human Intervention Required</h4>
            <p className="text-[10px] text-error/60 uppercase font-black tracking-[0.2em]">High Priority Escalation</p>
          </div>
        </div>
        
        <p className="text-foreground text-sm font-medium leading-relaxed mb-8 max-w-2xl">
          {reason} Customer is currently in <span className="text-error font-bold underline decoration-error/30 underline-offset-4">{customerTier} tier</span>. 
          AI reasoning has identified a governance restriction requiring immediate human oversight.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Button className="bg-foreground text-background hover:bg-foreground/90 font-bold rounded-xl px-8 h-12 shadow-xl">
            Assign to Me
          </Button>
          <Button variant="outline" className="border-white/10 hover:bg-white/5 font-bold rounded-xl px-8 h-12 text-foreground flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            Reply via Draft
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-green-400 font-bold px-6 h-12 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Mark Resolved
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
