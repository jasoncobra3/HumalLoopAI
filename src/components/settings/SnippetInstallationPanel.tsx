import React, { useState } from "react";
import { Copy, Check, Globe, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "motion/react";

export function SnippetInstallationPanel() {
  const [copied, setCopied] = useState(false);
  const snippet = `<script src="https://cdn.humanloop.ai/v2/widget.js"></script>
<script>
  window.HumanLoop.init({
    appId: "hl_77x_k92p_prod",
    theme: "nocturnal"
  });
</script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/[0.03] backdrop-blur-3xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-2xl ring-1 ring-white/5"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20 shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-transform duration-500 group-hover:scale-110">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground tracking-tight">Embedded Agent Sync</h3>
            <p className="text-xs text-muted-foreground mt-1.5 opacity-60">Deploy HumanLoop architecture to your global production environments.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-xl border border-green-500/20 text-[10px] font-black uppercase tracking-widest self-start sm:self-auto">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Live on 3 endpoints
        </div>
      </div>

      <div className="relative group/snippet">
        <div className="bg-black/30 backdrop-blur-md rounded-2xl border border-white/5 p-6 font-mono text-sm text-foreground/80 overflow-x-auto relative min-h-[160px] flex flex-col justify-center">
          <pre className="whitespace-pre-wrap break-all leading-relaxed font-mono text-[13px] opacity-80">
            {snippet}
          </pre>
          
          <Button
            size="icon"
            variant="ghost"
            onClick={handleCopy}
            className="absolute top-4 right-4 bg-white/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-white/5"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                >
                  <Check className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                >
                  <Copy className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-white/5">
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          <Globe className="w-4 h-4 text-primary opacity-60" />
          <span>Global Cdn: v2.7.4</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground italic font-medium opacity-50 underline decoration-primary/30 underline-offset-4 decoration-dashed">
          Paste before the closing &lt;/body&gt; tag.
        </div>
      </div>

      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] pointer-events-none opacity-50" />
    </motion.div>
  );
}
