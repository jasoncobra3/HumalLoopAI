import React from "react";
import { cn } from "@/lib/utils";

interface ConfidencePoint {
  time: string;
  value: number;
}

export function ConfidenceChart({ data, current }: { data: number[], current: number }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h4 className="text-sm font-bold text-foreground">Confidence Flow Intelligence</h4>
          <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mt-1">Real-time analysis dip detected</p>
        </div>
        <div className={cn(
          "text-4xl font-black tracking-tighter transition-colors",
          current < 40 ? "text-error" : current < 70 ? "text-tertiary" : "text-secondary"
        )}>
          {current}%
        </div>
      </div>
      
      <div className="h-20 flex items-end gap-1.5">
        {data.map((val, i) => (
          <div 
            key={i}
            className={cn(
              "flex-1 rounded-t-lg transition-all duration-500",
              val < 40 ? "bg-error/40 shadow-[0_0_15px_rgba(239,44,44,0.2)]" : 
              val < 70 ? "bg-tertiary/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]" : 
              "bg-primary/20"
            )}
            style={{ height: `${val}%` }}
          />
        ))}
      </div>
      
      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-40">
        <span>Inbound</span>
        <span>Reasoning</span>
        <span>Retrieval</span>
        <span>Generation</span>
      </div>
    </div>
  );
}
