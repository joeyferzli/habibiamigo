import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import DesignCard from "@/components/DesignCard";
import FriendshipCollage from "@/components/FriendshipCollage";
import { Design } from "@/types/design";

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

const SHOP_URL = "https://habibi-amigo.printify.me";

const featuredDesigns: Design[] = [
  {
    id: "secretly-latina",
    name: "Secretly In Love With Every Latina Here",
    caption: "A tribute to the latinas",
    description: "A bold statement piece celebrating the beauty and culture of Latinas everywhere.",
    colorVariations: [
      { name: "Black", swatchColor: "#1a1a1a", images: [secretlyLatina1, secretlyLatina2] },
      { name: "White", swatchColor: "#f5f5f5", images: [secretlyLatina3, secretlyLatina4] },
      { name: "Beige", swatchColor: "#d4c4a8", images: [secretlyLatina5, secretlyLatina6] },
    ],
    defaultColorIndex: 0,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "dress-spanish",
    name: "Dress Spanish, Eat Lebanese, Kiss Both",
    caption: "The best of both worlds",
    description: "Embrace the Mediterranean lifestyle with this fusion-inspired design.",
    colorVariations: [
      { name: "Natural", swatchColor: "#e8dcc8", images: [dressSpanish1, dressSpanish2] },
      { name: "Black", swatchColor: "#1a1a1a", images: [dressSpanish3, dressSpanish4] },
      { name: "Sand", swatchColor: "#c4a77d", images: [dressSpanish5] },
    ],
    defaultColorIndex: 0,
    availableSizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "tequila",
    name: "1 Tequila, 2 Tequilas, 3 Tekilsas... Floor",
    caption: "Count your way down",
    description: "The perfect party companion for those unforgettable nights.",
    colorVariations: [
      { name: "White", swatchColor: "#ffffff", images: [tequila1, tequila2] },
      { name: "Black", swatchColor: "#1a1a1a", images: [tequila3, tequila4] },
      { name: "Olive", swatchColor: "#6b7c4e", images: [tequila5] },
    ],
    defaultColorIndex: 0,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "vermut",
    name: "Eres La Aceituna De Mi Vermut",
    caption: "You're the olive to my vermouth",
    description: "A romantic Spanish phrase for the aperitivo lovers.",
    colorVariations: [
      { name: "Cream", swatchColor: "#f5f0e1", images: [vermut1, vermut2] },
      { name: "Terracotta", swatchColor: "#c65d3b", images: [vermut3, vermut4] },
      { name: "Navy", swatchColor: "#1e3a5f", images: [vermut5] },
    ],
    defaultColorIndex: 0,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Full Width Video Banner */}
      <section className="aspect-video md:aspect-auto md:min-h-screen relative">
        {/* Video Background */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/hero-bg.mp4?v=4" type="video/mp4" />
        </video>

        {/* Overlay for button visibility */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Shop Now Button - Bottom Left */}
        <div className="absolute bottom-6 left-6 lg:bottom-20 lg:left-20">
          <Button variant="premium" size="default" className="md:text-lg md:px-10 md:py-6" asChild>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
              Shop Now
            </a>
          </Button>
        </div>
      </section>

      {/* Featured Designs Section */}
      <section className="py-32 bg-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <h2 className="font-display text-display-lg text-foreground mb-6 opacity-0 animate-fade-up">
              FEATURED DESIGNS
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl opacity-0 animate-fade-up delay-100">
              Browse Habibi Amigo's Latest Drops
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {featuredDesigns.map((design, index) => (
              <div
                key={design.id}
                className="opacity-0 animate-fade-up"
                style={{
                  animationDelay: `${(index + 2) * 100}ms`,
                }}
              >
                <DesignCard design={design} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="premium" size="xl" asChild>
              <Link to="/designs">View All Designs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Friendship Story Section */}
      <FriendshipCollage />
    </Layout>
  );
};

export default Index;
