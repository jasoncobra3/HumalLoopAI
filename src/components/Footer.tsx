import { Bot, Globe, Users } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Bot className="w-6 h-6 text-primary" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight leading-none text-foreground">HumanLoop AI</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">AI Support OS</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mb-8 leading-relaxed">
              The next generation of human-in-the-loop customer intelligence. Built for trust, scale, and performance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass-card rounded-lg text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 glass-card rounded-lg text-muted-foreground hover:text-primary transition-colors">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-foreground mb-6">Product</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-foreground mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-foreground mb-6">Resources</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            © 2024 HumanLoop AI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(93,230,255,0.5)]" />
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
