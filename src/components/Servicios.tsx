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
    <section className="h-[70vh] bg-white flex justify-center" id="servicios">
      <div className="text-center w-[70vw]">
        <h2 className="text-2xl md:text-4xl font-bold mb-12 mx-60">
          Nos encargamos de todo para que su despedida sea solo amor{" "}
        </h2>
        <h3 className="mx-60">
          Queremos que este momento sea tranquilo para vos. Llevamos un ataúd
          según el tamaño de tu mascota y cavamos el pozo en tu jardín. Rápido,
          simple y sin que tengas que preocuparte por nada.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20">
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
      </div>
    </section>
  );
};

export default Servicios;
