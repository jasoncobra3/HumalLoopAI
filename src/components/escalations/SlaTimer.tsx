import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlaTimerProps {
  initialMinutes: number;
}

export function SlaTimer({ initialMinutes }: SlaTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isUrgent = timeLeft < 300; // Less than 5 minutes

  return (
    <div className="text-right group">
      <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em] mb-1 group-hover:text-error transition-colors">SLA Deadline</p>
      <div className={cn(
        "flex items-center gap-2 font-mono text-xl font-bold transition-all",
        isUrgent ? "text-error animate-pulse scale-105" : "text-foreground"
      )}>
        <Clock className={cn("w-4 h-4", isUrgent ? "text-error" : "text-muted-foreground")} />
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
}
