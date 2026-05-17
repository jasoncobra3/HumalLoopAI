import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { TrendingUp, MousePointer2 } from "lucide-react";

export function LearningVelocityGraph() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-2xl h-[460px] flex flex-col ring-1 ring-white/5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 shrink-0">
        <div>
          <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
            Learning Velocity
            <span className="px-2 py-0.5 bg-primary/20 text-primary text-[9px] rounded-lg font-black uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(99,102,241,0.2)]">Live Engine</span>
          </h3>
          <p className="text-xs text-muted-foreground mt-1.5 opacity-60 tracking-tight">Real-time confidence improvement and model alignment metrics</p>
        </div>
        <div className="flex bg-white/5 p-1 rounded-xl border border-white/5 self-start sm:self-auto">
          {["1W", "1M", "ALL"].map((p) => (
            <button
              key={p}
              className={cn(
                "px-4 py-1.5 rounded-lg text-[10px] font-black tracking-widest transition-all",
                p === "1M" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="relative flex-1 min-h-0 w-full">
        {/* SVG Graph Overlay */}
        <div className="absolute inset-x-0 bottom-8 top-4">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 240" preserveAspectRatio="none">
            <defs>
              <linearGradient id="velocityGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lineGlow" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="1" />
              </linearGradient>
            </defs>
            
            <path 
              d="M0,200 Q150,180 300,120 T600,80 T1000,30" 
              fill="none" 
              stroke="url(#lineGlow)" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            />
            <path 
              d="M0,200 Q150,180 300,120 T600,80 T1000,30 V240 H0 Z" 
              fill="url(#velocityGradient)"
            />
          </svg>
        </div>

        {/* Floating Tooltip */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-0 top-0 bg-background/80 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl z-20 w-[240px] hidden md:block"
        >
          <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-2 opacity-60">Neural Accuracy Gain</div>
          <div className="flex items-end gap-3 mb-3">
            <span className="text-3xl font-black text-foreground tracking-tighter">98.4%</span>
            <div className="flex items-center gap-1 text-green-400 font-black text-[11px] mb-1">
              <TrendingUp className="w-3 h-3" />
              <span>+2.1%</span>
            </div>
          </div>
          <div className="space-y-2 pt-2 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
              <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Target Threshold</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Active Learning</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Labels */}
        <div className="absolute bottom-0 w-full flex justify-between px-2 text-[10px] font-black uppercase text-muted-foreground opacity-30 tracking-[0.3em] pointer-events-none">
          <span>Feb 01</span>
          <span>Feb 15</span>
          <span>Mar 01</span>
          <span>Mar 15</span>
          <span>Apr 01</span>
        </div>
      </div>

      {/* Hero Visual Accent */}
      <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none opacity-50" />
    </div>
  );
}
