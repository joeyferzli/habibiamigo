import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
const SHOP_URL = "https://habibi-amigo.printify.me";
const About = () => {
  return <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="font-display text-display-xl text-foreground mb-8 opacity-0 animate-fade-up">ABOUT HABIBI AMIGO</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl opacity-0 animate-fade-up delay-100">Two friends from Lebanon and Spain who bonded over humor, culture, and great T-shirts. Habibi Amigo is about mixing worlds, sharing laughs and creating comfortable tees that feel effortless.
          </p>
          </div>
        </div>
      </section>

      {/* Founder 1 - Joey */}
      <section className="py-24 bg-sand">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Portrait */}
            <div className="opacity-0 animate-fade-up">
              <div className="aspect-[3/4] bg-oatmeal flex items-center justify-center max-w-md mx-auto lg:mx-0">
                <div className="text-center p-12">
                  <div className="w-24 h-32 mx-auto mb-4 border-2 border-dashed border-taupe/50 flex items-center justify-center">
                    <span className="text-taupe/60 text-xs uppercase tracking-wider">Portrait</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">[Joey's portrait placeholder]</p>
                </div>
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
      <section className="py-24">
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
              <div className="aspect-[3/4] bg-sand flex items-center justify-center max-w-md mx-auto lg:ml-auto lg:mr-0">
                <div className="text-center p-12">
                  <div className="w-24 h-32 mx-auto mb-4 border-2 border-dashed border-taupe/50 flex items-center justify-center">
                    <span className="text-taupe/60 text-xs uppercase tracking-wider">Portrait</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">[Amigo's portrait placeholder]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-display-lg text-foreground mb-10 opacity-0 animate-fade-up">THE STORY OF HABIBI AMIGO</h2>
            <p className="text-muted-foreground text-xl leading-relaxed mb-16 opacity-0 animate-fade-up delay-100">
              [Write a larger paragraph about what Habibi Amigo represents — the friendship, 
              the cultural blend of Lebanon and Spain, the inside jokes, the shared experiences 
              turned into wearable designs. T-shirts by friends, for friends. 
              A celebration of connection and humor across borders.]
            </p>
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