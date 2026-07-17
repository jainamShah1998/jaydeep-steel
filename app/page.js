import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpecTicker from "@/components/SpecTicker";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Sourcing from "@/components/Sourcing";
import Industries from "@/components/Industries";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SpecTicker />
        <Stats />
        <Products />
        <Sourcing />
        <Industries />
        <ContactFooter />
      </main>
    </>
  );
}
