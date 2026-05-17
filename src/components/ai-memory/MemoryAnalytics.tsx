import React from "react";
import { Brain, Activity, Target, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const metrics = [
  {
    title: "Total Learned Memories",
    value: "1.2M+",
    trend: "+12.5%",
    icon: Brain,
    color: "text-primary",
    chart: [40, 60, 55, 90, 80, 100],
  },
  {
    title: "Avg. Confidence Lift",
    value: "+42.8%",
    trend: "Optimized",
    icon: Target,
    color: "text-secondary",
    chart: [30, 45, 80, 70, 95, 85],
  },
  {
    title: "Human Verifications",
    value: "12,402",
    trend: "142 pending",
    icon: ShieldCheck,
    color: "text-tertiary",
    chart: [50, 40, 60, 50, 70, 60],
  },
  {
    title: "Vector DB Health",
    value: "Optimal",
    trend: "12ms avg",
    icon: Activity,
    color: "text-green-400",
    isPulse: true,
  },
];

export function MemoryAnalytics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/[0.03] backdrop-blur-3xl border border-white/5 rounded-2xl p-6 relative overflow-hidden group shadow-xl flex flex-col h-full ring-1 ring-white/5"
        >
          {/* Background Glow */}
          <div className={cn(
            "absolute -right-4 -top-4 w-20 h-20 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500",
            metric.color.replace("text-", "bg-")
          )} />
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
              {metric.title}
            </span>
            <metric.icon className={cn("w-4 h-4", metric.color)} />
          </div>
          
          <div className="flex-1 flex flex-col justify-end">
            <div className="flex items-baseline justify-between gap-4">
              <span className={cn("text-3xl font-black tracking-tighter shrink-0", metric.color)}>
                {metric.value}
              </span>
              {metric.chart && (
                <div className="flex gap-1 h-8 items-end w-16 invisible sm:visible">
                  {metric.chart.map((h, i) => (
                    <div 
                      key={i} 
                      className={cn("flex-1 rounded-t-sm bg-current opacity-20", metric.color)} 
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <span className={cn("text-[10px] font-bold font-mono px-2 py-0.5 rounded-lg bg-white/5", metric.color)}>
                {metric.trend}
              </span>
              <span className="text-[9px] text-muted-foreground font-black uppercase tracking-widest opacity-40">
                {metric.title.includes("Health") ? "Latency" : "30d Window"}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
