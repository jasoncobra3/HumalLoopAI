import { Sparkles, Brain, Info } from "lucide-react";
import { motion } from "motion/react";

export function OnboardingPreview() {
  return (
    <div className="glass-card rounded-[2.5rem] p-8 sticky top-24 border-white/5">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
          <Sparkles className="w-4 h-4" />
        </div>
        <h4 className="text-sm font-bold text-foreground">AI Ingestion Preview</h4>
      </div>

      <div className="aspect-square w-full rounded-2xl bg-background/50 border border-white/5 mb-8 overflow-hidden flex items-center justify-center relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-50 group-hover:opacity-70 transition-opacity" />
        
        <div className="relative z-10 w-full h-full p-8">
          <div className="w-full h-full border border-dashed border-white/10 rounded-xl flex items-center justify-center">
            <div className="relative">
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full" 
              />
              <Brain className="w-16 h-16 text-primary/60 relative z-10" />
              <div className="absolute -top-2 -right-2">
                <div className="w-3 h-3 bg-secondary rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </div>
        
        <img 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBuHqiwCoRdj3jl3-SLpgx4VjdpbSZ4JwUs8IikfvvKxcfkM09BN_coNYAA4kI7aZmK1YPjPR3bLoeW9hSRS4lHF3AAeDu3OoKsgjtyw-9rcIl9rsvON_P_3vkOXcjHjOs2LlC3wuc7wCm9XrwXxzkmZq6LzTcF7qmuSI247JUO7AYFxMrWoSTF1-rKw3IhkjxHl-HL9wfTSeeWIzL_IjFpPnJhbk58hFxrIfS80p5IMcRUzV5FpTrEhN1YTW3o_J2YbESz2pglb8O"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="space-y-6">
        <p className="text-sm text-muted-foreground leading-relaxed">
          HumanLoop's <span className="text-secondary font-bold">Contextual Engine</span> uses your company profile to calibrate LLM parameters. 
        </p>

        <div className="p-4 bg-muted/50 rounded-xl border-l-2 border-secondary flex items-start gap-3">
          <Info className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
          <p className="text-[11px] text-muted-foreground leading-normal">
            Data provided here creates a persistent metadata layer that reduces prompt hallucination by 40%.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <span>Calibration Accuracy</span>
            <span className="text-secondary">Ready</span>
          </div>
          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "35%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-secondary shadow-[0_0_8px_rgba(34,211,238,0.5)]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
