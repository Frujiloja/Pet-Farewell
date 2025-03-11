import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen" id="home">
      {/* Background with gradient */}
      <div className="absolute inset-0 w-full h-full">
        <picture>
          {/* Imagen para móviles */}
          <source srcSet="/pawwermobile.png" media="(max-width: 640px)" />
          {/* Imagen para escritorio */}
          <img src="/Hero.png" alt="" className="w-full h-full object-cover" />
        </picture>
        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 sm:px-10">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <div className="pb-40 sm:pb-0">
              {/* Títulos ajustados para móviles */}
              <h1 className="text-6xl sm:text-5xl md:text-5xl lg:text-7xl font-light leading-tight text-white">
                Un adios
              </h1>
              <h2 className="text-6xl sm:text-5xl md:text-5xl lg:text-[4.5vw] font-bold leading-tight text-white">
                lleno de amor.
              </h2>
              {/* Párrafo ajustado */}
              <p className="text-lg sm:text-xl md:text-xl lg:text-[1.5vw] text-white max-w-2xl">
                Te ofrecemos un servicio de entierro en casa, para que puedas
                despedir a tu mascota de la mejor manera
              </p>
            </div>
            {/* Botón ajustado */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6 sm:pt-8">
              <a
                href="https://wa.me/+541168961470"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#000000] hover:bg-[#444444] text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 text-base sm:text-lg lg:text-xl rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold"
                >
                  <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 mr-2" />
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