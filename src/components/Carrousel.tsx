import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    text: "Vamos a tu casa con un ataúd biodegradable y ecológico para tu mascota",
    image:
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739893139/dirt-texture-12_1_eo0nuh.png",
    bgColor: "bg-[#5C4833]",
  },
  {
    id: 2,
    text: "Realizamos una ceremonia de despedida personalizada",
    image:
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739893234/green-lush-wild-meadow-forest_1_xzawb4.png",
    bgColor: "bg-[#04603B]",
  },
  {
    id: 3,
    text: "Enterramos a tu mascota con amor y respeto en un entorno natural",
    image:
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739893234/premium_photo-1668091148044-056cd744e64a_1_seby6k.png",
    bgColor: "bg-[#FCBD85]",
  },
  {
    id: 4,
    text: "Enterramos a tu mascota con amor y respeto en un entorno natural",
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
        className={`relative z-10 ${slides[currentIndex].bgColor} text-white p-4 sm:p-6 rounded-lg w-4/5 sm:w-1/4 text-center flex justify-center`}
      >
                <div className="absolute top-2 left-2 text-white px-2 py-1 rounded font-bold text-sm sm:text-base">
          {slides[currentIndex].id}
        </div>
        <p className="text-sm sm:text-lg w-full sm:w-80 mt-4 sm:mt-0">
          {slides[currentIndex].text}
        </p>    </motion.div>

      {/* Botones de navegación */}
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
    </div>
  );
}
