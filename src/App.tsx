import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import OnboardingPage from "./pages/OnboardingPage";
import KnowledgeBasePage from "./pages/KnowledgeBasePage";
import ChatPlaygroundPage from "./pages/ChatPlaygroundPage";
import EscalationsPage from "./pages/EscalationsPage";
import ConversationsPage from "./pages/ConversationsPage";
import MemoryPage from "./pages/MemoryPage";
import SettingsPage from "./pages/SettingsPage";
import SupportPage from "./pages/SupportPage";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
          <Route path="/chat-playground" element={<ChatPlaygroundPage />} />
          <Route path="/escalations" element={<EscalationsPage />} />
          <Route path="/conversations" element={<ConversationsPage />} />
          <Route path="/ai-memory" element={<MemoryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}

