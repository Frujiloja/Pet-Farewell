const highlights = [
  {
    title: "En casa y sin preocupaciones",
    image:
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558889/akar-icons_home-alt1_spdhir.png",
  },
  {
    title: "Nos encargamos de todo",
    image:
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558891/pajamas_todo-done_ygcg8m.png",
  },
  {
    title: "Un recuerdo para siempre",
    image:
      "https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558893/tabler_seeding_fmhkd2.png",
  },
];

const Servicios = () => {
  return (
    <section
      className="h-[130vh] sm:h-[80vh] pt-20 bg-white flex justify-center px-4 sm:px-8 mb-10"
      id="servicios"
    >
      <div className="text-center w-full sm:w-[90vw] md:w-[70vw]">
        {/* Título principal */}
        <h2 className="text-4xl text-left sm:text-center sm:text-2xl md:text-4xl md:px-28 font-bold mb-6 sm:mb-12 mx-4 sm:mx-20">
          Nos encargamos de todo para que su despedida sea solo amor
        </h2>

        {/* Subtítulo */}
        <h3 className="text-[18px] text-left sm:text-center sm:text-[25px] mx-4 sm:mx-20 font-light leading-relaxed">
          Queremos que este momento sea tranquilo para vos. Llevamos un ataúd
          según el tamaño de tu mascota y cavamos el pozo en tu jardín. Rápido,
          simple y sin que tengas que preocuparte por nada.
        </h3>

        {/* Cuadrícula de destacados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 sm:gap-8 mt-10 sm:mt-20">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              {/* Imagen */}
              <img
                src={highlight.image}
                alt={highlight.title}
                className="mx-auto mb-4 w-[12vh] sm:w-[16vh] md:w-[18vh] object-cover rounded-lg"
              />
              {/* Título del destacado */}
              <h3 className="text-xl sm:text-[25px] font-semibold">
                {highlight.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
