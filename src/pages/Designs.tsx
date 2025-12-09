import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import DesignCard from "@/components/DesignCard";

const SHOP_URL = "https://habibi-amigo.printify.me";

const designs = [
  { name: "Design name", description: "One sentence describing the design or vibe" },
  { name: "Design name", description: "One sentence describing the design or vibe" },
  { name: "Design name", description: "One sentence describing the design or vibe" },
  { name: "Design name", description: "One sentence describing the design or vibe" },
  { name: "Design name", description: "One sentence describing the design or vibe" },
  { name: "Design name", description: "One sentence describing the design or vibe" },
  { name: "Design name", description: "One sentence describing the design or vibe" },
  { name: "Design name", description: "One sentence describing the design or vibe" },
];

const Designs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-sand/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
              The Habibi Amigo Collection
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
              Write a one line intro about the type of designs you create
            </p>
          </div>
        </div>
      </section>

      {/* Designs Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {designs.map((design, index) => (
              <div
                key={index}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
              >
                <DesignCard name={design.name} description={design.description} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
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
