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
      className="h-[70vh] bg-white flex justify-center mt-20"
      id="servicios"
    >
      <div className="text-center w-[70vw]">
        <h2 className="text-2xl md:text-4xl font-bold mb-12 mx-60">
          ¡Súmate a nuestro equipo!{" "}
        </h2>
        <h3 className="mx-60">
          Si sos veterinario, distribuidor o tenés un local relacionado con el
          cuidado de mascotas, te invitamos a formar parte de nuestro programa
          de distribución. Ofrecé a tus clientes una opción para despedir a sus
          mascotas.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20 mb-20">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <img
                src={highlight.image}
                alt={highlight.title}
                className="mx-auto mb-4 w-[18vh] object-cover rounded-lg"
              />
              <h3 className="font-semibold">{highlight.title}</h3>
            </div>
          ))}
        </div>
        <a
          href="https://wa.me/+541157719725"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-[#000000] hover:bg-[#444444] text-white px-8 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold"
          >
            {" "}
            Contactanos
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Sumate;
