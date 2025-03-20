import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué es Pawwer y qué servicios ofrece para mascotas?",
    answer: "Pawwner ofrece un servicio de entierro para mascotas, brindando una despedida digna. Llevamos un ataúd ecológico a tu hogar, cavamos la tumba en tu jardín y te damos un instructivo con una ceremonia opcional, además de una semilla para plantar un árbol en su honor",
  },
  {
    question: "¿Cómo contratar el servicio de entierro para perros y gatos?",
    answer: "Podés contratar el servicio por nuestra web, WhatsApp o teléfono. Solo necesitamos tu dirección, fecha y hora deseadas, y si hay disponibilidad, coordinamos la visita.",
  },
  {
    question: "¿Cuánto dura el proceso de entierro de mi mascota en casa?",
    answer: "El proceso dura entre 45 y 90 minutos, según el tamaño de la mascota y el tipo de suelo. Cavamos la tumba mientras la familia puede realizar la ceremonia autoguiada.",
  },
  {
    question: "¿Qué incluye el servicio de entierro para mascotas?",
    answer: "El servicio incluye un ataúd biodegradable, la excavación, un texto de despedida y una semilla para plantar un árbol en memoria de tu mascota.",
  },
  {
    question: "¿Puedo elegir la semilla del árbol que se planta junto a mi perro o gato?",
    answer: "Sí, podés elegir entre diferentes tipos de semillas según tu preferencia y el clima de tu jardín",
  },
  {
    question: "¿Qué tipo de ataúd se usa para el entierro de perros y gatos?",
    answer: "Usamos ataúdes de cartón ecológico y biodegradable, diseñados para facilitar la descomposición. Tenemos dos modelos según el tamaño de la mascota.",
  },
  {
    question: "¿Ofrecen servicios de cremación para mascotas?",
    answer: "No ofrecemos cremación, pero podemos recomendarte proveedores de confianza.",
  },
  {
    question: "¿Qué hago si no tengo jardín y quiero despedir a mi mascota de una manera especial?",
    answer: "El servicio es solo para clientes con jardín. Es importante verificar que el suelo sea apto para excavar.",
  },
  {
    question: "¿Cuánto cuesta el servicio de entierro para perros y gatos?",
    answer: "El precio varía según el tamaño de la mascota y la ubicación. Contactanos y te damos un presupuesto sin compromiso.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Preguntas Frecuentes
        </h2>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;