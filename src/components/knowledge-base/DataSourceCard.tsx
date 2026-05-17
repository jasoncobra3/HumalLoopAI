import { cn } from "@/lib/utils";
import { 
  FileText, 
  Globe, 
  FileCheck, 
  Clock, 
  CheckCircle2, 
  Loader2 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DataSource {
  id: string;
  name: string;
  type: "website" | "document";
  status: "synced" | "processing" | "queued";
  lastCrawled: string;
  metadata?: string;
  progress?: number;
}

interface DataSourceCardProps {
  title: string;
  icon: any;
  sources: DataSource[];
}

export function DataSourceCard({ title, icon: Icon, sources }: DataSourceCardProps) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border-white/5">
      <div className="p-4 border-b border-white/5 bg-accent/30 flex items-center gap-2">
        <Icon className="w-4 h-4 text-secondary" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{title}</span>
      </div>
      
      <div className="divide-y divide-white/5">
        {sources.map((source) => (
          <div key={source.id} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center relative transition-transform group-hover:scale-110">
                {source.type === "website" ? (
                  <Globe className="w-5 h-5 text-primary" />
                ) : (
                  <FileText className="w-5 h-5 text-tertiary" />
                )}
                {source.status === "processing" && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full ai-pulse animate-pulse" />
                )}
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">{source.name}</h4>
                <p className="text-[10px] text-muted-foreground flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3" />
                  {source.lastCrawled} {source.metadata && `• ${source.metadata}`}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1.5">
              {source.status === "synced" && (
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-[9px] font-bold text-green-400 uppercase tracking-wider">Synced</span>
                </div>
              )}
              {source.status === "processing" && (
                <div className="flex items-center gap-1.5">
                  <Loader2 className="w-3.5 h-3.5 text-primary animate-spin" />
                  <span className="text-[9px] font-bold text-primary uppercase tracking-wider">Processing</span>
                </div>
              )}
              {source.status === "queued" && (
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Queued</span>
              )}
              
              {source.status !== "queued" && (
                <div className="w-20 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full transition-all duration-1000",
                      source.status === "synced" ? "bg-green-400 w-full" : "bg-primary animate-pulse w-2/3"
                    )} 
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
