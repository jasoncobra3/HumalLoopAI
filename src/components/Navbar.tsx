import { Button } from "@/components/ui/button";
import { Bot, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 right-0 left-0 h-16 z-50 bg-background/60 backdrop-blur-md border-b border-white/5"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-full">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-primary" />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight leading-none text-foreground">HumanLoop AI</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">AI Support OS</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" size="sm" className="hidden sm:flex border-white/10 hover:bg-white/5 cursor-pointer">
              Log In
            </Button>
          </Link>
          <Link to="/login?mode=signup">
            <Button size="sm" className="bg-primary text-primary-foreground hover:brightness-110 cursor-pointer">
              Deploy Model
            </Button>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
