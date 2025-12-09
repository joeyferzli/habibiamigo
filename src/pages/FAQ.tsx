import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "[Shipping question placeholder]",
    answer: "[Answer about shipping times, costs, and delivery regions]",
  },
  {
    question: "[Returns question placeholder]",
    answer: "[Answer about return policy, exchange process, and refund timeline]",
  },
  {
    question: "[Custom design question placeholder]",
    answer: "[Answer about whether custom designs are accepted and how to request them]",
  },
  {
    question: "[Sizing question placeholder]",
    answer: "[Answer about sizing, fit, and how to choose the right size]",
  },
  {
    question: "[Materials question placeholder]",
    answer: "[Answer about the quality, materials, and sustainability of the products]",
  },
  {
    question: "[Are you really two friends? placeholder]",
    answer: "[Fun answer confirming the story of two friends creating T-shirts together]",
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="font-display text-display-xl text-foreground mb-8 opacity-0 animate-fade-up">
              FAQ
            </h1>
            <p className="text-xl text-muted-foreground opacity-0 animate-fade-up delay-100">
              [Subheading placeholder — got questions? We've got answers]
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border px-8 opacity-0 animate-fade-up rounded-sm"
                  style={{ animationDelay: `${(index + 2) * 75}ms` }}
                >
                  <AccordionTrigger className="text-left font-display text-lg tracking-wider text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
