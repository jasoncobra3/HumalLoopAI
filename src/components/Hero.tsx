import { Button } from "@/components/ui/button";
import { Sparkles, PlayCircle } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
      >
        <Sparkles className="w-4 h-4" />
        <span className="text-xs font-semibold uppercase tracking-wider">v2.0 Now Enterprise Ready</span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto mb-6 leading-[1.1]"
      >
        AI Support That Knows When to <span className="text-gradient">Ask Humans</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        HumanLoop AI combines intelligent automation with seamless human escalation to create trustworthy customer support experiences.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link to="/login?mode=signup">
          <Button size="lg" className="h-14 px-10 rounded-xl text-md font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform cursor-pointer">
            Get Started
          </Button>
        </Link>
        <Button size="lg" variant="outline" className="h-14 px-10 rounded-xl text-md font-semibold glass-card text-foreground border-white/10 hover:bg-white/5 transition-colors gap-2">
          <PlayCircle className="w-5 h-5" />
          Watch Demo
        </Button>
      </motion.div>
    </section>
  );
}
