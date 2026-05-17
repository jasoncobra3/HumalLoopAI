import React from "react";
import { LifecycleStep } from "../components/conversations/LifecycleStep";
import { RetrievalCard } from "../components/conversations/RetrievalCard";
import { ConfidenceChart } from "../components/conversations/ConfidenceChart";
import { ReasoningPanel } from "../components/conversations/ReasoningPanel";
import { 
  MessageSquare, 
  Database, 
  Sparkles, 
  ShieldAlert, 
  Mail, 
  Save, 
  ChevronRight,
  User,
} from "lucide-react";
import { DashboardLayout } from "../components/layout/DashboardLayout";

const mockRetrieval = [
  { id: "1", source: "Pricing_Policy.pdf", content: "...Enterprise pricing for organizations exceeding 50 seats requires custom licensing agreements. Standard seat costs are discounted by 15%...", similarity: 94 },
  { id: "2", source: "Internal_KB_Account_Tiers", content: "The Enterprise Tier offers SSO, Audit Logs, and dedicated support. For 50+ users, the 'Bulk Volume' logic is triggered...", similarity: 88 },
];

export default function ConversationsPage() {
  return (
    <DashboardLayout noScroll maxContentWidth="max-w-none">
      <div className="flex h-full overflow-hidden">
        {/* Left Side: Timeline */}
        <section className="flex-1 overflow-y-auto custom-scrollbar p-10 space-y-12 bg-gradient-to-b from-primary/5 via-transparent to-transparent">
          <div className="max-w-4xl mx-auto space-y-12 pb-24">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Operational Trace</span>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-[10px] text-muted-foreground font-mono">Session: #8812-BETA-4</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground">AI Orchestration Lifecycle</h1>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed max-w-2xl opacity-70">
                Visualizing the real-time reasoning, retrieval, and decision path of the HumanLoop OS during an active customer engagement.
              </p>
            </div>

            <div className="space-y-0">
              <LifecycleStep 
                icon={<MessageSquare className="w-6 h-6" />} 
                timestamp="10:42 AM" 
                type="Customer Inbound"
              >
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-lg font-bold text-foreground leading-snug tracking-tight">
                    "How do I upgrade to the Enterprise Tier for 50+ users?"
                  </p>
                </div>
              </LifecycleStep>

              <LifecycleStep 
                icon={<Database className="w-6 h-6" />} 
                timestamp="10:42 AM" 
                type="Semantic Retrieval"
              >
                <div className="space-y-4">
                  <div className="text-[10px] text-primary font-black uppercase tracking-widest flex items-center gap-2 opacity-60">
                    <div className="w-1 h-1 rounded-full bg-primary animate-ping" />
                    Querying Organizational Memory...
                  </div>
                  <RetrievalCard chunks={mockRetrieval} />
                </div>
              </LifecycleStep>

              <LifecycleStep 
                icon={<Sparkles className="w-6 h-6" />} 
                timestamp="10:43 AM" 
                type="AI Agent Synthesis"
              >
                <div className="space-y-4">
                   <div className="bg-primary/10 border border-primary/20 backdrop-blur-xl rounded-2xl p-6 italic text-foreground/80 text-sm leading-relaxed shadow-inner">
                     "I see you're interested in the Enterprise Tier. For 50+ users, we offer customized volume-based pricing that includes enhanced security and dedicated support features..."
                   </div>
                   <div className="flex items-center gap-6">
                     <ConfidenceChart data={[80, 85, 75, 38, 60, 70, 80]} current={38} />
                   </div>
                </div>
              </LifecycleStep>

              <LifecycleStep 
                icon={<ShieldAlert className="w-6 h-6" />} 
                timestamp="10:43 AM" 
                type="Escalation Trigger"
              >
                <div className="bg-tertiary/10 border border-tertiary/30 rounded-[32px] p-8 relative overflow-hidden group shadow-2xl ring-1 ring-tertiary/20">
                  <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <ShieldAlert className="w-32 h-32 text-tertiary" />
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-tertiary/20 text-tertiary px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-[0.2em]">Confidence Halt</span>
                    <span className="text-muted-foreground text-[10px] font-mono opacity-40">CODE: GOV-404</span>
                  </div>
                  <h4 className="text-2xl font-black text-foreground tracking-tighter mb-3 italic leading-tight">"Escalated to Billing Specialist for custom quote calculation."</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium opacity-60">
                    AI reasoning identified a high-risk financial commitment exceeding current autonomously permissible bounds. Specialist routing initiated via Enterprise Governance Protocol.
                  </p>
                </div>
              </LifecycleStep>

              <LifecycleStep 
                icon={<Mail className="w-6 h-6" />} 
                timestamp="10:54 AM" 
                type="Human Specialist Intervention"
              >
                <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5">
                  <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center p-0.5 border border-secondary/20">
                         <img 
                           src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop" 
                           className="w-full h-full rounded-full object-cover grayscale"
                         />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground">Sarah Jenkins</p>
                        <p className="text-[9px] text-muted-foreground font-black uppercase tracking-widest opacity-40">Senior Billing Specialist</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-black tracking-widest text-muted-foreground uppercase bg-white/5 px-2 py-1 rounded border border-white/5">Operational Connector: Zendesk</span>
                  </div>
                  <div className="p-8">
                    <p className="text-sm text-foreground/80 leading-relaxed italic">
                      "Hi there, I've reviewed your request for 50+ users. For an organization of your size, we can offer a custom tier at $24/seat per month, billed annually. This includes our full compliance suite and a dedicated TAM. Would you like me to send over the formal agreement for review?"
                    </p>
                  </div>
                </div>
              </LifecycleStep>

              <LifecycleStep 
                icon={<Save className="w-6 h-6" />} 
                timestamp="11:02 AM" 
                type="Memory Persistence"
                isLast
              >
                <div className="flex items-center justify-between p-8 bg-secondary/5 border border-secondary/20 rounded-[32px] group cursor-help transition-all hover:bg-secondary/[0.08] ring-1 ring-secondary/10">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-secondary/20 rounded-[20px] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                      <Save className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-lg font-black text-foreground tracking-tight">Fragment persistence finalized</p>
                      <p className="text-xs text-muted-foreground font-medium mt-1 opacity-60">Inserted into long-term organizational knowledge graph with index KY-992.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-secondary font-black tracking-widest bg-secondary/10 px-3 py-1 rounded-lg border border-secondary/20">FRAG_KY-992</span>
                    <ChevronRight className="w-4 h-4 text-secondary/40" />
                  </div>
                </div>
              </LifecycleStep>
            </div>
          </div>
        </section>

        {/* Right Side: Reasoning Panel */}
        <section className="w-[450px] border-l border-white/5 bg-accent/[0.02] backdrop-blur-3xl z-20 hidden xl:block">
          <div className="h-full overflow-y-auto custom-scrollbar p-10">
            <ReasoningPanel />
          </div>
        </section>
      </div>

      {/* Floating Action Hint */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-background/80 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-background bg-accent/20" />
            ))}
          </div>
          <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">3 Specialists Monitoring Trace</span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
      </div>
    </DashboardLayout>
  );
}
