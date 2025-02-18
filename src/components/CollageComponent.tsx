import { Button } from "@/components/ui/button";


const CollageComponent = () => {
  return (
    <section className="w-full text-center p-8 pt-20">
      <div className="container mx-auto px-4">
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
      <div className="grid grid-cols-2 gap-4 px-60 pt-10">
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
    </section>
  );
};

export default CollageComponent;
