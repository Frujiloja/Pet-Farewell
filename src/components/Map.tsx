import { Button } from "@/components/ui/button";

const GoogleMapComponent = () => {
  return (
    <div className="text-center my-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Cerca tuyo cuando más nos necesitás
      </h2>

      <div className="max-w-7xl mx-auto py-10">
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3284.017516964437!2d-58.3840929235036!3d-34.603718557499505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDM2JzEzLjQiUyA1OMKwMjInNTMuNSJX!5e0!3m2!1ses!2sar!4v1739905401950!5m2!1ses!2sar"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <h3 className="text-xl text-gray-600 mt-6 mx-80">
        Nuestra base está en Buenos Aires, lo que nos permite llegar a tu hogar
        de manera rápida y eficiente. En este momento difícil, nos encargamos de
        todo para que no tengas que preocuparte por nada.
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <a
          href="https://wa.me/+541157719725"
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
    </div>
  );
};

export default GoogleMapComponent;
