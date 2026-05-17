import { AlertCircle, UserCheck, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export function LiveSessionHeader() {
  return (
    <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between bg-accent/30 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <div className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
        <div>
          <h3 className="text-base font-bold text-foreground">Live Session: <span className="text-secondary">#8812</span></h3>
          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-0.5">Enterprise Priority Support</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Link 
          to="/escalations" 
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-error/10 border border-error/20 hover:bg-error/20 transition-all group"
        >
          <ShieldAlert className="w-3.5 h-3.5 text-error group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold text-error uppercase tracking-widest">View Escalations</span>
        </Link>
        <div className="h-6 w-px bg-white/10" />
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-muted border border-white/5">
            <UserCheck className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Agent assigned</span>
          </div>
        </div>
      </div>
    </div>
  );
}
