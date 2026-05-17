import { Building2, Database, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: number;
  label: string;
  icon: any;
  status: "active" | "next" | "completed";
}

const steps: Step[] = [
  { id: 1, label: "Workspace Setup", icon: Building2, status: "active" },
  { id: 2, label: "Knowledge Base", icon: Database, status: "next" },
  { id: 3, label: "Agent Configuration", icon: Cpu, status: "next" },
];

export function ProgressStepper() {
  return (
    <div className="flex items-center justify-between mb-12 relative max-w-2xl mx-auto">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10 -translate-y-1/2" />
      
      {steps.map((step) => (
        <div key={step.id} className="flex flex-col items-center gap-3">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
            step.status === "active" 
              ? "bg-primary text-primary-foreground ring-4 ring-primary/20 scale-110 shadow-lg shadow-primary/20" 
              : "bg-muted border border-white/5 text-muted-foreground"
          )}>
            <step.icon className="w-5 h-5" />
          </div>
          <span className={cn(
            "text-[10px] font-bold uppercase tracking-widest transition-colors",
            step.status === "active" ? "text-primary" : "text-muted-foreground"
          )}>
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
}
