const DogBanner = () => {
  return (
    <section
      id="CatBanner"
      className="w-full h-[600px] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dwxa2fewv/image/upload/v1739558891/Group_6_vpmt4z.png')",
      }}
    >
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-8 sm:p-20 md:p-40 lg:p-80"
      >
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
          Un recuerdo
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold">
          eterno.
        </h1>
      </div>
    </section>
  );
};

export default DogBanner;