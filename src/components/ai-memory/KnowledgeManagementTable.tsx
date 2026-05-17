import React from "react";
import { cn } from "@/lib/utils";
import { Download, Filter, MoreHorizontal, CheckCircle2, RefreshCw, AlertTriangle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const memories = [
  {
    id: "HL-9921-X",
    trigger: "How do I rotate enterprise encryption keys?",
    response: "Navigate to 'Security' -> 'Keys' and select 'Rotate Now'...",
    status: "SYNCED",
    gain: "+92%",
    updated: "Today, 10:45 AM",
    icon: CheckCircle2,
    color: "text-green-400"
  },
  {
    id: "HL-8822-M",
    trigger: "Regional latency compliance for GDPR.",
    response: "Verified policy: Data must remain in EU West cluster...",
    status: "VECTORIZED",
    gain: "+12%",
    updated: "Yesterday, 4:20 PM",
    icon: RefreshCw,
    color: "text-primary"
  },
  {
    id: "HL-1012-P",
    trigger: "Handling multiple failed payment retries.",
    response: "Conflict: Two conflicting human verifications found...",
    status: "CONFLICT",
    gain: "--",
    updated: "April 12, 09:12 AM",
    icon: AlertTriangle,
    color: "text-error"
  },
  {
    id: "HL-7731-K",
    trigger: "SLA escalation logic for Tier 3 accounts.",
    response: "Processing pattern verification from 124 sessions...",
    status: "PROCESSING",
    gain: "+24%",
    updated: "Just now",
    icon: Clock,
    color: "text-tertiary"
  }
];

export function KnowledgeManagementTable() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/5 rounded-[24px] overflow-hidden shadow-2xl flex flex-col ring-1 ring-white/5">
      <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-foreground tracking-tight">Enterprise Memory Pool</h3>
          <p className="text-xs text-muted-foreground mt-1.5 opacity-60">Audit and govern the AI's core learned response pairs with vector isolation.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
            {["Verified", "Processing", "Conflicts"].map((t) => (
              <button 
                key={t}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-[10px] font-black tracking-widest uppercase transition-all",
                  t === "Verified" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="w-10 h-10 border-white/5 bg-white/5 rounded-xl hover:bg-white/10 text-muted-foreground">
              <Download className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="w-10 h-10 border-white/5 bg-white/5 rounded-xl hover:bg-white/10 text-muted-foreground">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead className="sticky top-0 z-10 bg-background/90 backdrop-blur-xl">
            <tr className="border-b border-white/5">
              <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-50">Trigger Pattern</th>
              <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-50">Neural Logic</th>
              <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-50 text-center">Status</th>
              <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-50 text-center">Efficiency</th>
              <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-50 text-right">Last Sync</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {memories.map((row) => (
              <tr key={row.id} className="group hover:bg-white/[0.01] transition-colors cursor-pointer">
                <td className="px-8 py-6">
                  <div className="max-w-[320px]">
                    <p className="text-sm font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors tracking-tight">
                      {row.trigger}
                    </p>
                    <p className="text-[10px] font-mono text-muted-foreground opacity-40 mt-1.5 uppercase tracking-widest">Object: {row.id}</p>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <p className="text-xs text-muted-foreground italic line-clamp-2 max-w-sm leading-relaxed opacity-70">
                    "{row.response}"
                  </p>
                </td>
                <td className="px-8 py-6">
                  <div className="flex justify-center">
                    <span className={cn(
                      "px-3 py-1 rounded-lg text-[9px] font-black tracking-[0.15em] border flex items-center gap-2",
                      row.status === "CONFLICT" ? "bg-error/10 text-error border-error/20" :
                      row.status === "PROCESSING" ? "bg-tertiary/10 text-tertiary border-tertiary/20" :
                      "bg-secondary/10 text-secondary border-secondary/20 shadow-[0_0_10px_rgba(34,211,238,0.1)]"
                    )}>
                      <row.icon className="w-3 h-3" />
                      {row.status}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="text-center font-black text-sm tracking-tighter text-foreground opacity-80">
                    {row.gain}
                  </div>
                </td>
                <td className="px-8 py-6 text-right text-[10px] font-bold text-muted-foreground opacity-40 uppercase tabular-nums">
                  {row.updated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-6 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] opacity-40">
          Neural Pool Overflow: 1.2M Fragments
        </p>
        <div className="flex items-center gap-6">
          <button className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-all font-bold">
            Prev
          </button>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg border border-primary/30 bg-primary/10 text-primary flex items-center justify-center text-[11px] font-black">1</span>
            <span className="w-8 h-8 rounded-lg text-muted-foreground flex items-center justify-center text-[11px] font-black hover:bg-white/5 cursor-pointer">2</span>
            <span className="w-8 h-8 rounded-lg text-muted-foreground flex items-center justify-center text-[11px] font-black hover:bg-white/5 cursor-pointer">3</span>
          </div>
          <button className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-all font-bold">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
