import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import DesignCard from "@/components/DesignCard";
import FriendshipCollage from "@/components/FriendshipCollage";
import { Design } from "@/types/design";

// Secretly Latina - All 4 color variants
import secretlyLatinaWhite1 from "@/assets/designs/secretly-latina-white-1.jpg";
import secretlyLatinaWhite2 from "@/assets/designs/secretly-latina-white-2.jpg";
import secretlyLatinaWhite3 from "@/assets/designs/secretly-latina-white-3.jpg";
import secretlyLatinaWhite4 from "@/assets/designs/secretly-latina-white-4.jpg";
import secretlyLatinaWhite5 from "@/assets/designs/secretly-latina-white-5.jpg";
import secretlyLatinaWhite6 from "@/assets/designs/secretly-latina-white-6.jpg";
import secretlyLatinaBlack1 from "@/assets/designs/secretly-latina-black-1.jpg";
import secretlyLatinaBlack2 from "@/assets/designs/secretly-latina-black-2.jpg";
import secretlyLatinaBlack3 from "@/assets/designs/secretly-latina-black-3.jpg";
import secretlyLatinaBlack4 from "@/assets/designs/secretly-latina-black-4.jpg";
import secretlyLatinaBlack5 from "@/assets/designs/secretly-latina-black-5.jpg";
import secretlyLatinaBlack6 from "@/assets/designs/secretly-latina-black-6.jpg";
import secretlyLatinaNavy1 from "@/assets/designs/secretly-latina-navy-1.jpg";
import secretlyLatinaNavy2 from "@/assets/designs/secretly-latina-navy-2.jpg";
import secretlyLatinaNavy3 from "@/assets/designs/secretly-latina-navy-3.jpg";
import secretlyLatinaNavy4 from "@/assets/designs/secretly-latina-navy-4.jpg";
import secretlyLatinaNavy5 from "@/assets/designs/secretly-latina-navy-5.jpg";
import secretlyLatinaNavy6 from "@/assets/designs/secretly-latina-navy-6.jpg";

// Dress Spanish - All 4 color variants
import dressSpanishWhite1 from "@/assets/designs/dress-spanish-white-1.jpg";
import dressSpanishWhite2 from "@/assets/designs/dress-spanish-white-2.jpg";
import dressSpanishWhite3 from "@/assets/designs/dress-spanish-white-3.jpg";
import dressSpanishWhite4 from "@/assets/designs/dress-spanish-white-4.jpg";
import dressSpanishWhite5 from "@/assets/designs/dress-spanish-white-5.jpg";
import dressSpanishWhite6 from "@/assets/designs/dress-spanish-white-6.jpg";
import dressSpanishBlack1 from "@/assets/designs/dress-spanish-black-1.jpg";
import dressSpanishBlack2 from "@/assets/designs/dress-spanish-black-2.jpg";
import dressSpanishBlack3 from "@/assets/designs/dress-spanish-black-3.jpg";
import dressSpanishBlack4 from "@/assets/designs/dress-spanish-black-4.jpg";
import dressSpanishBlack5 from "@/assets/designs/dress-spanish-black-5.jpg";
import dressSpanishBlack6 from "@/assets/designs/dress-spanish-black-6.jpg";
import dressSpanishNavy1 from "@/assets/designs/dress-spanish-navy-1.jpg";
import dressSpanishNavy2 from "@/assets/designs/dress-spanish-navy-2.jpg";
import dressSpanishNavy3 from "@/assets/designs/dress-spanish-navy-3.jpg";
import dressSpanishNavy4 from "@/assets/designs/dress-spanish-navy-4.jpg";
import dressSpanishNavy5 from "@/assets/designs/dress-spanish-navy-5.jpg";
import dressSpanishNavy6 from "@/assets/designs/dress-spanish-navy-6.jpg";
// Tequila - White and Black variants
import tequilaWhite1 from "@/assets/designs/tequila-white-1.jpg";
import tequilaWhite2 from "@/assets/designs/tequila-white-2.jpg";
import tequilaWhite3 from "@/assets/designs/tequila-white-3.jpg";
import tequilaWhite4 from "@/assets/designs/tequila-white-4.jpg";
import tequilaWhite5 from "@/assets/designs/tequila-white-5.jpg";
import tequilaWhite6 from "@/assets/designs/tequila-white-6.jpg";
import tequilaBlack1 from "@/assets/designs/tequila-black-1.jpg";
import tequilaBlack2 from "@/assets/designs/tequila-black-2.jpg";
import tequilaBlack3 from "@/assets/designs/tequila-black-3.jpg";
import tequilaBlack4 from "@/assets/designs/tequila-black-4.jpg";
import tequilaBlack5 from "@/assets/designs/tequila-black-5.jpg";
import tequilaBlack6 from "@/assets/designs/tequila-black-6.jpg";
// Vermut - All 4 color variants
import vermutWhite1 from "@/assets/designs/vermut-white-1.jpg";
import vermutWhite2 from "@/assets/designs/vermut-white-2.jpg";
import vermutWhite3 from "@/assets/designs/vermut-white-3.jpg";
import vermutWhite4 from "@/assets/designs/vermut-white-4.jpg";
import vermutWhite5 from "@/assets/designs/vermut-white-5.jpg";
import vermutWhite6 from "@/assets/designs/vermut-white-6.jpg";
import vermutBlack1 from "@/assets/designs/vermut-black-1.jpg";
import vermutBlack2 from "@/assets/designs/vermut-black-2.jpg";
import vermutBlack3 from "@/assets/designs/vermut-black-3.jpg";
import vermutBlack4 from "@/assets/designs/vermut-black-4.jpg";
import vermutBlack5 from "@/assets/designs/vermut-black-5.jpg";
import vermutBlack6 from "@/assets/designs/vermut-black-6.jpg";
import vermutNavy1 from "@/assets/designs/vermut-navy-1.jpg";
import vermutNavy2 from "@/assets/designs/vermut-navy-2.jpg";
import vermutNavy3 from "@/assets/designs/vermut-navy-3.jpg";
import vermutNavy4 from "@/assets/designs/vermut-navy-4.jpg";
import vermutNavy5 from "@/assets/designs/vermut-navy-5.jpg";
import vermutNavy6 from "@/assets/designs/vermut-navy-6.jpg";

