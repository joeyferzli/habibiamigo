import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import DesignCard from "@/components/DesignCard";
import { Design } from "@/types/design";

// ============================================
// DESIGN IMAGES - Import all images here
// ============================================

// Secretly Latina - White variant
import secretlyLatinaWhite1 from "@/assets/designs/secretly-latina-white-1.jpg";
import secretlyLatinaWhite2 from "@/assets/designs/secretly-latina-white-2.jpg";
import secretlyLatinaWhite3 from "@/assets/designs/secretly-latina-white-3.jpg";
import secretlyLatinaWhite4 from "@/assets/designs/secretly-latina-white-4.jpg";
import secretlyLatinaWhite5 from "@/assets/designs/secretly-latina-white-5.jpg";
import secretlyLatinaWhite6 from "@/assets/designs/secretly-latina-white-6.jpg";

// Secretly Latina - Black variant
import secretlyLatinaBlack1 from "@/assets/designs/secretly-latina-black-1.jpg";
import secretlyLatinaBlack2 from "@/assets/designs/secretly-latina-black-2.jpg";
import secretlyLatinaBlack3 from "@/assets/designs/secretly-latina-black-3.jpg";
import secretlyLatinaBlack4 from "@/assets/designs/secretly-latina-black-4.jpg";
import secretlyLatinaBlack5 from "@/assets/designs/secretly-latina-black-5.jpg";
import secretlyLatinaBlack6 from "@/assets/designs/secretly-latina-black-6.jpg";

// Secretly Latina - Navy variant
import secretlyLatinaNavy1 from "@/assets/designs/secretly-latina-navy-1.jpg";
import secretlyLatinaNavy2 from "@/assets/designs/secretly-latina-navy-2.jpg";
import secretlyLatinaNavy3 from "@/assets/designs/secretly-latina-navy-3.jpg";
import secretlyLatinaNavy4 from "@/assets/designs/secretly-latina-navy-4.jpg";
import secretlyLatinaNavy5 from "@/assets/designs/secretly-latina-navy-5.jpg";
import secretlyLatinaNavy6 from "@/assets/designs/secretly-latina-navy-6.jpg";

// Secretly Latina - Lavender Blue variant
import secretlyLatinaLavender1 from "@/assets/designs/secretly-latina-lavender-1.jpg";
import secretlyLatinaLavender2 from "@/assets/designs/secretly-latina-lavender-2.jpg";
import secretlyLatinaLavender3 from "@/assets/designs/secretly-latina-lavender-3.jpg";
import secretlyLatinaLavender4 from "@/assets/designs/secretly-latina-lavender-4.jpg";
import secretlyLatinaLavender5 from "@/assets/designs/secretly-latina-lavender-5.jpg";
import secretlyLatinaLavender6 from "@/assets/designs/secretly-latina-lavender-6.jpg";

// Dress Spanish - White variant
import dressSpanishWhite1 from "@/assets/designs/dress-spanish-white-1.jpg";
import dressSpanishWhite2 from "@/assets/designs/dress-spanish-white-2.jpg";
import dressSpanishWhite3 from "@/assets/designs/dress-spanish-white-3.jpg";
import dressSpanishWhite4 from "@/assets/designs/dress-spanish-white-4.jpg";
import dressSpanishWhite5 from "@/assets/designs/dress-spanish-white-5.jpg";
import dressSpanishWhite6 from "@/assets/designs/dress-spanish-white-6.jpg";

// Dress Spanish - Black variant
import dressSpanishBlack1 from "@/assets/designs/dress-spanish-black-1.jpg";
import dressSpanishBlack2 from "@/assets/designs/dress-spanish-black-2.jpg";
import dressSpanishBlack3 from "@/assets/designs/dress-spanish-black-3.jpg";
import dressSpanishBlack4 from "@/assets/designs/dress-spanish-black-4.jpg";
import dressSpanishBlack5 from "@/assets/designs/dress-spanish-black-5.jpg";
import dressSpanishBlack6 from "@/assets/designs/dress-spanish-black-6.jpg";

// Dress Spanish - Navy variant
import dressSpanishNavy1 from "@/assets/designs/dress-spanish-navy-1.jpg";
import dressSpanishNavy2 from "@/assets/designs/dress-spanish-navy-2.jpg";
import dressSpanishNavy3 from "@/assets/designs/dress-spanish-navy-3.jpg";
import dressSpanishNavy4 from "@/assets/designs/dress-spanish-navy-4.jpg";
import dressSpanishNavy5 from "@/assets/designs/dress-spanish-navy-5.jpg";
import dressSpanishNavy6 from "@/assets/designs/dress-spanish-navy-6.jpg";

