import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ConfidenceGaugeProps {
  percentage: number;
}

export function ConfidenceGauge({ percentage }: ConfidenceGaugeProps) {
  const isLow = percentage < 70;
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full transform -rotate-90">
        {/* Background Circle */}
        <circle 
          className="text-white/5" 
          cx="64" cy="64" r={radius} 
          fill="transparent" 
          stroke="currentColor" 
          strokeWidth="8" 
        />
        {/* Progress Circle */}
        <motion.circle 
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={cn("transition-colors duration-500", isLow ? "text-tertiary" : "text-primary")}
          cx="64" cy="64" r={radius} 
          fill="transparent" 
          stroke="currentColor" 
          strokeWidth="8" 
          strokeDasharray={circumference} 
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn("text-3xl font-bold font-mono tracking-tighter", isLow ? "text-tertiary" : "text-primary")}
        >
          {percentage}%
        </motion.span>
        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.2em] mt-1">Confidence</span>
      </div>
      
      {/* Glow Effect */}
      <div className={cn(
        "absolute inset-0 blur-2xl opacity-20 transition-colors duration-500",
        isLow ? "bg-tertiary" : "bg-primary"
      )} />
    </div>
  );
}
