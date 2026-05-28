import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Bot, 
  KeyRound, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Lock, 
  Mail, 
  UserPlus, 
  Building2, 
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const modeParam = searchParams.get("mode") || "login";
  
  const [isLogin, setIsLogin] = useState(modeParam !== "signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [selectedSso, setSelectedSso] = useState<string | null>(null);

  useEffect(() => {
    setIsLogin(modeParam !== "signup");
  }, [modeParam]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    setTimeout(() => {
      // Hardcoded check for 'admin' & 'admin'
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();

      if ((trimmedEmail === "admin" || trimmedEmail === "admin@humanloop.ai") && trimmedPassword === "admin") {
        setSuccessMsg("Welcome back, Administrator. Connecting to HumanLoop Support OS...");
        localStorage.setItem("auth_user", JSON.stringify({
          username: "admin",
          email: "admin@humanloop.ai",
          role: "Enterprise Administrator",
          company: "Acme Corp (Enterprise)",
          avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzrsxQU0ZiCFfUhXUQvstqslZuCVCCQ3fQk5Ucz-ZnEyNxKK46pu2YTE95uwk_fJwePjLUj-Dh6HJWs-vXXaITvfTOFZlbcarLZN12V1V_oyXRHK2fgEy7hJFFTJT7uTLGmBQ-EYnwcsmxDd0yHUmE9MhJBpzXkJa6OYJR1fLJLnaV506awEF7032wcE3p8Q45AmDe3dd36SXygUqxzQJZhAtVysAPlD0R0wE3jdzO0MjEopYyPbSHB2IhwNru5Pp49ZsCebJ2NB-B"
        }));
        
        setTimeout(() => {
          navigate("/onboarding");
        }, 1200);
      } else {
        setError("Invalid credentials. Try using 'admin' / 'admin' as default login configuration.");
        setIsLoading(false);
      }
    }, 800);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!email || !password || !fullName || !companyName) {
      setError("Please fill out all fields to register your development workspace.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setSuccessMsg("Workspace initiated successfully. Pre-filling admin credentials for sandbox login!");
      
      // Auto-switch to login with the registered or default credentials
      setTimeout(() => {
        setEmail("admin");
        setPassword("admin");
        setIsLogin(true);
        setIsLoading(false);
        setSuccessMsg(null);
      }, 1500);
    }, 1000);
  };

  const handleAutofill = () => {
    setEmail("admin");
    setPassword("admin");
    setError(null);
  };

  const handleSsoClick = (ssoType: string) => {
    setSelectedSso(ssoType);
    setIsLoading(true);
    setError(null);
    
    setTimeout(() => {
      setSuccessMsg(`Federated connection authenticated secure handshake via ${ssoType}. Redirecting...`);
      localStorage.setItem("auth_user", JSON.stringify({
        username: "admin_sso",
        email: `sso-admin@${ssoType.toLowerCase().replace(" ", "")}.com`,
        role: "SSO Enterprise Administrator",
        company: "Federated Enterprise Workspace",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzrsxQU0ZiCFfUhXUQvstqslZuCVCCQ3fQk5Ucz-ZnEyNxKK46pu2YTE95uwk_fJwePjLUj-Dh6HJWs-vXXaITvfTOFZlbcarLZN12V1V_oyXRHK2fgEy7hJFFTJT7uTLGmBQ-EYnwcsmxDd0yHUmE9MhJBpzXkJa6OYJR1fLJLnaV506awEF7032wcE3p8Q45AmDe3dd36SXygUqxzQJZhAtVysAPlD0R0wE3jdzO0MjEopYyPbSHB2IhwNru5Pp49ZsCebJ2NB-B"
      }));

      setTimeout(() => {
        navigate("/onboarding");
      }, 1200);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row font-sans relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

      {/* Floating Back Link */}
      <div className="absolute top-6 left-6 z-50">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-sm font-semibold border border-white/5 text-muted-foreground hover:text-foreground transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Landing</span>
        </Link>
      </div>

      {/* Brand & Marketing Panel - Left Grid */}
      <div className="w-full lg:w-[45%] bg-gradient-to-br from-muted/40 via-background to-background border-r border-white/5 p-8 lg:p-16 flex flex-col justify-between relative z-10 shrink-0 select-none">
        
        {/* Brand Logo Header */}
        <div className="pt-12 lg:pt-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30 shadow-[0_0_30px_rgba(99,102,241,0.25)]">
              <Bot className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight leading-none text-foreground">HumanLoop</span>
              <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold mt-1">Support OS</span>
            </div>
          </div>
        </div>

        {/* Dynamic Marketing Copy */}
        <div className="my-12 lg:my-0 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Next-Gen Orchestration Platform</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              The Mission Control for <span className="text-gradient">Agentic Customer Support</span>
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-md">
              Synchronize autonomous AI agents, construct long-term memory structures, and transition context fluidly to human operators when complexity signals low confidence.
            </p>
          </div>

          {/* Core Capability Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-3 items-start p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
              <KeyRound className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-300">Semantic Guardrails</h4>
                <p className="text-[11px] text-muted-foreground mt-0.5">Real-time confidence metrics check hallucination.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
              <Cpu className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-300">Memory Synthesis</h4>
                <p className="text-[11px] text-muted-foreground mt-0.5">Automated extraction of user preference vectors.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Footer */}
        <div className="space-y-4 border-t border-white/5 pt-8">
          <div className="flex flex-wrap items-center gap-5 text-xs text-muted-foreground opacity-70">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>SOC2 Type II</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-500" />
              <span>AES-256 Auth</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-emerald-500" />
              <span>ISO 27001 Ready</span>
            </div>
          </div>
        </div>

      </div>

      {/* Login & Signup Form Area - Right Grid */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-20 relative z-10 bg-background">
        
        {/* Dynamic Card */}
        <div className="w-full max-w-lg glass-card rounded-[2.5rem] p-8 md:p-12 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
          
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
              {isLogin ? "Sign in to Platform" : "Create Developer Account"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {isLogin 
                ? "Enter your credentials or authenticate using single sign-on." 
                : "Initiate your high-capacity sandbox environment."}
            </p>
          </div>

          {/* Quick Sandbox Login Indicator Info */}
          <div className="mb-6 p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-start gap-3 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-primary">Default Developer Sandbox</span>
                <button 
                  type="button"
                  onClick={handleAutofill} 
                  className="text-xs text-secondary hover:underline font-semibold focus:outline-none shrink-0"
                >
                  Auto-fill values
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-1 font-mono tracking-tight leading-tight">
                User: <span className="text-white font-bold">admin</span> / Password: <span className="text-white font-bold">admin</span>
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs flex gap-3 items-center"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            {successMsg && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex gap-3 items-center"
              >
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>{successMsg}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main interactive form */}
          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-300">Username or Business Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-2.5 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="email"
                    type="text" 
                    placeholder="e.g. admin or active_engineer@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-11 rounded-xl bg-muted/40 border-white/5 focus:border-primary/50 text-sm transition-all text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-xs font-black uppercase tracking-widest text-slate-300">Password</Label>
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); setError("Default administrator credentials cannot be reset in this environment."); }} className="text-xs text-primary hover:underline">Forgot password?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-2.5 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="password"
                    type="password" 
                    placeholder="Enter support catalog credentials" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-11 rounded-xl bg-muted/40 border-white/5 focus:border-primary/50 text-sm transition-all text-white"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading} 
                className="w-full h-11 bg-primary text-primary-foreground hover:brightness-110 font-bold rounded-xl transition-all shadow-lg shadow-primary/15 relative overflow-hidden cursor-pointer"
              >
                {isLoading ? "Starting Session Engine..." : "Access Control Cabin"}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="fullName" className="text-xs font-black uppercase tracking-widest text-slate-300">Full Name</Label>
                <div className="relative">
                  <UserPlus className="absolute left-3.5 top-2.5 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="fullName"
                    type="text" 
                    placeholder="Your legal or administrative name" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="pl-10 h-11 rounded-xl bg-muted/40 border-white/5 focus:border-primary/50 text-sm transition-all text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="companyName" className="text-xs font-black uppercase tracking-widest text-slate-300">Company / Workspace Domain</Label>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-2.5 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="companyName"
                    type="text" 
                    placeholder="e.g. Acme Corporation" 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="pl-10 h-11 rounded-xl bg-muted/40 border-white/5 focus:border-primary/50 text-sm transition-all text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="regEmail" className="text-xs font-black uppercase tracking-widest text-slate-300">Corporate Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-2.5 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="regEmail"
                    type="email" 
                    placeholder="you@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-11 rounded-xl bg-muted/40 border-white/5 focus:border-primary/50 text-sm transition-all text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="regPassword" className="text-xs font-black uppercase tracking-widest text-slate-300">System Gateway Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-2.5 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="regPassword"
                    type="password" 
                    placeholder="Configure secure master credential" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-11 rounded-xl bg-muted/40 border-white/5 focus:border-primary/50 text-sm transition-all text-white"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading} 
                className="w-full h-11 bg-primary text-primary-foreground hover:brightness-110 font-bold rounded-xl transition-all shadow-lg shadow-primary/15 mt-3 cursor-pointer"
              >
                {isLoading ? "Provisioning Container Space..." : "Instate Environment Sandbox"}
              </Button>
            </form>
          )}

          {/* Toggle Login/Signup */}
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">
              {isLogin ? "Need a dedicated sandbox environment?" : "Already configured a local tenant?"}
            </span>{" "}
            <button 
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
                setSuccessMsg(null);
              }} 
              className="font-bold text-primary hover:underline ml-1 focus:outline-none"
            >
              {isLogin ? "Sign up here" : "Sign in instead"}
            </button>
          </div>

          {/* High-Grade Federated SSO Section */}
          <div className="mt-8 pt-8 border-t border-white/5">
            <div className="relative flex items-center justify-center mb-6">
              <span className="absolute bg-card px-4 text-xs font-black uppercase tracking-widest text-muted-foreground">Enterprise Direct Integration</span>
              <div className="w-full h-px bg-white/5" />
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <button
                type="button"
                onClick={() => handleSsoClick("Okta IDP")}
                className="flex items-center justify-center gap-2 h-11 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all text-xs text-white font-semi-bold"
              >
                <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
                </svg>
                <span>SAML (Okta IDP)</span>
              </button>

              <button
                type="button"
                onClick={() => handleSsoClick("Google Workspace")}
                className="flex items-center justify-center gap-2 h-11 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all text-xs text-white"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Google IAM</span>
              </button>

              <button
                type="button"
                onClick={() => handleSsoClick("Microsoft Azure AD")}
                className="flex items-center justify-center gap-2 h-11 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all text-xs text-white"
              >
                <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 23 23">
                  <path d="M0 0h11v11H0z" fill="#F25022"/>
                  <path d="M12 0h11v11H12z" fill="#7FBA00"/>
                  <path d="M0 12h11v11H0z" fill="#00A4EF"/>
                  <path d="M12 12h11v11H12z" fill="#FFB900"/>
                </svg>
                <span>Microsoft Azure AD</span>
              </button>

              <button
                type="button"
                onClick={() => handleSsoClick("GitHub Enterprise")}
                className="flex items-center justify-center gap-2 h-11 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all text-xs text-white"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <span>GitHub Enterprise</span>
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
