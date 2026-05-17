import { motion } from "motion/react";

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center ai-pulse">
         <span className="w-4 h-4 bg-primary-foreground rounded-sm animate-spin" />
      </div>
      <div className="flex items-center gap-1.5 p-3 px-4 bg-secondary/10 rounded-full border border-secondary/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 0.6 }} 
          className="w-1.5 h-1.5 rounded-full bg-secondary" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} 
          className="w-1.5 h-1.5 rounded-full bg-secondary" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} 
          className="w-1.5 h-1.5 rounded-full bg-secondary" 
        />
        <span className="text-[10px] text-secondary font-bold ml-2 uppercase tracking-widest">Reasoning...</span>
      </div>
    </div>
  );
}
