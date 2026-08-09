import About from "@/components/About";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InstagramFeed from "@/components/InstagramFeed";
import Navbar from "@/components/Navbar";
import QuickInfoBar from "@/components/QuickInfoBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickInfoBar />
        <About />
        <Services />
        <WhyChooseUs />
        <InstagramFeed />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
