import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import DesignCard from "@/components/DesignCard";

const SHOP_URL = "https://habibi-amigo.printify.me";

const featuredDesigns = [
  {
    name: "Design name",
    description: "One line about this design",
  },
  {
    name: "Design name",
    description: "One line about this design",
  },
  {
    name: "Design name",
    description: "One line about this design",
  },
  {
    name: "Design name",
    description: "One line about this design",
  },
];

const Index = () => {
  const scrollToAbout = () => {
    document.getElementById("why-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-sand/20 to-background" />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              Main headline about Habibi Amigo and fun Tshirts
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
              Short sentence describing the brand vibe and that shirts are made by two friends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <Button variant="hero" size="lg" asChild>
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                  Shop Now
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToAbout}>
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </section>

      {/* Why Habibi Amigo Section */}
      <section id="why-section" className="py-24 bg-sand/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Why Habibi Amigo
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Write a short paragraph about Lebanese and Spanish friends creating Tshirts by friends for friends
            </p>
          </div>
        </div>
      </section>

      {/* Featured Designs Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Designs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredDesigns.map((design, index) => (
              <div
                key={index}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <DesignCard name={design.name} description={design.description} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/designs">View All Designs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Vibe Section */}
      <section className="py-24 bg-accent/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Friends, Jokes, And T Shirts
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Write a short story about inside jokes, friendship, and turning them into wearable designs
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
