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
const SHOP_URL = "https://habibi-amigo.printify.me";
const featuredDesigns = [{
  name: "Secretly In Love With Every Latina Here",
  description: "A tribute to the latinas",
  images: [secretlyLatina1, secretlyLatina2, secretlyLatina3, secretlyLatina4, secretlyLatina5, secretlyLatina6],
  primaryIndex: 1
}, {
  name: "Dress Spanish, Eat Lebanese, Kiss Both",
  description: "The best of both worlds",
  images: [dressSpanish1, dressSpanish2, dressSpanish3, dressSpanish4, dressSpanish5],
  primaryIndex: 0
}, {
  name: "1 Tequila, 2 Tequilas, 3 Tekilsas... Floor",
  description: "Count your way down",
  images: [tequila1, tequila2, tequila3, tequila4, tequila5],
  primaryIndex: 0
}, {
  name: "Eres La Aceituna De Mi Vermut",
  description: "You're the olive to my vermouth",
  images: [vermut1, vermut2, vermut3, vermut4, vermut5],
  primaryIndex: 0
}, {
  name: "My Ex Is My Biggest Fan",
  description: "Still watching your every move",
  images: [exFan1, exFan2, exFan3, exFan4, exFan5],
  primaryIndex: 0
}, {
  name: "Stay Cool, Stay Iconic",
  description: "Channel your inner legend",
  images: [stayCool1, stayCool2, stayCool3, stayCool4],
  primaryIndex: 0
}, {
  name: "I Like You But I Got No Game",
  description: "Honest confession vibes",
  images: [noGame1, noGame2, noGame3, noGame4, noGame5, noGame6],
  primaryIndex: 0
}];
const Index = () => {
  return <Layout>
      {/* Hero Section - Full Width Video Banner */}
      <section className="min-h-screen relative">
        {/* Video Background */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/hero-bg.mp4?v=3" type="video/mp4" />
        </video>

        {/* Overlay for button visibility */}
        <div className="absolute inset-0 bg-black/20" />

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
              <h2 className="font-display text-display-md text-foreground mb-8">[HEADER PLACEHOLDER]</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                [Write a paragraph explaining the brand — two friends, one Lebanese and one Spanish, creating fun
                T-shirts made by friends for friends. Describe the origin story, the shared humor, and what makes Habibi
                Amigo unique.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Designs Section */}
      <section className="py-32 bg-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <h2 className="font-display text-display-lg text-foreground mb-6 opacity-0 animate-fade-up">
              FEATURED DESIGNS
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl opacity-0 animate-fade-up delay-100">Browse Habibi Amigo's Latest Drops</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {featuredDesigns.map((design, index) => <div key={index} className="opacity-0 animate-fade-up" style={{
            animationDelay: `${(index + 2) * 100}ms`
          }}>
                <DesignCard name={design.name} description={design.description} images={design.images} primaryIndex={design.primaryIndex} />
              </div>)}
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
              [Write a larger paragraph about the brand philosophy — inside jokes turned into wearable art, friendship
              that crosses cultures, humor that connects people. Describe the creative process, the inspiration behind
              designs, and what wearing Habibi Amigo means.]
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
    </Layout>;
};
export default Index;