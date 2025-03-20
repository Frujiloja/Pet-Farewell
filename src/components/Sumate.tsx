import { Button } from "@/components/ui/button";

const highlights = [
  {
    title: "Entrega rápida",
    image:
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558890/circum_delivery-truck_tdd6hs.png",
  },
  {
    title: "Fácil almacenamiento",
    image:
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558892/solar_box-linear_ejoute.png",
  },
  {
    title: "Productos ecologicos",
    image:
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558891/ph_recycle-thin_bvaobx.png",
  },
];

const Sumate = () => {
  return (
    <section
      className="h-auto bg-white flex justify-center mt-10 sm:mt-20 px-4"
      id="sumate"
    >
      <div className="sm:text-center w-[80vw] sm:w-[70vw]">
        <h2 className="text-4xl sm:text-2xl md:text-4xl font-bold mb-6 sm:mb-12 mx-auto">
          ¡Súmate a nuestro equipo!
        </h2>
        <h3 className="text-2xl sm:text-xl mx-auto sm:mx-60">
          Si sos veterinario, distribuidor o tenés un local relacionado con el
          cuidado de mascotas, te invitamos a formar parte de nuestro programa
          de distribución. Ofrecé a tus clientes una opción para despedir a sus
          mascotas.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-20 mb-10 sm:mb-20">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <img
                src={highlight.image}
                alt={highlight.title}
                className="mx-auto mb-4 w-[16vh] sm:w-[18vh] object-cover rounded-lg"
              />
              <h3 className="font-semibold text-xl sm:text-xl">
                {highlight.title}
              </h3>
            </div>
          ))}
        </div>
        <a
          href="https://wa.link/ikj9yv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-[#000000] hover:bg-[#444444] w-full sm:w-80 text-white px-6 sm:px-8 mt-8 py-4 sm:py-6 text-xl sm:text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold"
          >
            Contactanos
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Sumate;
