const CatBanner = () => {
  return (
    <section
      id="CatBanner"
      className="w-full h-[80vh] sm:h-[600px] relative bg-cover bg-center"
    >
      <div className="absolute h-80 sm:h-40 inset-0 bg-gradient-to-b from-black to-transparent"></div>

      <picture>
        {/* Imagen para móviles */}
        <source
          srcSet="https://res.cloudinary.com/dwxa2fewv/image/upload/v1740760228/entierromascotas_zz6zyv.jpg"
          media="(max-width: 640px)"
        />
        {/* Imagen para escritorio */}
        <img
          src="https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558891/Group_3_ioqtdx.png"
          alt="Cat Banner"
          className="w-full h-full object-cover"
        />
      </picture>
      <div
        className="absolute left-0 sm:top-1/2 top-48 transform -translate-y-1/2 text-white 
        p-8 sm:p-20 md:p-40 lg:p-80 sm:text-left"
      >
        <p className="text-[40px] sm:text-5xl md:text-6xl font-light">
          Tu mascota.
        </p>
        <h1 className="text-[45px]  sm:text-5xl md:text-6xl font-bold">
          Para siempre.
        </h1>
      </div>
    </section>
  );
};

export default CatBanner;
