import { ConfidenceGauge } from "./ConfidenceGauge";
import { RetrievalCard } from "./RetrievalCard";
import { ReasoningTrace } from "./ReasoningTrace";
import { AlertCircle, Zap } from "lucide-react";
import { motion } from "motion/react";

const mockChunks = [
  { 
    id: "1", 
    source: "Billing Policy", 
    matchScore: 88, 
    content: "Enterprise subscriptions include automated scaling for Tier 2 features if usage exceeds 500 API calls per hour for 3 consecutive hours." 
  },
  { 
    id: "2", 
    source: "Service Add-ons", 
    matchScore: 74, 
    content: "Manual authorization is required for permanent tier upgrades, but temporary burst-capacity add-ons are pre-authorized." 
  },
  { 
    id: "3", 
    source: "Refund Policy", 
    matchScore: 41, 
    content: "Refunds for automated burst scaling are granted if usage spike was caused by verified platform instability." 
  }
];

const mockSteps = [
  { id: "1", label: "Analyzing Intent", status: "complete" as const, description: "Classified as 'Billing Dispute - Unauthorized Charge'" },
  { id: "2", label: "Searching Knowledge Base", status: "complete" as const, description: "Identified 'Tier 2 Add-ons' as potential burst billing." },
  { id: "3", label: "Confidence Evaluation", status: "alert" as const, description: "Uncertainty threshold reached: Burst trigger logic is ambiguous." },
  { id: "4", label: "Executing Hand-off", status: "pending" as const, description: "Waiting for human moderator review." }
];

export function AIAnalysisPanel() {
  return (
    <div className="flex flex-col gap-6">
      {/* Upper Panel: Stats & Alert */}
      <div className="glass-card p-6 rounded-2xl border-white/5 shadow-2xl flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] flex items-center gap-2">
            <Zap className="w-4 h-4" />
            AI Reasoning Core
          </h3>
          <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md">Live Session</span>
        </div>

        <div className="flex items-center gap-8">
          <ConfidenceGauge percentage={42} />
          
          <div className="flex-1 space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-tertiary/10 border border-tertiary/30 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.05)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-tertiary animate-pulse" />
                <span className="text-xs font-bold text-tertiary uppercase tracking-wider">Escalation Triggered</span>
              </div>
              <p className="text-xs font-medium text-foreground leading-relaxed">
                Low confidence detected in billing logic. Escalating to <span className="text-tertiary underline decoration-tertiary/30 cursor-pointer hover:text-tertiary/80">Tier 2 Support</span>.
              </p>
            </motion.div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/50 rounded-xl border border-white/5 w-fit">
              <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Context Trigger:</span>
              <span className="text-[9px] text-error font-extrabold uppercase tracking-tight">Billing Ambiguity</span>
            </div>
          </div>
        </div>
      </div>

      <RetrievalCard chunks={mockChunks} />
      
      <ReasoningTrace steps={mockSteps} />
    </div>
  );
}
