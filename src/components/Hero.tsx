import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen" id="home">
      {/* Background with gradient */}
      <div className="absolute inset-0 w-full h-full">
        <img src="/Hero.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-10">
        <div className="container mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center">
          <div className="max-w-4xl space-y-8 md:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Un adios
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              lleno de amor
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl">
              Te ofrecemos un servicio de entierro en casa, para que puedas
              despedir a tu mascota de la mejor manera
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-8">
              <a
                href="https://wa.me/+541157719725"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#000000] hover:bg-[#444444] text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Contactanos
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
