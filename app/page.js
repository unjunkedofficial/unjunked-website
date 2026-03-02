import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProofStrip from "@/components/SocialProofStrip";
import WhyUnjunked from "@/components/WhyUnjunked";
import BundleBuilder from "@/components/BundleBuilder";
import IngredientTransparency from "@/components/IngredientTransparency";
import Comparison from "@/components/Comparison";
import SmallBatch from "@/components/SmallBatch";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <SocialProofStrip />
      <WhyUnjunked />
      <BundleBuilder />
      <IngredientTransparency />
      <Comparison />
      <SmallBatch />
      <FAQ />
      <Footer />
    </main>
  );
}
