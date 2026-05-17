import React from "react";
import { Brain, Zap, MessageSquare, AlertCircle, ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AssistantSettings, AiTone } from "@/types/settings";
import { motion } from "motion/react";

interface Props {
  settings: AssistantSettings;
  onUpdate: (updates: Partial<AssistantSettings>) => void;
}

export function AiIntelligenceSettings({ settings, onUpdate }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white/[0.03] backdrop-blur-3xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-2xl space-y-10 ring-1 ring-white/5"
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary border border-secondary/20 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
          <Brain className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground tracking-tight">Intelligence Parametrics</h3>
          <p className="text-xs text-muted-foreground mt-1.5 opacity-60">Fine-tune confidence thresholds, behavioral logic, and neural tone.</p>
        </div>
      </div>

      {/* Confidence Slider */}
      <div className="space-y-6 pt-6 border-t border-white/5">
        <div className="flex items-end justify-between">
          <div className="space-y-1.5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Autonomous Threshold</h4>
            <p className="text-xs text-muted-foreground opacity-60">Minimum certainty required for autonomous resolution</p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-secondary tracking-tighter">{settings.confidenceThreshold}%</span>
            <span className="text-[10px] font-bold text-muted-foreground opacity-40 uppercase tracking-widest">Confidence</span>
          </div>
        </div>
        <div className="relative pt-2">
          <Slider
            value={[settings.confidenceThreshold]}
            onValueChange={(vals) => onUpdate({ confidenceThreshold: vals[0] })}
            max={100}
            step={1}
            className="py-4"
          />
          <div className="flex justify-between text-[9px] font-bold text-muted-foreground pt-2 uppercase tracking-[0.1em] opacity-30">
            <span>Aggressive (Low)</span>
            <span>Balanced</span>
            <span>Conservative (High)</span>
          </div>
        </div>
      </div>

      {/* Toggles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/10 group/toggle shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-[10px] font-black text-secondary uppercase tracking-widest">Sentiment Escalation</span>
            </div>
            <Switch
              checked={settings.sentimentEscalation}
              onCheckedChange={(val) => onUpdate({ sentimentEscalation: val })}
              className="data-[state=checked]:bg-secondary"
            />
          </div>
          <p className="text-[11px] text-muted-foreground leading-relaxed opacity-70">
            Automatically trigger human handoff when high user frustration or anger is detected.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 group/toggle">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-foreground opacity-40" />
              <span className="text-[10px] font-black text-foreground opacity-40 uppercase tracking-widest">Keyword Triggers</span>
            </div>
            <Switch
              checked={settings.keywordTriggers}
              onCheckedChange={(val) => onUpdate({ keywordTriggers: val })}
            />
          </div>
          <p className="text-[11px] text-muted-foreground leading-relaxed opacity-70">
            Flag enterprise-sensitive keywords for immediate intervention by support leads.
          </p>
        </div>
      </div>

      {/* Voice & Tone */}
      <div className="space-y-6 pt-8 border-t border-white/5">
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Personality Matrix</h4>
            <p className="text-xs text-muted-foreground opacity-60">Linguistic persona for neural response generation</p>
          </div>
        </div>
        <Select
          value={settings.voiceTone}
          onValueChange={(val: AiTone) => onUpdate({ voiceTone: val })}
        >
          <SelectTrigger className="bg-white/5 border-white/10 rounded-xl h-12 text-sm focus:ring-secondary/30 ring-1 ring-white/5">
            <SelectValue placeholder="Select tone" />
          </SelectTrigger>
          <SelectContent className="bg-[#1a1b23] border-white/10 rounded-xl">
            {["Professional", "Friendly", "Technical", "Direct"].map((tone) => (
              <SelectItem key={tone} value={tone} className="text-sm focus:bg-white/10 transition-colors">
                {tone}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </motion.div>
  );
}
