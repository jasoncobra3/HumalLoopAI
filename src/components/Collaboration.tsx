import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Collaboration() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-2 lg:order-1"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Human + AI Collaboration</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          HumanLoop doesn't replace your team; it amplifies them. Agents receive AI-generated summaries, recommended responses, and real-time knowledge base lookups to solve complex issues faster than ever before.
        </p>

        <ul className="space-y-4">
          {[
            "Automatic drafting of complex technical replies",
            "Real-time sentiment monitoring for supervisors",
            "Feedback loops that train the AI from human corrections"
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-1 lg:order-2 rounded-[2.5rem] overflow-hidden aspect-square relative group"
      >
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHjiJ0gifoIMjz7zMlCmMxOzzy4PuqntR7oQmCzSyYiGuHS53-SmFepe0fD9EwlnsMBQbTuWXm5o4QVu0JvdqQHa_GZ2FFcp9aWm7vSrpp1nC5IKSdiA7BV7fS62IyFF9cNSYYLLJl0OA3e6zR4Pvcqetr5RYsPdgXs4_U1Y8Q1P6d65AW0Uv7_S1UjMP08B4inQdu9-c5fDlSsSeWgTmjjJacShFi5u0aFkEEC05jRs4OjCpTFs8Euqs5Mj_OeAdyrNfxlkkDzo7o" 
          alt="Human and AI collaboration" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        
        <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfZv1WHAtnpgzXJffr9e4367W4P-9SJdlYMin0uwNbPgXwWZoF2h-rBodwTzypsD5P7-9_1S-y4LC-5NHgUAnNMkm3iwDo31sZx8vh3l40Dh3eIRpEt2GNu2gjAqyLsE-UW8QFWrP99KyrfTeMv8qrw5aYR6Pfz2ZbDKnOtxF6HSYcmPlssRAyTH5s-Hnt597Fn8V2sXNY04ZXQ0mMdIbNFrxJoEDwabBctlijiyyAvcYuxCBj-pWMv3hmU_B2GQ16ohXdMePOM1yf" 
                  alt="Agent 1" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCyRmEuFrczAaWu4aSePTZlGyUFvmAHi3Vhx9McQCjhssx_Fu4wlTnF7qqOAHYsBAujRZefz0ek2RIxaHu2XLRNuoMbPFmoMOEun06exxj3Lo_9SnakBBBT3cPVNlzr8kJNdrRzG0xuJGK57OlfXRHMTjDq30AUIsn0LGt2JnBvd0_BbsiF5IaFBP1DwdZmkniLGLhQE4VBEV5hF0Bi5Z-4PZEhSNjLZjgK_I81Ge00q7YrtcfQUnQWBQfYYb3RR85o96ZxgFJ6NEu" 
                  alt="Agent 2" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">
              +12 Agents Active
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