// Dress Spanish - Lavender Blue variant
import dressSpanishLavender1 from "@/assets/designs/dress-spanish-lavender-1.jpg";
import dressSpanishLavender2 from "@/assets/designs/dress-spanish-lavender-2.jpg";
import dressSpanishLavender3 from "@/assets/designs/dress-spanish-lavender-3.jpg";
import dressSpanishLavender4 from "@/assets/designs/dress-spanish-lavender-4.jpg";
import dressSpanishLavender5 from "@/assets/designs/dress-spanish-lavender-5.jpg";
import dressSpanishLavender6 from "@/assets/designs/dress-spanish-lavender-6.jpg";

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

import asap1 from "@/assets/designs/asap-1.jpeg";
import asap2 from "@/assets/designs/asap-2.jpeg";
import asap3 from "@/assets/designs/asap-3.jpeg";
import asap4 from "@/assets/designs/asap-4.jpeg";
import asap5 from "@/assets/designs/asap-5.jpeg";

// ============================================
// SHOP URL - Link to Printify store
// ============================================
const SHOP_URL = "https://habibi-amigo.printify.me";

// ============================================
// DESIGNS DATA - FULLY EDITABLE
// ============================================
// To edit a design:
// - name: Change the display title
// - caption: Short text shown on grid card
// - description: Full text shown in modal
// - colorVariations: Add/remove colors with their images
// - defaultColorIndex: Which color shows by default (0-based)
// - availableSizes: Which sizes are available
// - notes: Optional fit/fabric info
// - inStock: true/false for availability
// ============================================

