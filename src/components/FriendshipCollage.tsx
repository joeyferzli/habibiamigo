import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Import founder photo
import foundersPhoto from "@/assets/friends/founders.jpg";
const FriendshipCollage = () => {
  return <section className="py-24 lg:py-32 bg-sand relative overflow-hidden">
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
    }} />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Desktop Layout: 60/40 split */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Left: Single Photo (60%) */}
          <div className="col-span-3 relative flex justify-center">
            <div className="w-[450px] h-[550px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl" style={{
            transform: `rotate(-2deg)`
          }}>
              <img src={foundersPhoto} alt="The founders - Habibi and Amigo" className="w-full h-full object-cover" />
            </div>

            {/* Hidden caption */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-taupe/40 font-body italic tracking-wide">
              No brand meetings. Just vibes.
            </span>
          </div>

          {/* Right: Text Content (40%) */}
          <div className="col-span-2">
            <h2 className="font-display text-display-md text-foreground mb-8 opacity-0 animate-fade-up">HABIBI MEETS AMIGO</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-up delay-100">
              <p>We met during our MBA.</p>
              <p>Different countries, different cultures, same sense of humor.</p>
              <p>
                What started as jokes, nights out, and inside references turned into
                designs we actually wanted to wear.
              </p>
              <p className="text-foreground/80 italic">Lebanese warmth x Spanish chaos.</p>
            </div>
            <p className="font-display text-2xl text-foreground mt-10 opacity-0 animate-fade-up delay-200">
              T-Shirts By Friends, For Friends.
            </p>
            <Link to="/about" className="inline-block mt-8 opacity-0 animate-fade-up delay-300">
              <Button className="bg-foreground text-background hover:bg-foreground/90">
                About Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Layout: Single Photo + Text stacked */}
        <div className="lg:hidden">
          {/* Single photo */}
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-sm h-[400px] rounded-xl overflow-hidden shadow-lg" style={{
            transform: `rotate(-2deg)`
          }}>
              <img src={foundersPhoto} alt="The founders - Habibi and Amigo" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Hidden caption mobile */}
          <p className="text-center text-xs text-taupe/40 italic mt-2 mb-8">
            No brand meetings. Just vibes.
          </p>

          {/* Text content */}
          <div className="mt-10">
            <h2 className="font-display text-display-sm text-foreground mb-6">
              HOW A HABIBI MET AN AMIGO
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Barcelona, 2024</p>
              <p>Different countries, different cultures, same sense of humor.</p>
              <p>
                What started as jokes, nights out, and inside references turned into
                designs we actually wanted to wear.
              </p>
              <p className="text-foreground/80 italic">Lebanese warmth. Spanish chaos.</p>
            </div>
            <p className="font-display text-xl text-foreground mt-8">
              T-shirts by friends, for friends.
            </p>
            <Link to="/about" className="inline-block mt-6">
              <Button className="bg-foreground text-background hover:bg-foreground/90">
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default FriendshipCollage;