const SHOP_URL = "https://habibi-amigo.printify.me";

const featuredDesigns: Design[] = [
  {
    id: "secretly-latina",
    name: "Secretly In Love With Every Latina Here",
    caption: "A tribute to the latinas",
    description: "A bold statement piece celebrating the beauty and culture of Latinas everywhere.",
    colorVariations: [
      {
        name: "White",
        swatchColor: "#f5f5f5",
        images: [secretlyLatinaWhite6, secretlyLatinaWhite5, secretlyLatinaWhite1, secretlyLatinaWhite4, secretlyLatinaWhite3, secretlyLatinaWhite2],
      },
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [secretlyLatinaBlack6, secretlyLatinaBlack5, secretlyLatinaBlack1, secretlyLatinaBlack4, secretlyLatinaBlack3, secretlyLatinaBlack2],
      },
      {
        name: "Navy",
        swatchColor: "#1e3a5f",
        images: [secretlyLatinaNavy6, secretlyLatinaNavy5, secretlyLatinaNavy1, secretlyLatinaNavy4, secretlyLatinaNavy3, secretlyLatinaNavy2],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "dress-spanish",
    name: "Dress Spanish, Eat Lebanese, Kiss Both",
    caption: "The best of both worlds",
    description: "Embrace the Mediterranean lifestyle with this fusion-inspired design.",
    colorVariations: [
      { name: "White", swatchColor: "#f5f5f5", images: [dressSpanishWhite6, dressSpanishWhite1, dressSpanishWhite2, dressSpanishWhite3, dressSpanishWhite4, dressSpanishWhite5] },
      { name: "Black", swatchColor: "#1a1a1a", images: [dressSpanishBlack6, dressSpanishBlack1, dressSpanishBlack2, dressSpanishBlack3, dressSpanishBlack4, dressSpanishBlack5] },
      { name: "Navy", swatchColor: "#1e3a5f", images: [dressSpanishNavy6, dressSpanishNavy1, dressSpanishNavy2, dressSpanishNavy3, dressSpanishNavy4, dressSpanishNavy5] },
    ],
    defaultColorIndex: 0,
    availableSizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "tequila",
    name: "1 Tequila, 2 Tequilas, 3 Tekilsas... Floor",
    caption: "Count your way down",
    description: "The perfect party companion for those unforgettable nights.",
    colorVariations: [
      { name: "White", swatchColor: "#ffffff", images: [tequilaWhite1, tequilaWhite2, tequilaWhite3, tequilaWhite4, tequilaWhite5, tequilaWhite6] },
      { name: "Black", swatchColor: "#1a1a1a", images: [tequilaBlack1, tequilaBlack2, tequilaBlack3, tequilaBlack4, tequilaBlack5, tequilaBlack6] },
    ],
    defaultColorIndex: 0,
    availableSizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "vermut",
    name: "Eres La Aceituna De Mi Vermut",
    caption: "You're the olive to my vermouth",
    description: "A romantic Spanish phrase for the aperitivo lovers.",
    colorVariations: [
      { name: "Navy", swatchColor: "#1e3a5f", images: [vermutNavy1, vermutNavy2, vermutNavy3, vermutNavy4, vermutNavy5, vermutNavy6] },
      { name: "White", swatchColor: "#f5f5f5", images: [vermutWhite1, vermutWhite2, vermutWhite3, vermutWhite4, vermutWhite5, vermutWhite6] },
      { name: "Black", swatchColor: "#1a1a1a", images: [vermutBlack1, vermutBlack2, vermutBlack3, vermutBlack4, vermutBlack5, vermutBlack6] },
    ],
    defaultColorIndex: 0,
    availableSizes: ["S", "M", "L", "XL"],
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
