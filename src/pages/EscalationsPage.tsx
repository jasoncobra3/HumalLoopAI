import React, { useState } from "react";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import { EscalationCard, Escalation } from "../components/escalations/EscalationCard";
import { EscalationDetail } from "../components/escalations/EscalationDetail";
import { Input } from "@/components/ui/input";
import { Search, Filter, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const mockEscalations: Escalation[] = [
  { 
    id: "1", 
    customerName: "Global Finance Corp.", 
    preview: "API response timeout during high-frequency trading simulation...", 
    timestamp: "12m ago", 
    status: "escalated", 
    priority: "high", 
    confidence: 38 
  },
  { 
    id: "2", 
    customerName: "Sarah Jenkins", 
    preview: "Unable to reconcile billing cycle with manual seat adjustment...", 
    timestamp: "45m ago", 
    status: "escalated", 
    priority: "medium", 
    confidence: 45 
  },
  { 
    id: "3", 
    customerName: "TechFlow Systems", 
    preview: "Model hallucinations detected in production deployment 4...", 
    timestamp: "1h ago", 
    status: "escalated", 
    priority: "high", 
    confidence: 22 
  },
  { 
    id: "4", 
    customerName: "Venture Lab", 
    preview: "Request for custom SOC2 compliance documentation template...", 
    timestamp: "2h ago", 
    status: "pending", 
    priority: "low", 
    confidence: 65 
  },
];

export default function EscalationsPage() {
  const [selectedId, setSelectedId] = useState("1");
  const [activeFilter, setActiveFilter] = useState("All");

  const selectedEscalation = mockEscalations.find(e => e.id === selectedId);

  return (
    <DashboardLayout noScroll maxContentWidth="max-w-none">
      <div className="flex h-full overflow-hidden">
        {/* Left Side: Inbox */}
        <section className="w-[400px] border-r border-white/5 flex flex-col bg-accent/10 backdrop-blur-3xl z-20 shadow-2xl">
          <div className="p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Escalations</h2>
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em] mt-1">Management Console</p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-error/10 text-error rounded-full border border-error/20">
                <AlertCircle className="w-3 h-3" />
                <span className="text-[10px] font-black uppercase tracking-wider">12 New</span>
              </div>
            </div>

            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                className="w-full bg-muted/30 border-white/5 rounded-2xl py-6 pl-10 pr-4 text-sm focus-visible:ring-primary focus-visible:bg-muted/50 transition-all placeholder:text-muted-foreground/30" 
                placeholder="Search escalations..." 
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["All", "High Priority", "Unassigned"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all",
                    activeFilter === filter 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {mockEscalations.map((escalation) => (
              <div key={escalation.id}>
                <EscalationCard 
                  escalation={escalation} 
                  isSelected={selectedId === escalation.id}
                  onClick={() => setSelectedId(escalation.id)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Right Side: Detail */}
        <section className="flex-1 min-w-0 bg-background/20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
          <AnimatePresence mode="wait">
            {selectedEscalation ? (
              <motion.div
                key={selectedEscalation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <EscalationDetail customerName={selectedEscalation.customerName} />
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground italic flex-col gap-4">
                <div className="p-6 bg-muted/20 rounded-full">
                  <AlertCircle className="w-10 h-10 opacity-20" />
                </div>
                Select an escalation to view details
              </div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </DashboardLayout>
  );
}
