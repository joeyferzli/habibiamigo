import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FriendshipCollage = () => {
  return (
    <section className="py-24 lg:py-32 bg-sand relative overflow-hidden">
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
        <h2 className="font-display text-display-md text-foreground mb-8 opacity-0 animate-fade-up">
          HABIBI MEETS AMIGO
        </h2>
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-up delay-100">
          <p>{"\n"}</p>
          <p className="text-foreground/80 italic">
            Lebanese warmth x Spanish chaos.
          </p>
        </div>
        <p className="font-display text-2xl text-foreground mt-10 opacity-0 animate-fade-up delay-200">
          T-Shirts By Friends, For Friends.
        </p>
        <Link
          to="/about"
          className="inline-block mt-8 opacity-0 animate-fade-up delay-300"
        >
          <Button className="bg-foreground text-background hover:bg-foreground/90">
            About Us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FriendshipCollage;