import { Bell } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FloatingInsight } from "../knowledge-base/FloatingInsight";

export function TopNav() {
  const location = useLocation();
  
  const getTitle = () => {
    switch (location.pathname) {
      case "/": return "Overview";
      case "/onboarding": return "Onboarding Wizard";
      case "/knowledge-base": return "Knowledge Base";
      case "/chat-playground": return "AI Chat Playground";
      case "/escalations": return "Escalation Console";
      case "/conversations": return "AI Orchestration";
      case "/ai-memory": return "Neural Memory Hub";
      case "/settings": return "Deployment Control Center";
      default: return "Dashboard";
    }
  };

  return (
    <header className="fixed top-0 right-0 left-[248px] h-[72px] bg-background/60 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 md:px-8 lg:px-12 xl:px-[48px] z-40">
      <div className="flex items-center gap-10 flex-1">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-50 mb-1">HumanLoop System</span>
          <h2 className="text-sm font-black text-foreground tracking-widest uppercase">{getTitle()}</h2>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <Popover>
            <PopoverTrigger className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/[0.03] transition-all relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-secondary rounded-full ring-2 ring-background" />
            </PopoverTrigger>
            <PopoverContent className="p-0 bg-transparent border-none shadow-none" align="end" sideOffset={12}>
              <FloatingInsight />
            </PopoverContent>
          </Popover>
        </div>

        <div className="h-4 w-px bg-white/10" />

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary/20 transition-all shadow-[0_0_20px_rgba(34,211,238,0.1)]">
            Upgrade Tier
          </button>
          <div className="w-9 h-9 rounded-xl border border-white/10 overflow-hidden bg-muted group cursor-pointer hover:border-primary/50 transition-all">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzrsxQU0ZiCFfUhXUQvstqslZuCVCCQ3fQk5Ucz-ZnEyNxKK46pu2YTE95uwk_fJwePjLUj-Dh6HJWs-vXXaITvfTOFZlbcarLZN12V1V_oyXRHK2fgEy7hJFFTJT7uTLGmBQ-EYnwcsmxDd0yHUmE9MhJBpzXkJa6OYJR1fLJLnaV506awEF7032wcE3p8Q45AmDe3dd36SXygUqxzQJZhAtVysAPlD0R0wE3jdzO0MjEopYyPbSHB2IhwNru5Pp49ZsCebJ2NB-B" 
              alt="User" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
