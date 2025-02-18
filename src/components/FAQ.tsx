import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué servicios de desarrollo web ofrecen?",
    answer: "Ofrecemos desarrollo web full-stack, diseño UI/UX, optimización SEO y mantenimiento web.",
  },
  {
    question: "¿Cuál es el tiempo promedio de desarrollo?",
    answer: "El tiempo varía según el proyecto, pero típicamente entre 4-8 semanas para sitios web completos.",
  },
  {
    question: "¿Ofrecen soporte post-lanzamiento?",
    answer: "Sí, ofrecemos planes de mantenimiento y soporte continuo para todos nuestros proyectos.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Preguntas Frecuentes
        </h2>
        <div className="max-w-3xl mx-auto">
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