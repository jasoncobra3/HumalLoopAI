import React from "react";
import { Brain, Search, Activity, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function ReasoningPanel() {
  return (
    <div className="space-y-8 h-full flex flex-col">
      {/* Intent Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-primary" />
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-foreground">Query Analysis</h3>
        </div>
        <div className="bg-muted/30 border border-white/5 rounded-2xl p-5 space-y-4">
          <div>
            <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Detected Intent</span>
            <div className="text-sm font-bold text-primary mt-1">SUBSCRIPTION_UPGRADE_LIMITS</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Sentiment</span>
              <div className="text-xs font-semibold text-foreground mt-1">Neutral (0.42)</div>
            </div>
            <div>
              <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Urgency</span>
              <div className="text-xs font-semibold text-tertiary mt-1">Level 4 / Critical</div>
            </div>
          </div>
        </div>
      </div>

      {/* Orchestration Logs */}
      <div className="flex-1 flex flex-col space-y-4 min-h-0">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-secondary" />
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-foreground">Orchestration Logs</h3>
        </div>
        <div className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-4 font-mono text-[10px] space-y-3 overflow-y-auto custom-scrollbar">
          {[
            { t: "10:42:01.291", msg: "Inbound request received: user_id=8831", color: "text-muted-foreground" },
            { t: "10:42:01.342", msg: "Executing embedding strategy: Text-Embedding-3", color: "text-primary" },
            { t: "10:42:01.812", msg: "Semantic search returned 4 valid chunks", color: "text-secondary" },
            { t: "10:42:01.901", msg: "Applying governance filters: Role_Admin", color: "text-muted-foreground" },
            { t: "10:42:02.102", msg: "LLM synthesis started: Gemini Pro 1.5", color: "text-primary" },
            { t: "10:42:03.451", msg: "Confidence threshold check failed: 38%", color: "text-error font-bold" },
            { t: "10:42:03.460", msg: "Triggering escalation protocol: P-0", color: "text-tertiary" },
            { t: "10:42:03.501", msg: "Handoff packet built for Specialist queue", color: "text-muted-foreground" },
          ].map((log, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-muted-foreground/40 shrink-0">{log.t}</span>
              <span className={log.color}>{log.msg}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow Health */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-tertiary" />
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-foreground">Workflow Health</h3>
        </div>
        <div className="bg-accent/10 border border-white/5 rounded-2xl p-5 flex items-center justify-between shadow-xl">
          <div className="relative w-16 h-16">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-white/5" strokeWidth="3" />
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-primary" strokeWidth="3" strokeDasharray="92 100" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-foreground">92%</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-foreground">Optimization Alert</div>
            <p className="text-[10px] text-muted-foreground mt-1">Performing 8% above baseline.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
