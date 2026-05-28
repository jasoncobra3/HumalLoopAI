import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-[3.5rem] bg-gradient-to-br from-primary/10 via-background to-background border border-white/10 p-12 md:p-24 text-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #c0c1ff 0%, transparent 60%)' }} />
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 relative z-10">Ready to scale your support?</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 relative z-10">
          Join 500+ enterprises using HumanLoop to automate the mundane and focus on what matters: the human experience.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          <Link to="/login?mode=signup">
            <Button size="lg" className="h-16 px-12 rounded-2xl text-lg font-bold bg-primary text-primary-foreground hover:scale-[1.02] transition-transform shadow-2xl cursor-pointer">
              Get Started Today
            </Button>
          </Link>
          <Button variant="ghost" className="text-foreground hover:text-primary transition-colors gap-2 text-lg font-semibold">
            Speak to Sales <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
