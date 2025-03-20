import React from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable"; // Importamos el controlador de gestos

const CollageComponent = () => {
  const images = [
    "https://res.cloudinary.com/dwxa2fewv/image/upload/v1742498014/caja_entierro_mascota_3_d61gpe.jpg",
    "https://res.cloudinary.com/dwxa2fewv/image/upload/v1742498014/caja_entierro_mascota_1_sy05le.jpg",
    "https://res.cloudinary.com/dwxa2fewv/image/upload/v1742498014/caja_entierro_mascota_2_r6qkcc.jpg",
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

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide, // Deslizar a la izquierda
    onSwipedRight: prevSlide, // Deslizar a la derecha
    trackTouch: true, // Habilitar seguimiento táctil
    trackMouse: false, // Deshabilitar seguimiento del mouse
  });

  return (
    <section className="w-full sm:text-center p-8 pt-40" id="collage">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-4xl md:text-4xl font-bold mb-8 mx-auto">
          Ataúdes biodegradables
        </h2>
        <h3 className="max-w-4xl text-[22px] mx-auto font-light">
          Nuestro ataúd biodegradable, hecho de cartón ecológico, es resistente
          y soporta hasta 100 kg. Al mismo tiempo, se descompone de forma
          natural, contribuyendo al ciclo de la vida sin dejar huella en el
          planeta.
        </h3>
      </div>

      {/* Carrusel para dispositivos móviles con framer-motion */}
      <div
        {...handlers} // Agregamos los controladores de gestos al contenedor principal
        className="sm:hidden relative overflow-hidden"
      >
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
      <div className="hidden sm:grid grid-cols-2 gap-4 px-40 pt-6">
        {/* Primera imagen grande */}
        <div className="row-span-2">
          <img
            className="w-full h-[617px] object-cover rounded-lg"
            src="https://res.cloudinary.com/dwxa2fewv/image/upload/v1742498014/caja_entierro_mascota_1_sy05le.jpg"
            alt="Entierro Mascota"
          />
        </div>

        {/* Dos imágenes más pequeñas */}
        <div className="grid grid-rows-2 gap-4">
          <img
            className="w-full h-[300px] object-cover rounded-lg"
            src="https://res.cloudinary.com/dwxa2fewv/image/upload/v1742498014/caja_entierro_mascota_3_d61gpe.jpg"
            alt="Entierro Mascota"
          />
          <img
            className="w-full h-[300px] object-cover rounded-lg"
            src="https://res.cloudinary.com/dwxa2fewv/image/upload/v1742498014/caja_entierro_mascota_2_r6qkcc.jpg"
            alt="Entierro Mascota"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-16">
        <a
          href="https://wa.link/ikj9yv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-[#000000] hover:bg-[#444444] w-full text-white px-8 py-6 text-xl rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold"
          >
            Hablar con un asesor
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CollageComponent;
