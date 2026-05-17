import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  Search, 
  Book, 
  MessageCircle, 
  Mail, 
  ChevronRight, 
  ExternalLink,
  LifeBuoy,
  Zap,
  Shield,
  Brain,
  Database,
  History
} from "lucide-react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "How do I sync my knowledge base?",
    answer: "Go to the Knowledge Base section, click on 'Add Data Source', and connect your website or upload PDFs. Our background workers will semanticly chunk and embed the data for AI access.",
    category: "Knowledge"
  },
  {
    question: "What does 'Confidence Score' mean?",
    answer: "It's a value between 0 and 1 representing the AI's certainty in its response. If the score falls below 0.7, the conversation is automatically escalated to a human agent.",
    category: "Orchestration"
  },
  {
    question: "How does Semantic Memory work?",
    answer: "Every 24 hours, background agents process conversation logs to synthesize facts and preferences into 'Memory Objects'. These objects provide long-term context for recurring users.",
    category: "Memory"
  },
  {
    question: "Can I customize the chat widget?",
    answer: "Yes, in the 'Widget & Settings' section, you can modify the primary color, avatar, and initial message to match your brand's identity.",
    category: "Customization"
  }
];

const helpCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics of setting up your AI support OS.",
    icon: Zap,
    color: "text-amber-400",
    link: "#"
  },
  {
    title: "Knowledge Management",
    description: "Optimize how your AI retrieves and processes information.",
    icon: Database,
    color: "text-blue-400",
    link: "#"
  },
  {
    title: "Reasoning & Confidence",
    description: "Understand the decision-making process of your agent.",
    icon: Brain,
    color: "text-primary",
    link: "#"
  },
  {
    title: "Escalation Workflows",
    description: "Set up rules for human handovers and intervention.",
    icon: Shield,
    color: "text-cyan-400",
    link: "#"
  }
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-10 pb-20">
        {/* Header Section */}
        <div className="relative overflow-hidden rounded-3xl p-10 bg-muted/20 border border-white/5">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_30px_rgba(192,193,255,0.15)] ring-1 ring-primary/30">
                <LifeBuoy className="w-8 h-8" />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">How can we help you today?</h1>
              <p className="text-muted-foreground text-lg">Search our documentation or contact our support engineering team.</p>
            </div>
            
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10 transition-colors group-focus-within:text-primary" />
              <Input 
                type="text"
                placeholder="Search knowledge base, tutorials, APIs..."
                className="w-full h-14 pl-12 pr-4 bg-muted/40 border-white/10 rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/50 text-foreground transition-all placeholder:text-muted-foreground/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:bg-white/[0.04] transition-all duration-300 cursor-pointer overflow-hidden border-white/5">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-white/10 duration-300 ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 text-left">
                    <h3 className="font-bold text-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
                      {category.title}
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold" />
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ & Quick Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main FAQ Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Book className="w-6 h-6 text-primary" />
                Frequently Asked Questions
              </h2>
              <Button variant="link" className="text-primary hover:text-primary/80">
                View All Documentation <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <Card className="border-white/5 bg-white/[0.02] hover:bg-white/[0.03] transition-colors">
                    <CardHeader className="p-4 space-y-1">
                      <div className="flex justify-between items-start">
                        <Badge variant="outline" className="text-[10px] uppercase tracking-wider mb-2 border-primary/20 bg-primary/5 text-primary">
                          {faq.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-semibold">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
             <h2 className="text-2xl font-bold flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                Still Need Help?
              </h2>

              <div className="space-y-4">
                <Card className="border-white/5 bg-gradient-to-br from-primary/10 to-transparent">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold">Live Developer Chat</h4>
                      <p className="text-sm text-muted-foreground">Average response time: &lt; 5 minutes</p>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-11">
                      Start Chat Session
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-white/5 bg-white/[0.02]">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold">Email Support</h4>
                      <p className="text-sm text-muted-foreground">For enterprise SLA and complex migrations</p>
                    </div>
                    <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-foreground font-bold h-11">
                      Open Ticket
                    </Button>
                  </CardContent>
                </Card>

                <div className="p-6 rounded-2xl bg-muted/40 border border-dashed border-white/10 space-y-4">
                  <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
                    <History className="w-4 h-4" />
                    Technical Health Status
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm font-medium">All Ingestion Pipelines Operational</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
