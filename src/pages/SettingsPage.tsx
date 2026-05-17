import React, { useState } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { TopNav } from "../components/layout/TopNav";
import { SnippetInstallationPanel } from "../components/settings/SnippetInstallationPanel";
import { AiIntelligenceSettings } from "../components/settings/AiIntelligenceSettings";
import { AppearanceEditor } from "../components/settings/AppearanceEditor";
import { SupportIntegrations } from "../components/settings/SupportIntegrations";
import { LiveWidgetPreview } from "../components/settings/LiveWidgetPreview";
import { Save, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AssistantSettings, defaultSettings } from "@/types/settings";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { DashboardLayout } from "../components/layout/DashboardLayout";

export default function SettingsPage() {
  const [settings, setSettings] = useState<AssistantSettings>(defaultSettings);
  const [isSaving, setIsSaving] = useState(false);
  const [showSaved, setShowSaved] = useState(false);

  const updateSettings = (updates: Partial<AssistantSettings>) => {
    setSettings((prev) => ({ ...prev, ...updates }));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSaved(true);
      setTimeout(() => setShowSaved(false), 3000);
    }, 800);
  };

  return (
    <DashboardLayout noScroll>
      <div className="flex h-full overflow-hidden">
        {/* Left Panel: Settings Scroll Area */}
        <div className="w-full lg:w-[73%] overflow-y-auto custom-scrollbar">
          <div className="px-6 py-8 md:px-8 lg:px-12 xl:px-[48px] max-w-4xl mx-auto space-y-[32px] pb-32">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary bg-primary/10 px-2 py-0.5 rounded">Configuration Hub</span>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest opacity-60">Deployment ID: PROD-77A</span>
              </div>
              <div className="space-y-1">
                <h1 className="text-4xl font-bold tracking-tight text-foreground">Widget & Settings</h1>
                <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
                  Deploy and configure your autonomous support agent with granular control over AI behavior, 
                  visual branding, and ecosystem integrations.
                </p>
              </div>
            </motion.div>
 
            {/* Sections */}
            <div className="space-y-[32px]">
              <section><SnippetInstallationPanel /></section>
              <section><AiIntelligenceSettings settings={settings} onUpdate={updateSettings} /></section>
              <section><AppearanceEditor settings={settings} onUpdate={updateSettings} /></section>
              <section><SupportIntegrations /></section>
            </div>
          </div>
        </div>
 
        {/* Right Panel: Live Preview Sticky */}
        <div className="hidden lg:block w-[27%] shrink-0 border-l border-white/5 bg-[#08090D] relative z-10">
          <div className="h-full flex flex-col">
            {/* Unified Preview Header */}
            <div className="p-10 pb-6 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(99,102,241,0.5)]" />
                  <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Neural Simulator</h3>
                </div>
                <Badge variant="outline" className="bg-primary/10 border-primary/20 text-[9px] text-primary uppercase font-black px-3 py-1">
                  Active Sync
                </Badge>
              </div>
            </div>

            <div className="flex-1 min-h-0 relative">
              <LiveWidgetPreview settings={settings} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Save Action - Improved positioning and visual weight */}
      <div className="fixed bottom-10 right-10 flex items-center gap-6 z-[100]">
        <AnimatePresence>
          {showSaved && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-green-500/10 backdrop-blur-xl border border-green-500/20 px-6 py-3 rounded-2xl flex items-center gap-3"
            >
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-sm font-bold text-green-400">Settings Synchronized</span>
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="w-14 h-14 rounded-full shadow-[0_0_40px_rgba(99,102,241,0.4)] bg-primary text-primary-foreground hover:scale-105 active:scale-95 transition-all group p-0 flex items-center justify-center"
        >
          <motion.div
            animate={isSaving ? { rotate: 360 } : { rotate: 0 }}
            transition={isSaving ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
          >
            <Save className={cn("w-6 h-6", isSaving && "opacity-50")} />
          </motion.div>
          <span className="absolute right-20 bg-background/90 backdrop-blur-xl text-foreground text-[10px] font-black uppercase tracking-widest py-3 px-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border border-white/10 shadow-2xl translate-x-4 group-hover:translate-x-0">
            Save Configuration
          </span>
        </Button>
      </div>
    </DashboardLayout>
  );
}
