import { cn } from "@/lib/utils";
import { Check, AlertTriangle, Circle } from "lucide-react";
import { motion } from "motion/react";

interface Step {
  id: string;
  label: string;
  description: string;
  status: "complete" | "alert" | "pending";
}

interface ReasoningTraceProps {
  steps: Step[];
}

export function ReasoningTrace({ steps }: ReasoningTraceProps) {
  return (
    <div className="glass-card p-6 rounded-2xl border-white/5 shadow-2xl">
      <h3 className="text-sm font-bold text-foreground mb-8 uppercase tracking-[0.2em] opacity-80">AI Logic Trace</h3>
      <div className="space-y-6 relative">
        {/* Vertical Line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/5" />
        
        {steps.map((step, i) => (
          <motion.div 
            key={step.id} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-10"
          >
            <div 
              className={cn(
                "absolute left-0 top-0.5 w-6 h-6 rounded-full flex items-center justify-center z-10 border transition-all",
                step.status === "complete" ? "bg-secondary border-secondary text-secondary-foreground shadow-[0_0_15px_rgba(34,211,238,0.3)]" :
                step.status === "alert" ? "bg-tertiary border-tertiary text-tertiary-foreground shadow-[0_0_15px_rgba(255,183,131,0.3)]" :
                "bg-muted border-white/10 text-muted-foreground"
              )}
            >
              {step.status === "complete" ? <Check className="w-3.5 h-3.5" /> :
               step.status === "alert" ? <AlertTriangle className="w-3.5 h-3.5" /> :
               <Circle className="w-2 h-2 fill-current" />}
            </div>
            
            <div>
              <p className={cn(
                "text-xs font-bold transition-colors",
                step.status === "alert" ? "text-tertiary" : "text-foreground"
              )}>
                {step.label}
              </p>
              <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
