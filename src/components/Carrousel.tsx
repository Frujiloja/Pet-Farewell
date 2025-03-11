import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const slides = [
  {
    id: 1,
    text: "Te llevamos un ataúd biodegradable y ecológico para tu mascota",
    image:
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739893139/dirt-texture-12_1_eo0nuh.png",
    bgColor: "bg-[#5C4833]",
  },
  {
    id: 2,
    text: "Un profesional de nuestro equipo cava el pozo en tu jardín",
    image:
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739893234/green-lush-wild-meadow-forest_1_xzawb4.png",
    bgColor: "bg-[#04603B]",
  },
  {
    id: 3,
    text: "Si lo deseas, te guiamos en una despedida simbólica para honrar la vida de tu mascota",
    image:
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739893234/premium_photo-1668091148044-056cd744e64a_1_seby6k.png",
    bgColor: "bg-[#FCBD85]",
  },
  {
    id: 4,
    text: "Te llevamos una semilla para que tu mascota se vuelva eterno",
    image:
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739893233/freepik__expand__6923_1_yry6ua.png",
    bgColor: "bg-[#7DA600]",
  },
];

export default function VerticalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Función para avanzar a la siguiente diapositiva
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Función para retroceder a la diapositiva anterior
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[80vh] overflow-hidden flex items-center justify-center">
      {/* Fondo de la imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      ></div>

      {/* Contenido del slide */}
      <motion.div
        key={currentIndex}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.8 }}
        className={`relative z-10 ${slides[currentIndex].bgColor} text-white p-4 sm:p-6 rounded-xl w-4/5 sm:w-[40vw] h-[30vh] sm:h-[30vh] text-center flex justify-center`}
      >
        <div className="absolute sm:top-2 sm:left-2 text-white px-2 py-1 rounded font-bold text-sm sm:text-base">
          {slides[currentIndex].id}
        </div>
        <p className="text-[22px] sm:text-[30px] px-4 sm:px-0 leading-relaxed w-full sm:w-90 mt-10 sm:mt-[6vh]">
          {slides[currentIndex].text}
        </p>{" "}
      </motion.div>

      {/* Botón para retroceder (flecha hacia arriba) */}
      <button
          onClick={prevSlide}
          className="absolute top-[10%] left-1/2 transform -translate-x-1/2 bg-transparent border-4 border-yellow-500 text-yellow-500 p-2 rounded-full hover:bg-yellow-500 hover:text-white transition"
        >
          <ChevronUpIcon className="w-10 h-10" /> {/* Ícono de flecha hacia arriba */}
        </button>

      {/* Indicadores de navegación */}
      <div className="absolute right-2 sm:right-5 flex flex-col gap-2 top-1/2 transform -translate-y-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-yellow-500" : "bg-white"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Botón para avanzar (flecha hacia abajo) */}
      <button
        onClick={nextSlide}
        className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 bg-transparent border-4 border-yellow-500 text-yellow-500 p-2 rounded-full hover:bg-yellow-500 hover:text-white transition"
      >
        <ChevronDownIcon className="w-10 h-10" /> {/* Ícono de flecha hacia abajo */}
      </button>
    </div>
  );
}