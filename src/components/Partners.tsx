import { Button } from "@/components/ui/button";

const Partners = () => {
  return (
    <section className="sm:flex flex-col items-center justify-center py-20 bg-muted sm:text-center p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-4xl font-bold mb-8 mx-auto">
          Despedilo con amor, sin complicaciones
        </h2>
        <h3 className="max-w-4xl text-[22px] mx-auto font-light">
          Nos contactás por WhatsApp y en el mismo día llegamos a tu casa para
          organizar todo. Un servicio rápido y respetuoso, para que puedas
          despedir a tu mascota con tranquilidad y sin preocupaciones.
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <a
          href="https://wa.me/+541168961470"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-[#000000] hover:bg-[#444444] text-white ml-4 px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 text-xl sm:text-lg lg:text-xl rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold"
          >
            Contactanos
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Partners;