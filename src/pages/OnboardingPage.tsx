import { DashboardLayout } from "../components/layout/DashboardLayout";
import { ProgressStepper } from "../components/onboarding/ProgressStepper";
import { OnboardingForm } from "../components/onboarding/OnboardingForm";
import { OnboardingPreview } from "../components/onboarding/OnboardingPreview";
import { motion } from "motion/react";

export default function OnboardingPage() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 space-y-8"
        >
          <div className="glass-card rounded-[2.5rem] p-12 overflow-hidden relative border-white/5 shadow-2xl">
            <ProgressStepper />
            <OnboardingForm />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4"
        >
          <OnboardingPreview />
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
