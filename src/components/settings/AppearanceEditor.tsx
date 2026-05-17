import React from "react";
import { Palette, Sun, Moon, Layout, MoveHorizontal } from "lucide-react";
import { AssistantSettings, InterfaceMode, WidgetPosition } from "@/types/settings";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface Props {
  settings: AssistantSettings;
  onUpdate: (updates: Partial<AssistantSettings>) => void;
}

const colorPresets = [
  "#6366F1", // Indigo
  "#06B6D4", // Cyan
  "#10B981", // Emerald
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#EC4899", // Pink
];

export function AppearanceEditor({ settings, onUpdate }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white/[0.03] backdrop-blur-3xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-2xl space-y-10 ring-1 ring-white/5"
    >
      <div className="flex items-center justify-between gap-4 mb-2">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
            <Palette className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground tracking-tight">Visual Identity Sync</h3>
            <p className="text-xs text-muted-foreground mt-1.5 opacity-60">Customize branding characteristics and interface delivery modes.</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-widest text-primary/70">Live Connection Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] pt-8 border-t border-white/5">
        {/* Color Picker */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Master Brand Tone</h4>
          <div className="flex flex-wrap gap-3">
            {colorPresets.map((color) => (
              <button
                key={color}
                onClick={() => onUpdate({ brandColor: color })}
                className={cn(
                  "w-10 h-10 rounded-xl border-4 transition-all duration-300",
                  settings.brandColor === color 
                    ? "border-foreground scale-110 shadow-[0_0_15px_rgba(0,0,0,0.5)]" 
                    : "border-transparent hover:scale-105 opacity-60 hover:opacity-100"
                )}
                style={{ backgroundColor: color }}
              />
            ))}
            <div className="relative group/picker overflow-hidden rounded-xl">
              <input
                type="color"
                value={settings.brandColor}
                onChange={(e) => onUpdate({ brandColor: e.target.value })}
                className="w-10 h-10 border-4 border-transparent cursor-pointer bg-white/5 scale-150"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover/picker:opacity-100 transition-opacity">
                <span className="text-[8px] font-black uppercase">Hex</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground opacity-40 font-bold uppercase tracking-widest">{settings.brandColor}</span>
          </div>
        </div>

        {/* Interface Mode */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Interface Strategy</h4>
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 ring-1 ring-white/5">
            {(["dark", "light"] as InterfaceMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => onUpdate({ interfaceMode: mode })}
                className={cn(
                  "flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3",
                  settings.interfaceMode === mode 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {mode === "dark" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Widget Position */}
      <div className="space-y-6 pt-8 border-t border-white/5">
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Neural Anchor Point</h4>
        <div className="grid grid-cols-2 gap-[24px]">
          {(["bottom-right", "bottom-left"] as WidgetPosition[]).map((pos) => (
            <button
              key={pos}
              onClick={() => onUpdate({ position: pos })}
              className={cn(
                "p-5 rounded-2xl border transition-all text-left group/pos relative overflow-hidden",
                settings.position === pos 
                  ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(99,102,241,0.1)]" 
                  : "bg-white/5 border-white/5 text-muted-foreground hover:border-white/20"
              )}
            >
              <div className="flex items-center justify-between mb-4 relative z-10">
                <Layout className={cn("w-5 h-5", settings.position === pos ? "text-primary" : "text-muted-foreground/40")} />
                <div className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  settings.position === pos ? "bg-primary animate-pulse shadow-[0_0_10px_#6366F1]" : "bg-muted-foreground/20"
                )} />
              </div>
              <span className={cn(
                "text-[10px] font-black uppercase tracking-[0.2em] relative z-10",
                settings.position === pos ? "text-foreground" : "text-muted-foreground/60"
              )}>
                {pos.replace("-", " ")}
              </span>
              
              {settings.position === pos && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-[40px] pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
