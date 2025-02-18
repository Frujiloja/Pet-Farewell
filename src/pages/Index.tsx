import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CatBanner from "@/components/CatBanner";
import Partners from "@/components/Partners";
import CollageComponent from "@/components/CollageComponent";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Servicios from "@/components/Servicios";
import VerticalCarousel from "@/components/Carrousel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Servicios />
      <VerticalCarousel />
      <Partners />
      <CatBanner />
      <CollageComponent />
      <FAQ />
      <Footer />
      <a
        href="https://wa.me/+541157719725" // Reemplaza con tu número de WhatsApp
        className="fixed bottom-8 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg z-30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/download.png" alt="WhatsApp" className="h-12 w-12" />
      </a>
    </div>
  );
};

export default Index;