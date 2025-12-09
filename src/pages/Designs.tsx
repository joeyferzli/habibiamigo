import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import DesignCard from "@/components/DesignCard";

const SHOP_URL = "https://habibi-amigo.printify.me";

const designs = [
  { name: "[Design Name Placeholder]", description: "[Short caption placeholder]" },
  { name: "[Design Name Placeholder]", description: "[Short caption placeholder]" },
  { name: "[Design Name Placeholder]", description: "[Short caption placeholder]" },
  { name: "[Design Name Placeholder]", description: "[Short caption placeholder]" },
  { name: "[Design Name Placeholder]", description: "[Short caption placeholder]" },
  { name: "[Design Name Placeholder]", description: "[Short caption placeholder]" },
  { name: "[Design Name Placeholder]", description: "[Short caption placeholder]" },
  { name: "[Design Name Placeholder]", description: "[Short caption placeholder]" },
];

const Designs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="font-display text-display-xl text-foreground mb-8 opacity-0 animate-fade-up">
              THE HABIBI AMIGO COLLECTION
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-up delay-100">
              [Subheader placeholder — describe the types of designs, the style, the vibe of the collection]
            </p>
          </div>
        </div>
      </section>

      {/* Designs Grid - Portfolio Style */}
      <section className="py-16 pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-20">
            {designs.map((design, index) => (
              <div
                key={index}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <DesignCard name={design.name} description={design.description} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="premium" size="xl" asChild>
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                Shop All Designs
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Designs;
