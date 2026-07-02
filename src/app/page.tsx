import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FreeAudit } from "@/components/sections/FreeAudit";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactForm } from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FreeAudit />
        <Services />
        <WhyChooseUs />
        <Process />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
