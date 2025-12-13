import { useState, useRef, useEffect } from "react";

// Import all friend photos
import partyPurple from "@/assets/friends/party-purple.jpg";
import smilesHome from "@/assets/friends/smiles-home.jpg";
import sunsetLebanon from "@/assets/friends/sunset-lebanon.jpg";
import barNight from "@/assets/friends/bar-night.jpg";
import carryFunny from "@/assets/friends/carry-funny.jpg";
import sunglassesDuo from "@/assets/friends/sunglasses-duo.jpg";
import festivalSun from "@/assets/friends/festival-sun.jpg";
import concertNight from "@/assets/friends/concert-night.jpg";
import gardenDrinks from "@/assets/friends/garden-drinks.jpg";
import streetFest from "@/assets/friends/street-fest.jpg";
const photos = [{
  src: sunsetLebanon,
  alt: "Sunset in Lebanon",
  rotation: -3,
  size: "large",
  zIndex: 10
}, {
  src: carryFunny,
  alt: "Carrying friend",
  rotation: 5,
  size: "medium",
  zIndex: 9
}, {
  src: concertNight,
  alt: "Concert night",
  rotation: -4,
  size: "medium",
  zIndex: 8
}, {
  src: barNight,
  alt: "Bar night",
  rotation: 3,
  size: "small",
  zIndex: 7
}, {
  src: festivalSun,
  alt: "Festival in the sun",
  rotation: -5,
  size: "small",
  zIndex: 6
}, {
  src: streetFest,
  alt: "Street festival",
  rotation: 4,
  size: "small",
  zIndex: 5
}];
const allPhotos = [sunsetLebanon, carryFunny, concertNight, barNight, festivalSun, streetFest];
const FriendshipCollage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [photoOffset, setPhotoOffset] = useState(0);

  // Rotate photos every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoOffset(prev => (prev + 1) % allPhotos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Get rotated photo for each position
  const getPhoto = (index: number) => allPhotos[(index + photoOffset) % allPhotos.length];

  // Mobile touch/drag scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return <section className="py-24 lg:py-32 bg-sand relative overflow-hidden">
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
    }} />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Desktop Layout: 60/40 split */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Left: Photo Collage (60%) */}
          <div className="col-span-3 relative h-[600px]">
            {/* Main anchor photo - center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[420px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl" style={{
            transform: `translate(-50%, -50%) rotate(-2deg)`,
            zIndex: 10
          }}>
              <img src={getPhoto(0)} alt="Friends moment" className="w-full h-full object-cover transition-opacity duration-700" />
            </div>

            {/* Top-left photo */}
            <div className="absolute left-0 top-4 w-[200px] h-[260px] rounded-xl overflow-hidden shadow-xl transition-all duration-700 hover:scale-105" style={{
            transform: `rotate(5deg)`,
            zIndex: 7
          }}>
              <img src={getPhoto(1)} alt="Friends moment" className="w-full h-full object-cover transition-opacity duration-700" />
            </div>

            {/* Top-right photo - partially off canvas */}
            <div className="absolute -right-8 top-8 w-[180px] h-[240px] rounded-xl overflow-hidden shadow-xl transition-all duration-700 hover:scale-105" style={{
            transform: `rotate(-4deg)`,
            zIndex: 6
          }}>
              <img src={getPhoto(2)} alt="Friends moment" className="w-full h-full object-cover transition-opacity duration-700" />
            </div>

            {/* Bottom-left photo */}
            <div className="absolute left-8 bottom-0 w-[160px] h-[200px] rounded-xl overflow-hidden shadow-xl transition-all duration-700 hover:scale-105" style={{
            transform: `rotate(-5deg)`,
            zIndex: 8
          }}>
              <img src={getPhoto(3)} alt="Friends moment" className="w-full h-full object-cover transition-opacity duration-700" />
            </div>

            {/* Bottom-right photo */}
            <div className="absolute right-12 bottom-8 w-[170px] h-[210px] rounded-xl overflow-hidden shadow-xl transition-all duration-700 hover:scale-105" style={{
            transform: `rotate(4deg)`,
            zIndex: 5
          }}>
              <img src={getPhoto(4)} alt="Friends moment" className="w-full h-full object-cover transition-opacity duration-700" />
            </div>

            {/* Small accent photo - top center-right */}
            <div className="absolute right-1/4 top-0 w-[140px] h-[170px] rounded-xl overflow-hidden shadow-lg transition-all duration-700 hover:scale-105" style={{
            transform: `rotate(3deg)`,
            zIndex: 4
          }}>
              <img src={getPhoto(5)} alt="Friends moment" className="w-full h-full object-cover transition-opacity duration-700" />
            </div>

            {/* Hidden caption */}
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 text-xs text-taupe/40 font-body italic tracking-wide" style={{
            zIndex: 20
          }}>
              No brand meetings. Just vibes.
            </span>
          </div>

          {/* Right: Text Content (40%) */}
          <div className="col-span-2">
            <h2 className="font-display text-display-md text-foreground mb-8 opacity-0 animate-fade-up">HOW A HABIBI MET AN AMIGO</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-up delay-100">
              <p>We met during our MBA.</p>
              <p>Different countries, different cultures, same sense of humor.</p>
              <p>
                What started as jokes, nights out, and inside references turned into 
                designs we actually wanted to wear.
              </p>
              <p className="text-foreground/80 italic">Lebanese warmth x Spanish chaos.</p>
            </div>
            <p className="font-display text-2xl text-foreground mt-10 opacity-0 animate-fade-up delay-200">T-Shirts By Friends, For Friends.</p>
          </div>
        </div>

        {/* Mobile Layout: Gallery + Text stacked */}
        <div className="lg:hidden">
          {/* Swipeable gallery */}
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-6 -mx-6 px-6 scrollbar-hide cursor-grab active:cursor-grabbing" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
            {[sunsetLebanon, carryFunny, concertNight, barNight, festivalSun, streetFest].map((src, index) => <div key={index} className="flex-shrink-0 w-64 h-80 rounded-xl overflow-hidden shadow-lg" style={{
            transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`
          }}>
                <img src={src} alt={`Friends moment ${index + 1}`} className="w-full h-full object-cover" draggable={false} />
              </div>)}
          </div>

          {/* Hidden caption mobile */}
          <p className="text-center text-xs text-taupe/40 italic mt-2 mb-8">
            No brand meetings. Just vibes.
          </p>

          {/* Text content */}
          <div className="mt-10">
            <h2 className="font-display text-display-sm text-foreground mb-6">HOW A HABIBI MET AN AMIGO</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Barcelona, 2024</p>
              <p>Different countries, different cultures, same sense of humor.</p>
              <p>
                What started as jokes, nights out, and inside references turned into 
                designs we actually wanted to wear.
              </p>
              <p className="text-foreground/80 italic">
                Lebanese warmth. Spanish chaos.
              </p>
            </div>
            <p className="font-display text-xl text-foreground mt-8">
              T-shirts by friends, for friends.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default FriendshipCollage;