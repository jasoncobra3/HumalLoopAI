import { User, Bot, ArrowDown, Send, Settings, LineChart, Network, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export function ProductPreview() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-32">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-[2.5rem] overflow-hidden ambient-glow relative border-white/5"
      >
        <div className="flex h-[600px]">
          {/* Mini Sidebar */}
          <div className="w-64 border-r border-white/5 bg-muted/30 p-6 flex flex-col gap-6">
            <div className="flex items-center gap-3 px-4 py-2 bg-primary/20 text-primary rounded-lg border border-primary/20">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Intelligence</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              <Network className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Workflows</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              <LineChart className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Analytics</span>
            </div>
            <div className="mt-auto pt-6 border-t border-white/5">
              <div className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <Settings className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Settings</span>
              </div>
            </div>
          </div>

          {/* Main Area */}
          <div className="flex-1 bg-background/30 p-8 flex flex-col">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Active Session: #9421</h3>
                <p className="text-sm text-muted-foreground">Tier 3 Customer Support</p>
              </div>
              <Badge variant="outline" className="bg-destructive/10 border-destructive/30 text-destructive gap-2 py-1 px-3">
                <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Escalating to Human</span>
              </Badge>
            </div>

            {/* Chat Body */}
            <div className="flex-1 space-y-6 overflow-y-auto pr-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="max-w-[70%] glass-card p-4 rounded-2xl rounded-tl-none border-white/5">
                  <p className="text-sm">I need help with my enterprise billing migration. The API is returning a 503 error on the new endpoint.</p>
                </div>
              </div>

              <div className="flex gap-4 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary ai-pulse flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="max-w-[70%] bg-accent/80 p-4 rounded-2xl rounded-tr-none border border-white/10 shadow-xl">
                  <p className="text-sm mb-4">I can certainly look into that. Enterprise migration errors typically relate to key scope. Checking documentation...</p>
                  <div className="flex items-center justify-between p-3 bg-black/30 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">AI Confidence</span>
                      <span className="text-lg font-bold text-secondary">65%</span>
                    </div>
                    <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-secondary shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="flex justify-center my-8"
              >
                <div className="flex items-center gap-4 px-6 py-2 bg-primary/5 border border-primary/20 rounded-full">
                  <ArrowDown className="w-4 h-4 text-primary animate-bounce" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Agent Sarah joining the thread</span>
                </div>
              </motion.div>
            </div>

            {/* Input */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="relative">
                <div className="w-full bg-background/50 border border-white/10 rounded-xl px-6 py-4 text-muted-foreground text-sm flex items-center justify-between">
                  <span>Sarah is typing...</span>
                  <Send className="w-4 h-4 text-primary opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
