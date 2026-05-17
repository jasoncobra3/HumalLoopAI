import React from "react";
import { motion } from "motion/react";
import { LogIn, Scissors, Database, ChevronRight } from "lucide-react";

export function ProcessingPipeline() {
  return (
    <div>
      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8 text-center opacity-60">AI Processing Pipeline</h3>
      
      <div className="relative max-w-lg mx-auto">
        {/* Connector Line - Now carefully positioned to hit the center of the icons */}
        <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
        
        <div className="relative flex items-start justify-between">
          {/* Nodes */}
          <div className="relative z-10 flex flex-col items-center gap-4 group">
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all shadow-xl backdrop-blur-sm relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <LogIn className="w-5 h-5 text-primary relative z-10" />
            </motion.div>
            <div className="text-center space-y-1">
              <p className="text-[11px] font-black text-foreground uppercase tracking-wider">Raw Input</p>
              <p className="text-[9px] text-muted-foreground uppercase tracking-widest opacity-60">JSON, PDF</p>
            </div>
          </div>

          <div className="pt-4">
            <ChevronRight className="w-4 h-4 text-white/10 animate-pulse" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-4 group">
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ai-pulse group-hover:border-secondary/50 transition-all shadow-xl backdrop-blur-sm relative"
            >
              <div className="absolute inset-0 bg-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Scissors className="w-5 h-5 text-secondary relative z-10" />
            </motion.div>
            <div className="text-center space-y-1">
              <p className="text-[11px] font-black text-foreground uppercase tracking-wider">Semantic</p>
              <p className="text-[9px] text-muted-foreground uppercase tracking-widest opacity-60">Chunking</p>
            </div>
          </div>

          <div className="pt-4">
            <ChevronRight className="w-4 h-4 text-white/10 animate-pulse" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-4 group">
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-tertiary/50 transition-all shadow-xl backdrop-blur-sm relative"
            >
              <div className="absolute inset-0 bg-tertiary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Database className="w-5 h-5 text-tertiary relative z-10" />
            </motion.div>
            <div className="text-center space-y-1">
              <p className="text-[11px] font-black text-foreground uppercase tracking-wider">Persistence</p>
              <p className="text-[9px] text-muted-foreground uppercase tracking-widest opacity-60">Vector DB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
