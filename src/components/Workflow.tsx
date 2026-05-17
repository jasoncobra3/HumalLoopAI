import { MessageSquare, AlertTriangle, Mail, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    title: "Chatbot Initiation",
    description: "Instant response AI",
    icon: MessageSquare,
    color: "text-primary",
    border: "border-primary/40"
  },
  {
    title: "Low Confidence",
    description: "AI flags uncertainty",
    icon: AlertTriangle,
    color: "text-secondary",
    border: "border-secondary/40",
    pulse: true
  },
  {
    title: "Email to Human",
    description: "Seamless handover",
    icon: Mail,
    color: "text-tertiary",
    border: "border-tertiary/40"
  },
  {
    title: "Human Resolution",
    description: "Trust is maintained",
    icon: ShieldCheck,
    color: "text-foreground",
    border: "border-white/40"
  }
];

export function Workflow() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
      >
        <h2 className="text-4xl font-bold tracking-tight text-foreground mb-16 relative z-10">Seamless Escalation Workflow</h2>
        
        <div className="relative flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-12 md:gap-4">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[40px] left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-tertiary opacity-20 z-0" />
          
          {steps.map((step, index) => (
            <div key={step.title} className="relative z-10 group flex flex-col items-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`w-20 h-20 rounded-full bg-background border-2 ${step.border} flex items-center justify-center mb-6 shadow-2xl transition-all ${step.pulse ? 'ai-pulse' : ''}`}
              >
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </motion.div>
              <h4 className="text-lg font-bold text-foreground mb-1">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
