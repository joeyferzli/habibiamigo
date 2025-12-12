import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import DesignCard from "@/components/DesignCard";

import secretlyLatina1 from "@/assets/designs/secretly-latina-1.jpeg";
import secretlyLatina2 from "@/assets/designs/secretly-latina-2.jpeg";
import secretlyLatina3 from "@/assets/designs/secretly-latina-3.jpeg";
import secretlyLatina4 from "@/assets/designs/secretly-latina-4.jpeg";
import secretlyLatina5 from "@/assets/designs/secretly-latina-5.jpeg";
import secretlyLatina6 from "@/assets/designs/secretly-latina-6.jpeg";

import dressSpanish1 from "@/assets/designs/dress-spanish-1.jpeg";
import dressSpanish2 from "@/assets/designs/dress-spanish-2.jpeg";
import dressSpanish3 from "@/assets/designs/dress-spanish-3.jpeg";
import dressSpanish4 from "@/assets/designs/dress-spanish-4.jpeg";
import dressSpanish5 from "@/assets/designs/dress-spanish-5.jpeg";

import tequila1 from "@/assets/designs/tequila-1.jpeg";
import tequila2 from "@/assets/designs/tequila-2.jpeg";
import tequila3 from "@/assets/designs/tequila-3.jpeg";
import tequila4 from "@/assets/designs/tequila-4.jpeg";
import tequila5 from "@/assets/designs/tequila-5.jpeg";

const SHOP_URL = "https://habibi-amigo.printify.me";

const designs = [
  {
    name: "Secretly In Love With Every Latina Here",
    description: "A tribute to the latinas",
    images: [secretlyLatina1, secretlyLatina2, secretlyLatina3, secretlyLatina4, secretlyLatina5, secretlyLatina6],
    primaryIndex: 1,
  },
  {
    name: "Dress Spanish, Eat Lebanese, Kiss Both",
    description: "The best of both worlds",
    images: [dressSpanish1, dressSpanish2, dressSpanish3, dressSpanish4, dressSpanish5],
    primaryIndex: 0,
  },
  {
    name: "1 Tequila, 2 Tequilas, 3 Tekilsas... Floor",
    description: "Count your way down",
    images: [tequila1, tequila2, tequila3, tequila4, tequila5],
    primaryIndex: 0,
  },
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
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-background/60" />

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-display text-foreground mb-8 opacity-0 animate-fade-up text-7xl text-left">
              THE HABIBI AMIGO COLLECTION
            </h1>
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
                style={{
                  animationDelay: `${index * 75}ms`,
                }}
              >
                <DesignCard
                  name={design.name}
                  description={design.description}
                  images={design.images}
                  primaryIndex={design.primaryIndex}
                />
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
