import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import amigoPortrait from "@/assets/amigo-portrait.png";
import joeyPortrait from "@/assets/joey-portrait.png";
const SHOP_URL = "https://habibi-amigo.printify.me";
const About = () => {
  return <Layout>
      {/* Hero */}
      {/* Hero with Video Background */}
      <section className="aspect-video md:aspect-auto md:min-h-screen relative flex items-center">
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Heading - Both mobile and desktop (on video) */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-display text-3xl md:text-display-xl text-white mb-4 md:mb-8 opacity-0 animate-fade-up">ABOUT HABIBI AMIGO</h1>
            {/* Paragraph - Desktop only (on video) */}
            <p className="hidden md:block text-xl text-white/90 leading-relaxed max-w-2xl opacity-0 animate-fade-up delay-100">Two friends from Lebanon and Spain who bonded over humor, culture, and great T-shirts. Habibi Amigo is about mixing worlds, sharing laughs and creating comfortable tees that feel effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Paragraph - Mobile only (below video) */}
      <div className="md:hidden bg-sand px-6 py-8">
        <p className="text-sm text-muted-foreground leading-relaxed opacity-0 animate-fade-up delay-100">Two friends from Lebanon and Spain who bonded over humor, culture, and great T-shirts. Habibi Amigo is about mixing worlds, sharing laughs and creating comfortable tees that feel effortless.
        </p>
      </div>

      {/* Founder 1 - Joey */}
      <section className="py-24 bg-sand">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Portrait */}
            <div className="opacity-0 animate-fade-up">
              <div className="aspect-[3/4] bg-oatmeal overflow-hidden max-w-md mx-auto lg:mx-0 group">
                <img src={joeyPortrait} alt="Joey - The Habibi" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
              </div>
            </div>

            {/* Info */}
            <div className="opacity-0 animate-fade-up delay-200">
              <h2 className="font-display text-display-md text-foreground mb-4">
                JOEY
              </h2>
              <p className="text-primary font-medium text-lg mb-8 uppercase tracking-wider">
                The Habibi 
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">Joey is the Habibi in Habibi Amigo. Lebanese at heart, raised between cultures, and powered by good vibes and inside jokes.

He brings humor, instinctive design taste, and a love for simple pieces that don’t take themselves too seriously.

This project is personal for him. It’s about friendship, culture mashups, and wearing something that feels like you’re in on the joke.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder 2 - Amigo */}
      <section className="py-24 bg-oatmeal">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Info - Reversed order on desktop */}
            <div className="order-2 lg:order-1 opacity-0 animate-fade-up delay-200">
              <h2 className="font-display text-display-md text-foreground mb-4">IGNACIO</h2>
              <p className="text-primary font-medium text-lg mb-8 uppercase tracking-wider">THE AMIGO</p>
              <p className="text-muted-foreground leading-relaxed text-base">Ignacio is the Amigo in Habibi Amigo. Spanish through and through, he brings effortless creativity and sharp humor.


Obsessed with fun T-shirts, nights out, memes and inside jokes with the boys, he’s the spark behind the brand’s playful edge.

What started as friendship and shared laughs with Joey turned into a brand that doesn’t take itself too seriously.</p>
            </div>

            {/* Portrait */}
            <div className="order-1 lg:order-2 opacity-0 animate-fade-up">
              <div className="aspect-[3/4] bg-sand overflow-hidden max-w-md mx-auto lg:ml-auto lg:mr-0 group">
                <img src={amigoPortrait} alt="Ignacio - The Amigo" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-32 bg-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-display-lg text-foreground mb-10 opacity-0 animate-fade-up">THE STORY OF HABIBI AMIGO</h2>
            <p className="text-muted-foreground leading-relaxed mb-16 opacity-0 animate-fade-up delay-100 text-left text-lg">Habibi Amigo is a celebration of friendship, culture, and the moments that turn strangers into brothers. It started when two guys from Lebanon and Spain met during their MBA.

One batch apart, a casual “hey man” slowly turned into shared laughs, late nights, inside jokes, and a bond that felt bigger than backgrounds or borders. What came out of that friendship is a brand rooted in shared experiences and humor, blending Lebanese warmth with Spanish energy.

Every design is inspired by real moments, jokes that don’t need explaining, and the kind of comfort that feels familiar the second you put it on. Habibi Amigo is about connection, not perfection.
T-shirts by friends, for friends.</p>
            <div className="opacity-0 animate-fade-up delay-200">
              <Button variant="premium" size="xl" asChild>
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                  Shop Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;