import { Input } from "@/components/ui/input";
import { Paperclip, Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatInput() {
  return (
    <div className="p-8 bg-muted/30 border-t border-white/5 relative">
      {/* Human Override Banner */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 backdrop-blur-xl flex items-center gap-2 shadow-2xl">
        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Human Override Mode Active</span>
      </div>

      <div className="relative group max-w-4xl mx-auto">
        <Input 
          className="w-full h-14 bg-accent/50 border-white/5 rounded-2xl pl-6 pr-28 text-sm focus-visible:ring-primary focus-visible:bg-accent/80 transition-all placeholder:text-muted-foreground/30" 
          placeholder="Override AI response..." 
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors">
            <Paperclip className="w-5 h-5" />
          </Button>
          <Button className="bg-primary text-primary-foreground h-10 w-10 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <p className="text-center text-[10px] text-muted-foreground/30 mt-4 uppercase tracking-[0.2em] font-bold">
        Your response will be processed through the safety engine
      </p>
    </div>
  );
}
