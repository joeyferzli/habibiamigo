import { useState } from "react";
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

import vermut1 from "@/assets/designs/vermut-1.jpeg";
import vermut2 from "@/assets/designs/vermut-2.jpeg";
import vermut3 from "@/assets/designs/vermut-3.jpeg";
import vermut4 from "@/assets/designs/vermut-4.jpeg";
import vermut5 from "@/assets/designs/vermut-5.jpeg";

import exFan1 from "@/assets/designs/ex-fan-1.jpeg";
import exFan2 from "@/assets/designs/ex-fan-2.jpeg";
import exFan3 from "@/assets/designs/ex-fan-3.jpeg";
import exFan4 from "@/assets/designs/ex-fan-4.jpeg";
import exFan5 from "@/assets/designs/ex-fan-5.jpeg";

import stayCool1 from "@/assets/designs/stay-cool-1.jpeg";
import stayCool2 from "@/assets/designs/stay-cool-2.jpeg";
import stayCool3 from "@/assets/designs/stay-cool-3.jpeg";
import stayCool4 from "@/assets/designs/stay-cool-4.jpeg";

import noGame1 from "@/assets/designs/no-game-1.jpeg";
import noGame2 from "@/assets/designs/no-game-2.jpeg";
import noGame3 from "@/assets/designs/no-game-3.jpeg";
import noGame4 from "@/assets/designs/no-game-4.jpeg";
import noGame5 from "@/assets/designs/no-game-5.jpeg";
import noGame6 from "@/assets/designs/no-game-6.jpeg";

import iLied1 from "@/assets/designs/i-lied-1.jpeg";
import iLied2 from "@/assets/designs/i-lied-2.jpeg";
import iLied3 from "@/assets/designs/i-lied-3.jpeg";
import iLied4 from "@/assets/designs/i-lied-4.jpeg";
import iLied5 from "@/assets/designs/i-lied-5.jpeg";

const SHOP_URL = "https://habibi-amigo.printify.me";

const designs = [
  {
    name: "Secretly In Love With Every Latina Here",
    description: "A tribute to the latinas",
    images: [secretlyLatina1, secretlyLatina2, secretlyLatina3, secretlyLatina4, secretlyLatina5, secretlyLatina6],
    primaryIndex: 1,
    inStock: true,
  },
  {
    name: "Dress Spanish, Eat Lebanese, Kiss Both",
    description: "The best of both worlds",
    images: [dressSpanish1, dressSpanish2, dressSpanish3, dressSpanish4, dressSpanish5],
    primaryIndex: 0,
    inStock: true,
  },
  {
    name: "1 Tequila, 2 Tequilas, 3 Tekilsas... Floor",
    description: "Count your way down",
    images: [tequila1, tequila2, tequila3, tequila4, tequila5],
    primaryIndex: 0,
    inStock: true,
  },
  {
    name: "Eres La Aceituna De Mi Vermut",
    description: "You're the olive to my vermouth",
    images: [vermut1, vermut2, vermut3, vermut4, vermut5],
    primaryIndex: 0,
    inStock: true,
  },
  {
    name: "My Ex Is My Biggest Fan",
    description: "Still watching your every move",
    images: [exFan1, exFan2, exFan3, exFan4, exFan5],
    primaryIndex: 0,
    inStock: true,
  },
  {
    name: "Stay Cool, Stay Iconic",
    description: "Channel your inner legend",
    images: [stayCool1, stayCool2, stayCool3, stayCool4],
    primaryIndex: 0,
    inStock: true,
  },
  {
    name: "I Like You But I Got No Game",
    description: "Honest confession vibes",
    images: [noGame1, noGame2, noGame3, noGame4, noGame5, noGame6],
    primaryIndex: 0,
    inStock: true,
  },
  {
    name: "I Lied. I Love House Music",
    description: "For the rave lovers",
    images: [iLied1, iLied2, iLied3, iLied4, iLied5],
    primaryIndex: 0,
    inStock: true,
  },
];
const Designs = () => {
  const [stockFilter, setStockFilter] = useState<"all" | "in" | "out">("all");

  const filteredDesigns = designs.filter((design) => {
    if (stockFilter === "all") return true;
    if (stockFilter === "in") return design.inStock;
    if (stockFilter === "out") return !design.inStock;
    return true;
  });

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
          {/* Filter */}
          <div className="flex gap-2 mb-10">
            <button
              onClick={() => setStockFilter("all")}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded transition-colors ${
                stockFilter === "all"
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setStockFilter("in")}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded transition-colors ${
                stockFilter === "in"
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              In Stock
            </button>
            <button
              onClick={() => setStockFilter("out")}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded transition-colors ${
                stockFilter === "out"
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Out of Stock
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-20">
            {filteredDesigns.map((design, index) => (
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
                  inStock={design.inStock}
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
