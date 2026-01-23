import Hero from "@/components/Hero";
import AppPreview from "@/components/AppPreview";
import BetaBenefits from "@/components/BetaBenefits";
import WhatWeNeed from "@/components/WhatWeNeed";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <AppPreview />
      <BetaBenefits />
      <WhatWeNeed />
      <EmailSignup />
      <Footer />
    </main>
  );
};

export default Index;