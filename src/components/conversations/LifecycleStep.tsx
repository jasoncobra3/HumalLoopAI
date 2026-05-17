import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface LifecycleStepProps {
  icon: React.ReactNode;
  timestamp: string;
  type: string;
  children: React.ReactNode;
  isLast?: boolean;
}

export function LifecycleStep({ icon, timestamp, type, children, isLast }: LifecycleStepProps) {
  return (
    <div className="flex gap-8 relative group">
      {!isLast && (
        <div className="absolute left-[27px] top-14 bottom-0 w-px bg-gradient-to-b from-primary via-tertiary to-secondary opacity-30" />
      )}
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-full bg-accent/40 border-2 border-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
          <div className="text-primary">
            {icon}
          </div>
        </div>
      </div>

      <div className="flex-1 pb-12">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-60">
            {timestamp} • {type}
          </span>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-accent/10 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:border-primary/40 transition-all duration-300 group/card shadow-2xl"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
