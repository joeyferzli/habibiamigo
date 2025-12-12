import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import DesignCard from "@/components/DesignCard";

import secretlyLatina1 from "@/assets/designs/secretly-latina-1.jpeg";
import secretlyLatina2 from "@/assets/designs/secretly-latina-2.jpeg";
import secretlyLatina3 from "@/assets/designs/secretly-latina-3.jpeg";
import secretlyLatina4 from "@/assets/designs/secretly-latina-4.jpeg";
import secretlyLatina5 from "@/assets/designs/secretly-latina-5.jpeg";
import secretlyLatina6 from "@/assets/designs/secretly-latina-6.jpeg";

const SHOP_URL = "https://habibi-amigo.printify.me";

const featuredDesigns = [
  { 
    name: "Secretly In Love With Every Latina Here", 
    description: "A tribute to the latinas",
    images: [secretlyLatina1, secretlyLatina2, secretlyLatina3, secretlyLatina4, secretlyLatina5, secretlyLatina6]
  },
  { name: "[Design Name Placeholder]", description: "[One-line description placeholder]" },
  { name: "[Design Name Placeholder]", description: "[One-line description placeholder]" },
  { name: "[Design Name Placeholder]", description: "[One-line description placeholder]" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Full Width Video Banner */}
      <section className="min-h-screen relative p-6 lg:p-12">
        {/* Video Background with Border */}
        <div className="absolute inset-6 lg:inset-12 border-2 border-border overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-bg.mov" type="video/quicktime" />
          </video>
          
          {/* Overlay for button visibility */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Shop Now Button - Bottom Left */}
        <div className="absolute bottom-12 lg:bottom-20 left-12 lg:left-20">
          <Button variant="premium" size="xl" asChild className="opacity-0 animate-fade-up">
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
              Shop Now
            </a>
          </Button>
        </div>
      </section>

      {/* Brand Intro Section - 50/50 Layout */}
      <section className="py-32 bg-sand">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="opacity-0 animate-fade-up">
              <div className="aspect-square bg-oatmeal flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-24 h-24 mx-auto mb-4 border-2 border-dashed border-taupe/50 flex items-center justify-center">
                    <span className="text-taupe/60 text-xs uppercase tracking-wider">Image</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">[Brand image placeholder]</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="opacity-0 animate-fade-up delay-200">
              <h2 className="font-display text-display-md text-foreground mb-8">
                [HEADER PLACEHOLDER]
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                [Write a paragraph explaining the brand — two friends, one Lebanese and one Spanish, 
                creating fun T-shirts made by friends for friends. Describe the origin story, 
                the shared humor, and what makes Habibi Amigo unique.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Designs Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <h2 className="font-display text-display-lg text-foreground mb-6 opacity-0 animate-fade-up">
              FEATURED DESIGNS
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl opacity-0 animate-fade-up delay-100">
              [Subheading placeholder — describe the collection style]
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {featuredDesigns.map((design, index) => (
              <div
                key={index}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <DesignCard name={design.name} description={design.description} images={design.images} />
              </div>
            ))}
          </div>

          <div className="opacity-0 animate-fade-up delay-600">
            <Button variant="outline" size="lg" asChild>
              <Link to="/designs">View All Designs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Habibi Amigo Vibe */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="font-display text-display-lg text-foreground mb-10 opacity-0 animate-fade-up">
              [THE HABIBI AMIGO VIBE HEADLINE]
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed mb-16 opacity-0 animate-fade-up delay-100">
              [Write a larger paragraph about the brand philosophy — inside jokes turned into wearable art, 
              friendship that crosses cultures, humor that connects people. Describe the creative process, 
              the inspiration behind designs, and what wearing Habibi Amigo means.]
            </p>
          </div>

          {/* Large Image Placeholder */}
          <div className="opacity-0 animate-fade-up delay-200">
            <div className="aspect-[21/9] bg-sand flex items-center justify-center">
              <div className="text-center p-12">
                <div className="w-32 h-16 mx-auto mb-4 border-2 border-dashed border-taupe/50 flex items-center justify-center">
                  <span className="text-taupe/60 text-xs uppercase tracking-wider">Wide Image</span>
                </div>
                <p className="text-sm text-muted-foreground italic">[Oversized image placeholder]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
