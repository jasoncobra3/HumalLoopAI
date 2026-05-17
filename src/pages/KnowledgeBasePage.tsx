import { DashboardLayout } from "../components/layout/DashboardLayout";
import { DataSourceCard } from "../components/knowledge-base/DataSourceCard";
import { IngestionAnalytics } from "../components/knowledge-base/IngestionAnalytics";
import { ProcessingPipeline } from "../components/knowledge-base/ProcessingPipeline";
import { Globe, FolderOpen, PlusCircle, TrendingUp, ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const websiteSources = [
  { id: "1", name: "/docs/api-reference", type: "website" as const, status: "synced" as const, lastCrawled: "2m ago" },
  { id: "2", name: "/blog/ai-ethics-2024", type: "website" as const, status: "processing" as const, lastCrawled: "Extracting semantic markers..." },
];

const documentSources = [
  { id: "3", name: "annual_report_23.pdf", type: "document" as const, status: "synced" as const, lastCrawled: "14.2 MB", metadata: "Vectorized" },
  { id: "4", name: "product_spec_v2.docx", type: "document" as const, status: "queued" as const, lastCrawled: "Queued for ingestion" },
];

export default function KnowledgeBasePage() {
  return (
    <DashboardLayout>
      <div className="space-y-10">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">Knowledge Base</h2>
            <p className="text-muted-foreground mt-2 text-lg">Manage and monitor AI data ingestion pipeline.</p>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-muted text-foreground hover:bg-muted/80 font-bold gap-2 rounded-xl h-12 px-6">
              <PlusCircle className="w-5 h-5" />
              Connect Source
            </Button>
            <Link to="/chat-playground">
              <Button className="bg-primary text-primary-foreground hover:brightness-110 font-bold gap-2 rounded-xl h-12 px-6 shadow-lg shadow-primary/20">
                Continue to Playground
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Panel: Sources */}
          <div className="lg:col-span-5 space-y-8">
            <DataSourceCard title="Scraped Website Pages" icon={Globe} sources={websiteSources} />
            <DataSourceCard title="Uploaded Documents" icon={FolderOpen} sources={documentSources} />
            
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1">Recent Semantic Chunks</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { color: "border-primary", tag: "#architecture", match: "98% Match", text: "...our large language models utilize a multi-head attention mechanism..." },
                  { color: "border-secondary", tag: "#financials", match: "92% Match", text: "...quarterly revenue grew by 15% as a direct result of the AI optimization..." }
                ].map((chunk, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className={`glass-card p-4 rounded-2xl border-l-[6px] ${chunk.color} bg-white/2 hover:bg-white/5 transition-colors cursor-pointer`}
                  >
                    <p className="text-xs text-muted-foreground line-clamp-3 italic leading-relaxed">"{chunk.text}"</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className={`text-[10px] font-bold ${chunk.color.replace('border-', 'text-')}`}>{chunk.tag}</span>
                      <span className="text-[10px] text-muted-foreground font-semibold">{chunk.match}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Analytics */}
          <div className="lg:col-span-7 space-y-8">
            <IngestionAnalytics />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-10 rounded-[2.5rem] shadow-2xl border-white/5"
            >
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  System Activity
                </h4>
                <Badge variant="outline" className="text-[10px] bg-primary/10 border-primary/20 text-primary">3 Active Processes</Badge>
              </div>
              <ProcessingPipeline />
            </motion.div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
