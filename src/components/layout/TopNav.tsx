import { Bell, LogOut, Shield, Mail, Building, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FloatingInsight } from "../knowledge-base/FloatingInsight";

export function TopNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({
    username: "admin",
    email: "admin@humanloop.ai",
    role: "Enterprise Administrator",
    company: "Acme Corp (Enterprise)",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzrsxQU0ZiCFfUhXUQvstqslZuCVCCQ3fQk5Ucz-ZnEyNxKK46pu2YTE95uwk_fJwePjLUj-Dh6HJWs-vXXaITvfTOFZlbcarLZN12V1V_oyXRHK2fgEy7hJFFTJT7uTLGmBQ-EYnwcsmxDd0yHUmE9MhJBpzXkJa6OYJR1fLJLnaV506awEF7032wcE3p8Q45AmDe3dd36SXygUqxzQJZhAtVysAPlD0R0wE3jdzO0MjEopYyPbSHB2IhwNru5Pp49ZsCebJ2NB-B"
  });

  useEffect(() => {
    const stored = localStorage.getItem("auth_user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setCurrentUser({
          username: parsed.username || "admin",
          email: parsed.email || "admin@humanloop.ai",
          role: parsed.role || "Enterprise Administrator",
          company: parsed.company || "Acme Corp (Enterprise)",
          avatar: parsed.avatar || currentUser.avatar
        });
      } catch (e) {
        // Fallback
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth_user");
    navigate("/");
  };
  
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
          
          <Popover>
            <PopoverTrigger className="focus:outline-none">
              <div className="w-9 h-9 rounded-xl border border-white/10 overflow-hidden bg-muted group cursor-pointer hover:border-primary/50 transition-all">
                <img 
                  src={currentUser.avatar}
                  alt={currentUser.username} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-4 w-72 bg-card border border-white/10 rounded-2xl shadow-2xl" align="end" sideOffset={12}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10">
                    <img 
                      src={currentUser.avatar}
                      alt={currentUser.username}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-white truncate">{currentUser.username === "admin" ? "Administrator" : currentUser.username}</span>
                    <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">{currentUser.role}</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="truncate">{currentUser.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="truncate">{currentUser.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span>Role: Standard IAM</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <button 
                    onClick={handleLogout}
                    className="w-full h-9 flex items-center justify-center gap-2 hover:bg-red-500/10 hover:text-red-400 text-muted-foreground text-xs font-bold rounded-xl border border-transparent hover:border-red-500/20 transition-all cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Disconnect Session</span>
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
