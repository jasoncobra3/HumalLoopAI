import React from "react";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import { MemoryAnalytics } from "../components/ai-memory/MemoryAnalytics";
import { LearningVelocityGraph } from "../components/ai-memory/LearningVelocityGraph";
import { KnowledgeManagementTable } from "../components/ai-memory/KnowledgeManagementTable";
import { SelfLearningPanel } from "../components/ai-memory/SelfLearningPanel";
import { Plus } from "lucide-react";
import { motion } from "motion/react";

export default function MemoryPage() {
  return (
    <DashboardLayout>
      <div className="space-y-[32px] pb-12">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary bg-primary/10 px-2 py-0.5 rounded">Intelligence Hub</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest opacity-60">Neural Architecture: V4.2</span>
            </div>
            <div className="space-y-1">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">AI Memory & Analytics</h1>
              <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
                Real-time visualization of cognitive evolution, vector health, and autonomous learning velocity across the enterprise infrastructure.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2 shrink-0">
            <div className="bg-white/5 backdrop-blur-xl border border-white/5 px-6 py-3 rounded-2xl flex flex-col justify-center min-w-[200px]">
              <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground opacity-60 mb-1">System Stability</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold text-foreground">Operational</span>
                <span className="text-[10px] text-muted-foreground ml-auto font-mono">99.9%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Analytics Cards */}
        <section>
          <MemoryAnalytics />
        </section>

        {/* Core Visualizations */}
        <section>
          <LearningVelocityGraph />
        </section>

        {/* Enterprise Table */}
        <section>
          <KnowledgeManagementTable />
        </section>

        {/* Self-Learning Engine Panel */}
        <section>
          <SelfLearningPanel />
        </section>
      </div>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-[32px] right-[32px] w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-[0_0_40px_rgba(99,102,241,0.4)] flex items-center justify-center z-50 group border border-white/20 transition-all duration-300"
      >
        <Plus className="w-7 h-7" />
        <span className="absolute right-20 bg-background/90 backdrop-blur-xl text-foreground text-[10px] font-black uppercase tracking-widest py-3 px-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border border-white/10 shadow-2xl translate-x-4 group-hover:translate-x-0">
          Ingest Knowledge
        </span>
      </motion.button>
    </DashboardLayout>
  );
}
