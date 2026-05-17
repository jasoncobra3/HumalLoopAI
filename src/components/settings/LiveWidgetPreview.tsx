import React from "react";
import { AssistantSettings } from "@/types/settings";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Send, User, ChevronLeft, Globe, Monitor, Smartphone, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Props {
  settings: AssistantSettings;
}

export function LiveWidgetPreview({ settings }: Props) {
  const [viewMode, setViewMode] = React.useState<"desktop" | "mobile">("desktop");
  const isDark = settings.interfaceMode === "dark";

  const assistantMessage = settings.voiceTone === "Professional" 
    ? "Greetings. How may I assist you with your deployment architecture today?" 
    : settings.voiceTone === "Friendly" 
    ? "Hey there! 👋 I'm here to help you get the most out of HumanLoop. What's on your mind?"
    : "System online. Standing by for technical queries or configuration assistance.";

  return (
    <div className="h-full w-full bg-[#08090D] flex flex-col items-center relative overflow-hidden">
      {/* Background Decor - Cinematic ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:32px_32px]" />
      
      <div 
        className="absolute w-[800px] h-[800px] rounded-full blur-[200px] opacity-[0.07] transition-all duration-1000 pointer-events-none"
        style={{ backgroundColor: settings.brandColor, top: '-20%', right: '-30%' }}
      />

      {/* Main Preview Area - Optimized for narrow 27% width */}
      <div className="flex-1 w-full flex items-center justify-center p-3">
        <motion.div 
          layout
          className="relative transition-all duration-700 ease-in-out w-full max-w-[300px] aspect-[9/18.5]"
        >
          {/* External Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-2xl opacity-50" />

          {/* Device Shell - Constant Mobile View for Narrow Container */}
          <div className="relative h-full w-full bg-background border-[6px] border-[#1A1C24] shadow-[0_80px_150px_-50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col group/shell ring-1 ring-white/10 rounded-[3rem]">
            {/* Device Top Bar */}
            <div className="h-10 bg-[#14151B] border-b border-white/5 flex items-center px-6 gap-3 shrink-0">
              <div className="flex gap-1.5 shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#3D3E45]" />
                <div className="w-2 h-2 rounded-full bg-[#3D3E45]" />
              </div>
              <div className="flex-1 bg-black/40 rounded-lg h-5 flex items-center px-3 gap-2 border border-white/5 mx-auto">
                <Globe className="w-2.5 h-2.5 text-muted-foreground opacity-30" />
                <div className="h-1 w-16 bg-white/5 rounded" />
              </div>
            </div>

            {/* Content Viewport */}
            <div className="flex-1 overflow-hidden relative bg-[#0B0C11]">
              {/* Mock Website Background - Adds context for the floating widget */}
              <div className="p-6 space-y-6 opacity-[0.03] pointer-events-none select-none">
                <div className="h-4 w-2/3 bg-white rounded-full" />
                <div className="space-y-3">
                  <div className="h-2 w-full bg-white rounded" />
                  <div className="h-2 w-[90%] bg-white rounded" />
                  <div className="h-2 w-[95%] bg-white rounded" />
                </div>
                <div className="h-32 w-full bg-white/10 rounded-2xl border border-white/5" />
                <div className="space-y-3">
                  <div className="h-2 w-full bg-white rounded" />
                  <div className="h-2 w-4/5 bg-white rounded" />
                </div>
              </div>

              {/* THE FLOATING WIDGET PREVIEW - Positioned based on settings with better clearance */}
              <motion.div 
                layout
                className={cn(
                  "absolute bottom-8 w-[256px] h-[400px] flex flex-col transition-all duration-700 z-50 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 rounded-[2.25rem]",
                  settings.position === "bottom-right" ? "right-4" : "left-4",
                  isDark ? "bg-[#14151B]" : "bg-white"
                )}
              >
                {/* Widget Header */}
                <div 
                  className="p-4 flex items-center gap-3 transition-colors duration-500 shrink-0 relative overflow-hidden"
                  style={{ backgroundColor: settings.brandColor }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                  <div className="w-10 h-10 rounded-2xl bg-black/20 flex items-center justify-center border border-white/20 shadow-lg relative z-10 backdrop-blur-md">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-white text-[12px] font-black tracking-tight leading-tight uppercase">Assistant</h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ADE80]" />
                      <span className="text-white/60 text-[7px] font-black uppercase tracking-[0.2em]">Neural Engine</span>
                    </div>
                  </div>
                </div>

                {/* Widget Messages */}
                <div className="flex-1 p-5 space-y-6 overflow-y-auto custom-scrollbar bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.02),transparent)]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={settings.voiceTone}
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="relative group/msg"
                    >
                      {/* Neural Pointer */}
                      <div className="absolute -top-1 -left-1 w-4 h-4 bg-inherit border-l border-t border-white/5 rotate-[-45deg] z-0" />
                      
                      <div className={cn(
                        "relative z-10 p-4 rounded-[1.5rem] rounded-tl-none text-[11px] leading-relaxed max-w-[95%] border shadow-xl backdrop-blur-sm",
                        isDark ? "bg-white/[0.04] border-white/5 text-muted-foreground/90" : "bg-muted/30 border-muted text-foreground"
                      )}>
                        {assistantMessage}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex justify-end pr-1">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="relative"
                    >
                      {/* User Pointer */}
                      <div 
                        className="absolute -top-1 -right-1 w-4 h-4 rotate-[45deg] z-0"
                        style={{ backgroundColor: settings.brandColor }}
                      />
                      <div className="relative z-10 p-4 rounded-[1.5rem] rounded-tr-none text-[11px] leading-relaxed max-w-full text-white shadow-2xl font-medium"
                        style={{ backgroundColor: settings.brandColor }}
                      >
                        How do I set up the API?
                      </div>
                    </motion.div>
                  </div>

                  <div className="relative">
                    <div className="absolute -top-1 -left-1 w-4 h-4 bg-inherit border-l border-t border-white/5 rotate-[-45deg] z-0" />
                    <div className={cn(
                      "relative z-10 p-4 rounded-[1.5rem] rounded-tl-none text-[11px] leading-relaxed max-w-[95%] border shadow-xl backdrop-blur-sm",
                      isDark ? "bg-white/[0.04] border-white/5 text-muted-foreground/90" : "bg-muted/30 border-muted text-foreground"
                    )}>
                      Configure your <span className="text-primary font-bold">handshake</span> params in the Secure Headers section.
                    </div>
                  </div>
                </div>

                {/* Widget Input Area */}
                <div className={cn(
                  "p-4 border-t shrink-0 mb-1",
                  isDark ? "border-white/5 bg-black/30" : "border-muted bg-white"
                )}>
                  <div className={cn(
                    "rounded-[1.25rem] px-4 py-2.5 flex items-center justify-between border shadow-inner transition-all",
                    isDark ? "bg-black/60 border-white/10" : "bg-white border-muted"
                  )}>
                    <span className="text-[11px] text-muted-foreground opacity-40 font-medium">Message...</span>
                    <div 
                      className="w-7 h-7 rounded-xl flex items-center justify-center text-white shadow-lg shadow-black/20"
                      style={{ backgroundColor: settings.brandColor }}
                    >
                      <Send className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="mt-2.5 text-center text-[7px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-30">Powered by HumanLoop</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

  );
}
