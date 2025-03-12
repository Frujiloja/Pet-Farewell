import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id="navbar"
      className="absolute top-0 left-0 right-0 bg-transparent z-50"
    >
      <div className="container mx-auto px-4 sm:px-10"> {/* Contenedor común */}
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-primary">
              <img
                src="/LogoPawwerB.png"
                alt="Entierro Mascotas Gato Perro"
                className="h-[4vh] sm:h-[4vh]"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#servicios"
              className="text-[#ffffff] hover:text-[#2c2c2c] transition-transform transform hover:scale-105 text-xl"
            >
              Servicios
            </a>
            <a
              href="#collage"
              className="text-[#ffffff] hover:text-[#2c2c2c] transition-transform transform hover:scale-105  text-xl"
            >
              Producto
            </a>
            <a
              href="#sumate"
              className="text-[#ffffff] hover:text-[#2c2c2c] transition-transform transform hover:scale-105  text-xl"
            >
              Súmate al equipo
            </a>
            <a
              href="#faq"
              className="text-[#ffffff] hover:text-[#2c2c2c] transition-transform transform hover:scale-105 text-xl"
            >
              Preguntas
            </a>
            <Button
              variant="default"
              size="lg"
              className="bg-[#000000] hover:bg-[#444444] text-white font-bold px-4 py-2 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-xl"
            >
              Contactanos
            </Button>
          </div>

          <div className="md:hidden flex items-center pr-4">
            <button onClick={toggleMenu} className="text-[#ffffff] ">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-10 w-10" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mx-8 flex flex-col items-center space-y-4 mb-4 bg-white rounded-lg shadow-lg p-4 transition-all duration-300">
            <a
              href="#servicios"
              onClick={toggleMenu}
              className="text-[#000000] hover:text-[#2c2c2c] transition-transform transform hover:scale-105 text-xl"
            >
              Servicios
            </a>
            <a
              href="#collage"
              onClick={toggleMenu}
              className="text-[#000000] hover:text-[#2c2c2c] transition-transform transform hover:scale-105 text-xl"
            >
              Producto
            </a>
            <a
              href="#sumate"
              onClick={toggleMenu}
              className="text-[#000000] hover:text-[#2c2c2c] transition-transform transform hover:scale-105 text-xl"
            >
              Súmate al equipo
            </a>
            <a
              href="#faq"
              onClick={toggleMenu}
              className="text-[#000000] hover:text-[#2c2c2c] transition-transform transform hover:scale-105 text-xl"
            >
              Preguntas
            </a>
            <a
              href="https://wa.me/+541168961470"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="lg"
                className="bg-[#6f4b2c] hover:bg-[#966a43] text-white font-bold px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-xl"
                onClick={toggleMenu}
              >
                Contactar
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;