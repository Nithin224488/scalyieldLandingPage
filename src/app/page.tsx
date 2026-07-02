import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SectionPlaceholder } from "@/components/ui/SectionPlaceholder";
import { Footer } from "@/components/layout/Footer";

const FreeAudit = dynamic(
  () => import("@/components/sections/FreeAudit").then((m) => m.FreeAudit),
  { loading: () => <SectionPlaceholder className="my-20 h-80" /> },
);

const Services = dynamic(
  () => import("@/components/sections/Services").then((m) => m.Services),
  { loading: () => <SectionPlaceholder className="my-20 h-80" /> },
);

const WhyChooseUs = dynamic(
  () => import("@/components/sections/WhyChooseUs").then((m) => m.WhyChooseUs),
  { loading: () => <SectionPlaceholder className="my-20 h-80" /> },
);

const Process = dynamic(
  () => import("@/components/sections/Process").then((m) => m.Process),
  { loading: () => <SectionPlaceholder className="my-20 h-96" /> },
);

const FAQ = dynamic(
  () => import("@/components/sections/FAQ").then((m) => m.FAQ),
  { loading: () => <SectionPlaceholder className="my-20 h-64" /> },
);

const FinalCTA = dynamic(
  () => import("@/components/sections/FinalCTA").then((m) => m.FinalCTA),
  { loading: () => <SectionPlaceholder className="my-20 h-48" /> },
);

const ContactForm = dynamic(
  () => import("@/components/sections/ContactForm").then((m) => m.ContactForm),
  { loading: () => <SectionPlaceholder className="my-20 h-[32rem]" /> },
);

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
