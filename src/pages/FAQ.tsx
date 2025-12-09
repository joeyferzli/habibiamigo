import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Shipping question here",
    answer: "Answer about shipping times",
  },
  {
    question: "Returns question here",
    answer: "Answer about return or exchange policy",
  },
  {
    question: "Custom design question here",
    answer: "Answer about whether you accept custom designs",
  },
  {
    question: "Question about whether you are really two friends",
    answer: "Fun answer that confirms the story",
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-sand/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
              FAQ
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
              Got questions? We've got answers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-2xl border border-border px-6 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary py-6 hover:no-underline">
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
