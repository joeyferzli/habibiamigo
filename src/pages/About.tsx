import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const SHOP_URL = "https://habibi-amigo.printify.me";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-sand/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
              Meet The Amigos Behind Habibi Amigo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
              Write a short intro about two friends from Lebanon and Spain starting this brand together
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Joey */}
            <div className="text-center opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <div className="aspect-square max-w-sm mx-auto mb-8 bg-sand/50 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-taupe/30 flex items-center justify-center">
                    <span className="text-5xl">🧑</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">Joey's photo placeholder</p>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Joey</h2>
              <p className="text-primary font-medium mb-4">Role or tagline for Joey</p>
              <p className="text-muted-foreground leading-relaxed">
                Write a short bio about Joey, background, personality, what he brings to the brand
              </p>
            </div>

            {/* Amigo */}
            <div className="text-center opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="aspect-square max-w-sm mx-auto mb-8 bg-sand/50 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-taupe/30 flex items-center justify-center">
                    <span className="text-5xl">🧑</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">Amigo's photo placeholder</p>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Amigo</h2>
              <p className="text-primary font-medium mb-4">Role or tagline for the Spanish friend</p>
              <p className="text-muted-foreground leading-relaxed">
                Write a short bio about him, background, personality, what he brings to the brand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-24 bg-accent/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              What Habibi Amigo Stands For
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Write a short paragraph about friendship, humor, culture mix, and making Tshirts for friends
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                Shop Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
