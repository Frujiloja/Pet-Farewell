import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable"; // Importamos el controlador de gestos

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
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1741802235/beautiful-dusk-light-colorful-beauty_1_n7lxps.png",
    bgColor: "bg-[#FCBD85]",
  },
  {
    id: 4,
    text: "Te llevamos una semilla para que tu mascota se vuelva eterna",
    image:
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739893233/freepik__expand__6923_1_yry6ua.png",
    bgColor: "bg-[#7DA600]",
  },
];

export default function HorizontalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar automáticamente las diapositivas cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Controlador de gestos para manejar el deslizamiento
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1)), // Deslizar a la izquierda
    onSwipedRight: () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1)), // Deslizar a la derecha
    trackTouch: true, // Habilitar seguimiento táctil
    trackMouse: false, // Deshabilitar seguimiento del mouse
  });

  return (
    <div
      {...handlers} // Agregamos los controladores de gestos al contenedor principal
      className="relative w-full h-[60vh] sm:h-[80vh] overflow-hidden flex items-center justify-center"
    >
      {/* Contenedor de las diapositivas */}
      <motion.div
        className="flex w-full h-full"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 0.8 }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Difuminado en el margen inferior */}
            <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black to-transparent"></div>

            {/* Contenido del slide */}
            <div className="relative z-10 text-white p-4 sm:p-6 rounded-xl w-4/5 sm:w-[50vw] h-full flex flex-col sm:flex-row justify-center items-center mx-auto">
              {/* Número grande */}
              <div className="text-[30px] sm:text-[180px] font-bold text-white mb-4 sm:mb-0 sm:mr-4">
                {index + 1}
              </div>
              {/* Contenedor del texto */}
              <div className="text-center sm:text-left">
                {/* Título estático */}
                <h2 className="text-[16px] sm:text-[26px] font-thin mb-4">
                  La ceremonia: paso a paso
                </h2>
                {/* Texto dinámico */}
                <p className="text-[28px] sm:text-[36px] font-bold leading-relaxed">
                  {slide.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Indicadores de navegación (dots) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
              index === currentIndex ? "bg-yellow-500" : "bg-white"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}