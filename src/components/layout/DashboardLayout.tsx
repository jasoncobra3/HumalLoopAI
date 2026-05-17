import React from "react";
import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  maxContentWidth?: string;
  noScroll?: boolean;
}

export function DashboardLayout({ children, maxContentWidth = "1600px", noScroll = false }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-background text-on-surface font-body-md selection:bg-primary/30 overflow-hidden">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0 ml-[248px]">
        {/* Sticky Topbar */}
        <TopNav />

        {/* content area */}
        <div className={cn(
          "flex-1 mt-[72px] relative min-h-0",
          !noScroll && "overflow-y-auto custom-scrollbar",
          noScroll && "flex flex-col"
        )}>
          <div 
            className={cn(
              "w-full",
              noScroll ? "flex-1 min-h-0 flex flex-col" : "min-h-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8"
            )}
            style={!noScroll ? { maxWidth: maxContentWidth } : {}}
          >
            {children}
          </div>
        </div>
      </div>

      {/* Global Background Glows - Fixed Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-[248px] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] -translate-x-1/4 translate-y-1/4" />
      </div>
    </div>
  );
}
