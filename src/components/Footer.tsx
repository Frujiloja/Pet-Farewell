const Footer = () => {
  return (
    <footer className="bg-[#04603B] text-white mt-8 py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#04603B] to-white h-40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center md:text-left">
            <p className="text-4xl font-light">Tu mascota.</p>
            <h1 className="text-4xl font-bold">Para siempre.</h1>
          </div>
          <div className="text-center">
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-200 hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-200 hover:text-white">
                  Producto
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-200 hover:text-white">
                  Sumate al equipo
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-200 hover:text-white">
                  Preguntas
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center sm:justify-end h-10">
            <img src="/LogoPawwerB.png" alt="" />
          </div>
        </div>
        <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Pawwer. Todos los derechos reservados.</p>
          <p className="text-xs text-gray-400"> Powered by Ludden</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
