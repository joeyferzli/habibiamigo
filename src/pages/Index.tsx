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
import secretlyLatinaLavender1 from "@/assets/designs/secretly-latina-lavender-1.jpg";
import secretlyLatinaLavender2 from "@/assets/designs/secretly-latina-lavender-2.jpg";
import secretlyLatinaLavender3 from "@/assets/designs/secretly-latina-lavender-3.jpg";
import secretlyLatinaLavender4 from "@/assets/designs/secretly-latina-lavender-4.jpg";
import secretlyLatinaLavender5 from "@/assets/designs/secretly-latina-lavender-5.jpg";
import secretlyLatinaLavender6 from "@/assets/designs/secretly-latina-lavender-6.jpg";

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
      {
        name: "Lavender Blue",
        swatchColor: "#7b9cb8",
        images: [secretlyLatinaLavender1, secretlyLatinaLavender2, secretlyLatinaLavender3, secretlyLatinaLavender4, secretlyLatinaLavender5, secretlyLatinaLavender6],
      },
    ],
    defaultColorIndex: 3,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
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
      { name: "Lavender Blue", swatchColor: "#7b9cb8", images: [dressSpanishLavender6, dressSpanishLavender1, dressSpanishLavender2, dressSpanishLavender3, dressSpanishLavender4, dressSpanishLavender5] },
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
