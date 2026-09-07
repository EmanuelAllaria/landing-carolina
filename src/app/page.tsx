import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Quality } from "@/components/Quality";
import { Safety } from "@/components/Safety";
import { Inspections } from "@/components/Inspections";
import { Ada } from "@/components/Ada";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Quality />
        <Safety />
        <Inspections />
        <Ada />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
