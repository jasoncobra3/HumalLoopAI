import React from "react";
import { Mail, Webhook, ShieldCheck, Bot, ExternalLink, Activity } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const integrations = [
  {
    id: "smtp",
    name: "SMTP Support Bridge",
    description: "Forward urgent escalations to support@humanloop.ai",
    icon: Mail,
    status: "Connected",
    color: "text-primary",
  },
  {
    id: "webhook",
    name: "Webhooks (Event Bus)",
    description: "Stream live conversation events to your backend",
    icon: Webhook,
    status: "Healthy",
    color: "text-secondary",
  },
  {
    id: "slack",
    name: "Slack Notify",
    description: "Broadcast internal alerts to support-ops channels",
    icon: Activity,
    status: "Inactive",
    color: "text-muted-foreground",
  },
];

export function SupportIntegrations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white/[0.03] backdrop-blur-3xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-2xl space-y-8 ring-1 ring-white/5"
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 rounded-2xl bg-tertiary/20 flex items-center justify-center text-tertiary border border-tertiary/20 shadow-[0_0_20px_rgba(234,179,8,0.15)]">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground tracking-tight">Infrastructure Bridges</h3>
          <p className="text-xs text-muted-foreground mt-1.5 opacity-60">Manage enterprise support ecosystem integrations and event buses.</p>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-white/5">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="flex items-center justify-between p-5 rounded-[20px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group/item hover:bg-white/[0.04]"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 transition-transform group-hover/item:scale-110">
                <integration.icon className={cn("w-5 h-5", integration.color)} />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="text-sm font-bold text-foreground tracking-tight">{integration.name}</h4>
                  <span className={cn(
                    "text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-lg border",
                    integration.status === "Inactive" 
                      ? "text-muted-foreground bg-white/5 border-white/5" 
                      : "text-green-400 bg-green-400/10 border-green-400/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]"
                  )}>
                    {integration.status}
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-1.5 opacity-60">{integration.description}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="hidden sm:flex h-8 text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
                Configure
              </Button>
              <Switch checked={integration.status !== "Inactive"} className="data-[state=checked]:bg-primary" />
            </div>
          </div>
        ))}
      </div>

      <Button variant="outline" className="w-full h-12 rounded-xl border-dashed border-white/10 bg-white/[0.02] text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-white/5 transition-all">
        Browse Catalyst Directory
        <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-50" />
      </Button>

      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-tertiary/10 blur-[60px] pointer-events-none opacity-40" />
    </motion.div>
  );
}
