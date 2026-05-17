import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Metric {
  label: string;
  value: string;
  percentage: number;
  color: string;
  glowColor: string;
}

const metrics: Metric[] = [
  { 
    label: "Embeddings Generated", 
    value: "1.2M", 
    percentage: 75, 
    color: "bg-primary",
    glowColor: "bg-primary/5"
  },
  { 
    label: "Chunk Count", 
    value: "42.8k", 
    percentage: 50, 
    color: "bg-secondary",
    glowColor: "bg-secondary/5"
  },
  { 
    label: "Vectorization Progress", 
    value: "89%", 
    percentage: 89, 
    color: "bg-tertiary",
    glowColor: "bg-tertiary/5"
  }
];

export function IngestionAnalytics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-white/10 transition-all shadow-xl flex flex-col justify-between min-h-[160px]"
        >
          <div className={cn("absolute top-0 right-0 w-24 h-24 rounded-bl-full transition-colors opacity-20 -mr-10 -mt-10 blur-2xl", metric.glowColor)} />
          
          <div className="flex flex-col">
            <div className="min-h-[32px] flex items-start">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-60 leading-tight">{metric.label}</span>
            </div>
            <div className={cn("mt-4 text-4xl font-black tracking-tighter transition-transform group-hover:scale-105 origin-left font-mono", i === 0 ? "text-primary" : i === 1 ? "text-secondary" : "text-tertiary")}>
              {metric.value}
            </div>
          </div>
          
          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Efficiency</span>
              <span className="text-[9px] font-bold text-foreground font-mono">{metric.percentage}%</span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${metric.percentage}%` }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "circOut" }}
                className={cn("h-full", metric.color)} 
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
