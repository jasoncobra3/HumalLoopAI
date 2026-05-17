import { cn } from "@/lib/utils";
import { FileText, ExternalLink } from "lucide-react";

interface Chunk {
  id: string;
  source: string;
  matchScore: number;
  content: string;
}

interface RetrievalCardProps {
  chunks: Chunk[];
}

export function RetrievalCard({ chunks }: RetrievalCardProps) {
  return (
    <div className="glass-card p-6 rounded-2xl flex-1 flex flex-col min-h-0 border-white/5 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold text-secondary flex items-center gap-2 uppercase tracking-[0.2em]">
          <FileText className="w-4 h-4" />
          Knowledge Retrieval
        </h3>
        <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{chunks.length} chunks found</span>
      </div>
      
      <div className="space-y-4 overflow-y-auto custom-scrollbar flex-1 pr-2">
        {chunks.map((chunk) => (
          <div 
            key={chunk.id} 
            className="p-4 bg-muted/40 rounded-xl border border-white/5 hover:border-secondary/30 transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{chunk.source}</span>
              <div className="flex items-center gap-3">
                <span className="text-[10px] px-2 py-0.5 bg-secondary/10 text-secondary rounded-full border border-secondary/20 font-bold">
                  {chunk.matchScore}% Match
                </span>
                <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground line-clamp-3 italic leading-relaxed group-hover:text-foreground transition-colors">
              "{chunk.content}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
