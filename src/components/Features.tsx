import { Brain, Zap, Globe, Cpu, MessageSquare, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Deep Context Understanding",
    description: "Unlike rigid chatbots, HumanLoop understands intent, sentiment, and complex technical terminology out of the box.",
    icon: Brain,
    className: "md:col-span-2",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    accentIcon: Cpu
  },
  {
    title: "Instant Resolution",
    description: "Resolve 80% of Tier 1 queries in under 3 seconds without human intervention.",
    icon: Zap,
    className: "md:col-span-1",
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary"
  },
  {
    title: "95+ Languages",
    description: "Global support coverage with native-level fluency across all major markets.",
    icon: Globe,
    className: "md:col-span-1",
    iconBg: "bg-tertiary/20",
    iconColor: "text-tertiary"
  },
  {
    title: "API First Architecture",
    description: "Connect HumanLoop to your existing CRM, knowledge base, and ticketing system with just two lines of code.",
    icon: MessageSquare,
    className: "md:col-span-2",
    iconBg: "bg-white/10",
    iconColor: "text-foreground",
    code: true
  }
];

export function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-32">
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">Intelligent Automation</h2>
        <p className="text-muted-foreground max-w-xl text-lg">
          Our neural network processes billions of support interactions to handle routine queries with human-level nuance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={feature.className}
          >
            <Card className="h-full glass-card border-white/5 relative overflow-hidden group hover:border-white/20 transition-all">
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center ${feature.iconColor} mb-6`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  {feature.description}
                </p>

                {feature.accentIcon && (
                  <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-20 transition-opacity">
                    <feature.accentIcon className="w-64 h-64" />
                  </div>
                )}

                {feature.code && (
                  <div className="mt-8 hidden sm:block">
                    <div className="bg-black/50 p-4 rounded-xl font-mono text-[11px] text-secondary border border-white/5 shadow-2xl">
                      <span className="text-muted-foreground">// Init HumanLoop</span><br />
                      <span className="text-primary">const</span> hl = <span className="text-primary">new</span> HumanLoop({`{`}<br />
                      &nbsp;&nbsp;apiKey: <span className="text-tertiary">{'\'hl_prod_...\''}</span><br />
                      {`});`}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
