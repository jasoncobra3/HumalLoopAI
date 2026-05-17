import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function FloatingInsight() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="glass-card p-5 rounded-3xl border border-primary/20 max-w-[320px] isolate relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary/5 blur-xl -z-10 rounded-3xl" />
      <div className="flex items-start gap-4">
        <div className="p-2.5 bg-primary/10 rounded-2xl text-primary shadow-[0_0_15px_rgba(99,102,241,0.2)]">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <h5 className="text-xs font-bold text-foreground uppercase tracking-widest">AI Insight</h5>
          <p className="text-sm text-muted-foreground leading-relaxed mt-2">
            Chunking strategy for <span className="text-secondary font-semibold">"annual_report_23.pdf"</span> has been optimized automatically based on table density.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
