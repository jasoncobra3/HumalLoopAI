import { DashboardLayout } from "../components/layout/DashboardLayout";
import { ChatWindow } from "../components/chat-playground/ChatWindow";
import { AIAnalysisPanel } from "../components/chat-playground/AIAnalysisPanel";
import { motion } from "motion/react";

export default function ChatPlaygroundPage() {
  return (
    <DashboardLayout noScroll maxContentWidth="max-w-none">
      <div className="flex-1 p-10 flex gap-10 overflow-hidden">
        {/* Left Side: Chat */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-[1.2] min-w-0"
        >
          <ChatWindow />
        </motion.div>

        {/* Right Side: Analysis */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 min-w-0 flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-2"
        >
          <AIAnalysisPanel />
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
