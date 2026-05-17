import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ProductPreview } from "../components/ProductPreview";
import { Features } from "../components/Features";
import { Workflow } from "../components/Workflow";
import { Collaboration } from "../components/Collaboration";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProductPreview />
        <Features />
        <Workflow />
        <Collaboration />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
