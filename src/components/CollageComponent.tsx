import React from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const CollageComponent = () => {
  const images = [
    "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558891/Mask_group_dkgy6s.png",
    "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558891/Mask_group_dkgy6s.png",
    "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558891/Mask_group_dkgy6s.png",
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full text-center p-8 pt-20" id="collage">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 mx-auto">
          Ataúdes biodegradables
        </h2>
        <h3 className="max-w-4xl mx-auto font-light">
          Nuestro ataúd biodegradable, hecho de cartón ecológico, es resistente
          y soporta hasta 100 kg. Al mismo tiempo, se descompone de forma
          natural, contribuyendo al ciclo de la vida sin dejar huella en el
          planeta.
        </h3>
      </div>

      {/* Carrusel para dispositivos móviles con framer-motion */}
      <div className="sm:hidden relative overflow-hidden">
        <div className="relative w-full h-auto">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              className="w-full h-auto object-cover rounded-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        {/* Controles del carrusel */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
          <button
            onClick={prevSlide}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            &#8592;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
          <button
            onClick={nextSlide}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            &#8594;
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Galería para pantallas más grandes */}
      <div className="hidden sm:grid grid-cols-2 gap-4 px-60 pt-10">
        <div className="space-y-4">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src="https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558891/Mask_group_2_wbzvo9.png"
            alt="Imagen 1"
          />
          <img
            className="w-full h-auto object-cover rounded-lg"
            src="https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558891/Mask_group_1_v4husb.png"
            alt="Imagen 2"
          />
        </div>

        <div>
          <img
            className="w-full h-auto object-cover rounded-lg"
            src="https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558891/Mask_group_dkgy6s.png"
            alt="Imagen 3"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <a
          href="https://wa.me/+541168961470"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-[#000000] hover:bg-[#444444] text-white px-8 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold"
          >
            Hablar con un asesor
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CollageComponent;