import React from "react";
import { Database, Search, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Chunk {
  id: string;
  source: string;
  content: string;
  similarity: number;
}

export function RetrievalCard({ chunks }: { chunks: Chunk[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {chunks.map((chunk) => (
        <div 
          key={chunk.id}
          className="bg-accent/5 border border-white/5 rounded-2xl p-4 hover:border-primary/30 transition-all group/chunk cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Database className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">{chunk.source}</span>
            </div>
            <div className="text-[10px] font-mono text-muted-foreground bg-accent/20 px-2 py-0.5 rounded">
              Sim: {chunk.similarity}%
            </div>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed transition-colors group-hover/chunk:text-foreground">
            "{chunk.content}"
          </p>
          <div className="mt-3 flex items-center gap-1 text-[10px] text-primary underline underline-offset-2 opacity-0 group-hover/chunk:opacity-100 transition-opacity">
            <Link2 className="w-2.5 h-2.5" />
            View Source Document
          </div>
        </div>
      ))}
    </div>
  );
}
