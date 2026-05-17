import React from "react";
import { RefreshCw, Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SelfLearningPanel() {
  return (
    <div className="bg-white/[0.03] border border-secondary/20 rounded-[32px] p-10 relative overflow-hidden group shadow-2xl ring-1 ring-secondary/10">
      {/* Background Pulse */}
      <div className="absolute -left-24 -top-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] group-hover:bg-secondary/20 transition-colors duration-1000" />
      
      <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-10">
        <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-[24px] bg-secondary/20 flex items-center justify-center border border-secondary/30 relative z-10 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <RefreshCw className="w-10 h-10 text-secondary animate-spin-slow" />
            </div>
            <div className="absolute inset-0 bg-secondary/20 blur-2xl animate-pulse" />
          </div>
          
          <div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <h4 className="text-2xl font-black text-foreground tracking-tighter">Self-Learning Intelligence Loop</h4>
              <span className="px-3 py-1 bg-secondary/20 text-secondary text-[9px] rounded-lg font-black uppercase tracking-[0.2em] border border-secondary/30">
                L-SYNTH v4.2 PRO
              </span>
            </div>
            <p className="text-[13px] text-muted-foreground mt-3 max-w-2xl leading-relaxed opacity-70">
              HumanLoop AI is currently analyzing <span className="text-foreground font-bold underline decoration-secondary/30 underline-offset-4 tracking-tight">4,129 recent traces</span> to identify recurring knowledge gaps. 
              Estimated next memory synthesis phase begins in <span className="text-secondary font-black font-mono">14:02s</span>.
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 shrink-0">
          <Button variant="ghost" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
            <Info className="w-4 h-4 mr-2 opacity-50" />
            Audit Logic
          </Button>
          <Button className="bg-secondary text-secondary-foreground font-black uppercase tracking-[0.2em] text-[10px] rounded-xl h-12 px-8 flex items-center gap-3 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all hover:scale-105 active:scale-95">
            <Play className="w-3.5 h-3.5 fill-current" />
            Trigger Synthesis
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
