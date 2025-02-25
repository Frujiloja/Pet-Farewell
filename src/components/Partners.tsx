import { Button } from "@/components/ui/button";

const Partners = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-muted text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 max-w-md mx-auto">
          Despedilo con amor, sin complicaciones
        </h2>
        <h3 className="max-w-3xl mx-auto font-light">
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
            className="bg-[#000000] hover:bg-[#444444] text-white px-8 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold"
          >
            Contactanos
          </Button>
        </a>
      </div>
    </section>
  );
};


export default Partners;