const designs: Design[] = [
  {
    id: "secretly-latina",
    name: "Secretly In Love With Every Latina Here",
    caption: "A tribute to the latinas",
    description:
      "A bold statement piece celebrating the beauty and culture of Latinas everywhere. Perfect for those who wear their heart on their sleeve.",
    colorVariations: [
      {
        name: "White",
        swatchColor: "#f5f5f5",
        images: [
          secretlyLatinaWhite6,
          secretlyLatinaWhite5,
          secretlyLatinaWhite1,
          secretlyLatinaWhite4,
          secretlyLatinaWhite3,
          secretlyLatinaWhite2,
        ],
      },
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [
          secretlyLatinaBlack6,
          secretlyLatinaBlack5,
          secretlyLatinaBlack1,
          secretlyLatinaBlack4,
          secretlyLatinaBlack3,
          secretlyLatinaBlack2,
        ],
      },
      {
        name: "Navy",
        swatchColor: "#1e3a5f",
        images: [
          secretlyLatinaNavy6,
          secretlyLatinaNavy5,
          secretlyLatinaNavy1,
          secretlyLatinaNavy4,
          secretlyLatinaNavy3,
          secretlyLatinaNavy2,
        ],
      },
      {
        name: "Lavender Blue",
        swatchColor: "#7b9cb8",
        images: [
          secretlyLatinaLavender1,
          secretlyLatinaLavender2,
          secretlyLatinaLavender3,
          secretlyLatinaLavender4,
          secretlyLatinaLavender5,
          secretlyLatinaLavender6,
        ],
      },
    ],
    defaultColorIndex: 3,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    notes: "Unisex fit. True to size. 100% cotton.",
    inStock: true,
  },
  {
    id: "dress-spanish",
    name: "Dress Spanish, Eat Lebanese, Kiss Both",
    caption: "The best of both worlds",
    description:
      "Embrace the Mediterranean lifestyle with this fusion-inspired design. For those who appreciate culture without borders.",
    colorVariations: [
      {
        name: "White",
        swatchColor: "#f5f5f5",
        images: [
          dressSpanishWhite6,
          dressSpanishWhite1,
          dressSpanishWhite2,
          dressSpanishWhite3,
          dressSpanishWhite4,
          dressSpanishWhite5,
        ],
      },
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [
          dressSpanishBlack6,
          dressSpanishBlack1,
          dressSpanishBlack2,
          dressSpanishBlack3,
          dressSpanishBlack4,
          dressSpanishBlack5,
        ],
      },
      {
        name: "Navy",
        swatchColor: "#1e3a5f",
        images: [
          dressSpanishNavy6,
          dressSpanishNavy1,
          dressSpanishNavy2,
          dressSpanishNavy3,
          dressSpanishNavy4,
          dressSpanishNavy5,
        ],
      },
      {
        name: "Lavender Blue",
        swatchColor: "#7b9cb8",
        images: [
          dressSpanishLavender6,
          dressSpanishLavender1,
          dressSpanishLavender2,
          dressSpanishLavender3,
          dressSpanishLavender4,
          dressSpanishLavender5,
        ],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["XS", "S", "M", "L", "XL"],
    notes: "Relaxed fit. Runs slightly large.",
    inStock: true,
  },
  {
    id: "tequila",
    name: "1 Tequila, 2 Tequilas, 3 Tekilsas... Floor",
    caption: "Count your way down",
    description:
      "The perfect party companion. A playful nod to those nights that start with good intentions and end with great stories.",
    colorVariations: [
      {
        name: "White",
        swatchColor: "#ffffff",
        images: [tequila1, tequila2],
      },
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [tequila3, tequila4],
      },
      {
        name: "Olive",
        swatchColor: "#6b7c4e",
        images: [tequila5],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "vermut",
    name: "Eres La Aceituna De Mi Vermut",
    caption: "You're the olive to my vermouth",
    description:
      "A romantic Spanish phrase for the aperitivo lovers. Because every great drink needs its perfect match.",
    colorVariations: [
      {
        name: "Cream",
        swatchColor: "#f5f0e1",
        images: [vermut1, vermut2],
      },
      {
        name: "Terracotta",
        swatchColor: "#c65d3b",
        images: [vermut3, vermut4],
      },
      {
        name: "Navy",
        swatchColor: "#1e3a5f",
        images: [vermut5],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    notes: "Premium cotton blend. Pre-shrunk.",
    inStock: true,
  },
  {
    id: "ex-fan",
    name: "My Ex Is My Biggest Fan",
    caption: "Still watching your every move",
    description:
      "For those who know their worth. A confident reminder that moving on doesn't mean being forgotten.",
    colorVariations: [
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [exFan1, exFan2, exFan3],
      },
      {
        name: "White",
        swatchColor: "#ffffff",
        images: [exFan4, exFan5],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "stay-cool",
    name: "Stay Cool, Stay Iconic",
    caption: "Channel your inner legend",
    description:
      "A minimalist statement for those who let their presence speak louder than words. Effortlessly cool.",
    colorVariations: [
      {
        name: "Off-White",
        swatchColor: "#f8f6f0",
        images: [stayCool1, stayCool2],
      },
      {
        name: "Charcoal",
        swatchColor: "#3d3d3d",
        images: [stayCool3, stayCool4],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    notes: "Oversized fit. Size down for regular fit.",
    inStock: true,
  },
  {
    id: "no-game",
    name: "I Like You But I Got No Game",
    caption: "Honest confession vibes",
    description:
      "Honesty is the best policy. For the charmingly awkward and authentically real among us.",
    colorVariations: [
      {
        name: "Vintage White",
        swatchColor: "#f0ece3",
        images: [noGame1, noGame2],
      },
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [noGame3, noGame4],
      },
      {
        name: "Forest",
        swatchColor: "#2d4a3e",
        images: [noGame5, noGame6],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "i-lied",
    name: "I Lied. I Love House Music",
    caption: "For the rave lovers",
    description:
      "The confession every house head needs to make. Because the bass drop never lies.",
    colorVariations: [
      {
        name: "Black",
        swatchColor: "#0f0f0f",
        images: [iLied1, iLied2, iLied3],
      },
      {
        name: "White",
        swatchColor: "#ffffff",
        images: [iLied4, iLied5],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    notes: "Festival-ready. Lightweight cotton.",
    inStock: true,
  },
  {
    id: "asap",
    name: "My ASAP Stands For Aperol Spritz And Party",
    caption: "Party priorities sorted",
    description:
      "Redefining urgency one spritz at a time. For those whose priority list starts with good vibes.",
    colorVariations: [
      {
        name: "Sunset Orange",
        swatchColor: "#e87a3d",
        images: [asap1, asap2],
      },
      {
        name: "White",
        swatchColor: "#ffffff",
        images: [asap3, asap4],
      },
      {
        name: "Cream",
        swatchColor: "#f5ebe0",
        images: [asap5],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
];

// ============================================
// DESIGNS PAGE COMPONENT
// ============================================

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
      <section className="relative aspect-video md:aspect-auto md:pt-32 md:pb-20 md:min-h-[60vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain md:object-cover"
        >
          <source src="/videos/designs-hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-background/60" />

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-display text-foreground mb-8 opacity-0 animate-fade-up text-3xl md:text-7xl text-left">
              THE HABIBI AMIGO COLLECTION
            </h1>
          </div>
        </div>
      </section>

      {/* Designs Grid */}
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

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-20">
            {filteredDesigns.map((design, index) => (
              <div
                key={design.id}
                className="opacity-0 animate-fade-up"
                style={{
                  animationDelay: `${index * 75}ms`,
                }}
              >
                <DesignCard design={design} />
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
