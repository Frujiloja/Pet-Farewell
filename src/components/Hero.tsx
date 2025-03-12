import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  // Estado para manejar el índice de la imagen actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Listado de imágenes con sus respectivos textos alternativos
  const images = {
    mobile: [
      {
        url: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1741802235/Entierros_perros_facil_2_gezose.png",
        alt: "Imagen móvil 1 - Entierro Mascotas",
      },
      {
        url: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1741802237/Ataudes_perros_2_b0diea.jpg",
        alt: "Imagen móvil 2 - Entierro Mascotas",
      },
      {
        url: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1741817232/Entierros_mascotas_3_jlw3bh.png",
        alt: "Imagen móvil 3 - Entierro Mascotas",
      },
      {
        url: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1741802237/Muerte_mascota_2_bytr64.jpg",
        alt: "Imagen móvil 4 - Entierro Mascotas",
      },
    ],
    desktop: [
      {
        url: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1741802234/Entierros_perros_facil_sj1hld.jpg",
        alt: "Imagen escritorio 1 - Entierro Mascotas",
      },
      {
        url: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1741802244/ataud_perros_xegkit.jpg",
        alt: "Imagen escritorio 2 - Entierro Mascotas",
      },
      {
        url: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1741803146/Entierros_mascotas_1_zic5nf.png",
        alt: "Imagen escritorio 3 - Entierro Mascotas",
      },
      {
        url: "https://res.cloudinary.com/dwxa2fewv/image/upload/v1741802245/Muerte_mascota_caba_oyquft.jpg",
        alt: "Imagen escritorio 4 - Entierro Mascotas",
      },
    ],
  };

  // Cambiar la imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.desktop.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [images.desktop.length]);

// ... existing code ...
return (
  <div className="relative min-h-screen pt-8 overflow-hidden" id="home">
        <div className="absolute top-0 left-0 w-full h-2/5 bg-gradient-to-b from-black to-transparent z-10"></div>

    {/* Contenedor de las imágenes con transición */}
    <div
      className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
      style={{
        width: `${images.desktop.length * 100}vw`, // Ancho dinámico basado en la cantidad de imágenes
        transform: `translateX(-${currentImageIndex * 100}vw)`, // Transición horizontal
      }}
    >
      {images.desktop.map((image, index) => (
        <picture
          key={index}
          className="flex-shrink-0"
          style={{ width: "100vw", height: "100vh" }} // Cada imagen ocupa el 100% del viewport
        >
          {/* Imagen para móviles */}
          <source
            srcSet={images.mobile[index]?.url}
            media="(max-width: 640px)"
          />
          {/* Imagen para escritorio */}
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </picture>
      ))}
    </div>

    {/* Gradiente en la parte inferior */}
    <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white to-transparent"></div>

    {/* Contenido */}
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
);}
// ... existing code ...

export default Hero;