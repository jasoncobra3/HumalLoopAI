import { 
  MessageSquare, 
  Database, 
  Bot, 
  LayoutDashboard, 
  Settings, 
  History, 
  HelpCircle,
  ShieldAlert,
  Brain
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/onboarding" },
  { icon: Database, label: "Knowledge Base", path: "/knowledge-base" },
  { icon: MessageSquare, label: "Chat Playground", path: "/chat-playground" },
  { icon: ShieldAlert, label: "Escalations", path: "/escalations" },
  { icon: History, label: "Conversations", path: "/conversations" },
  { icon: Brain, label: "AI Memory & Analytics", path: "/ai-memory" },
  { icon: Settings, label: "Widget & Settings", path: "/settings" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-[248px] h-screen fixed left-0 top-0 bg-muted/30 backdrop-blur-3xl border-r border-white/5 flex flex-col py-8 z-50 overflow-y-auto custom-scrollbar">
      <div className="px-6 mb-12">
        <Link to="/onboarding" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(192,193,255,0.1)]">
            <Bot className="w-6 h-6 shrink-0" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-primary leading-none tracking-tight">HumanLoop</h1>
            <p className="text-[9px] text-muted-foreground tracking-[0.2em] uppercase mt-1.5 font-bold opacity-60">Support OS</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1.5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all group relative duration-200",
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground hover:bg-white/[0.03]"
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute right-0 top-2 bottom-2 w-0.5 bg-primary rounded-full shadow-[0_0_10px_rgba(192,193,255,0.5)]"
                />
              )}
              <item.icon className={cn("w-5 h-5 shrink-0 transition-colors", isActive ? "text-primary" : "group-hover:text-primary")} />
              <span className="text-sm font-semibold tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 py-8 mt-auto space-y-6 border-t border-white/5">
        <div className="space-y-1">
          <Link
            to="/support"
            className={cn(
              "w-full flex items-center gap-3 px-4 py-2 rounded-xl text-xs font-semibold transition-all hover:bg-white/[0.03]",
              location.pathname === "/support" ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>Help & Support</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
