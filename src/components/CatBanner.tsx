const CatBanner = () => {
  return (
    <section
      id="CatBanner"
      className="w-full h-[600px] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558891/Group_3_ioqtdx.png')",
      }}
    >
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white 
        p-8 sm:p-20 md:p-40 lg:p-80 text-center sm:text-left"
      >
        <p className="text-4xl sm:text-5xl md:text-6xl font-light">Tu mascota.</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Para siempre.</h1>
      </div>
    </section>
  );
};

export default CatBanner;