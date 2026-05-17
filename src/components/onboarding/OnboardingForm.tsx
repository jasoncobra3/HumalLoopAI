import React, { useState } from "react";
import { ArrowRight, Save, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function OnboardingForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    supportEmail: "",
    description: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-foreground">Establish Your Digital Workspace</h3>
        <p className="text-muted-foreground mt-3 text-lg">
          Help HumanLoop AI understand your business context to deliver more relevant operational insights.
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1">Company Name</label>
            <Input 
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="bg-background/50 border-white/10 rounded-xl py-6 px-4 hover:border-primary/50 focus:border-primary transition-all" 
              placeholder="e.g. Acme Corp" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1">Website URL</label>
            <Input 
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              className="bg-background/50 border-white/10 rounded-xl py-6 px-4 hover:border-primary/50 focus:border-primary transition-all" 
              placeholder="https://acme.ai" 
              type="url"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1">Support Email</label>
          <Input 
            name="supportEmail"
            value={formData.supportEmail}
            onChange={handleChange}
            className="bg-background/50 border-white/10 rounded-xl py-6 px-4 hover:border-primary/50 focus:border-primary transition-all" 
            placeholder="operations@acme.ai" 
            type="email"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1">Business Description</label>
          <Textarea 
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="bg-background/50 border-white/10 rounded-xl py-4 px-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none min-h-[120px] hover:border-primary/50" 
            placeholder="Describe your primary operations, target industry, and core AI objectives..." 
          />
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1">Supporting Materials</label>
          <div className="p-8 border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-primary/30 transition-all cursor-pointer group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Upload className="w-6 h-6" />
            </div>
            <div className="text-center">
              <Button type="button" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 rounded-xl px-6">
                Upload Business Doc
              </Button>
              <p className="text-[10px] text-muted-foreground mt-3 uppercase tracking-widest opacity-50">
                PDF, DOCX, or TXT up to 10MB
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-white/5">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save and Exit
          </Button>
          <Link to="/knowledge-base">
            <Button className="bg-primary text-primary-foreground h-14 px-8 rounded-2xl font-bold hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all flex items-center gap-2">
              Continue to Knowledge Base
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
