import { Button } from "@/components/ui/button";

const GoogleMapComponent = () => {
  return (
    <div className="text-center pt-16 my-6 sm:my-10 px-8">
      <h2 className="text-3xl text-left sm:text-center sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
        Cerca tuyo cuando más nos necesitás
      </h2>

      <div className="max-w-full sm:max-w-7xl mx-auto py-6 sm:py-10">
        <div className="w-full h-[600px] sm:h-[400px] rounded-[30px] overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.536286755884!2d-58.97083122351104!3d-34.41313054745921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb7d9ce2065ed5%3A0x5e6750dc164ae216!2sC.%209%201891%2C%20Fatima%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1741818010013!5m2!1ses!2sar"            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <h3 className="text-[22px] text-left sm:text-center sm:text-[1.5rem] mt-4 sm:mt-6 mx-auto sm:mx-80">
        Nuestra base está en Pilar, lo que nos permite brindarte un servicio ágil y confiable. En este momento difícil, nos encargamos de
        todo para que no tengas que preocuparte por nada.
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 sm:pt-8 mb-10">
        <a
              href="https://wa.link/ikj9yv"
              target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-[#000000] hover:bg-[#444444] text-white px-6 sm:px-8 py-4 sm:py-6 text-xl sm:text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold"
          >
            Hablar con un asesor
          </Button>
        </a>
      </div>
    </div>
  );
};

export default GoogleMapComponent;