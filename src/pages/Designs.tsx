import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import DesignCard from "@/components/DesignCard";
import { Design } from "@/types/design";

// ============================================
// DESIGN IMAGES - Import all images here
// ============================================

// Secretly Latina - White variant
import secretlyLatinaWhite1 from "@/assets/designs/secretly-latina-white-1.jpg";
import secretlyLatinaWhite2 from "@/assets/designs/secretly-latina-white-2.jpg";
import secretlyLatinaWhite3 from "@/assets/designs/secretly-latina-white-3.jpg";
import secretlyLatinaWhite4 from "@/assets/designs/secretly-latina-white-4.jpg";
import secretlyLatinaWhite5 from "@/assets/designs/secretly-latina-white-5.jpg";
import secretlyLatinaWhite6 from "@/assets/designs/secretly-latina-white-6.jpg";

// Secretly Latina - Black variant
import secretlyLatinaBlack1 from "@/assets/designs/secretly-latina-black-1.jpg";
import secretlyLatinaBlack2 from "@/assets/designs/secretly-latina-black-2.jpg";
import secretlyLatinaBlack3 from "@/assets/designs/secretly-latina-black-3.jpg";
import secretlyLatinaBlack4 from "@/assets/designs/secretly-latina-black-4.jpg";
import secretlyLatinaBlack5 from "@/assets/designs/secretly-latina-black-5.jpg";
import secretlyLatinaBlack6 from "@/assets/designs/secretly-latina-black-6.jpg";

// Secretly Latina - Navy variant
import secretlyLatinaNavy1 from "@/assets/designs/secretly-latina-navy-1.jpg";
import secretlyLatinaNavy2 from "@/assets/designs/secretly-latina-navy-2.jpg";
import secretlyLatinaNavy3 from "@/assets/designs/secretly-latina-navy-3.jpg";
import secretlyLatinaNavy4 from "@/assets/designs/secretly-latina-navy-4.jpg";
import secretlyLatinaNavy5 from "@/assets/designs/secretly-latina-navy-5.jpg";
import secretlyLatinaNavy6 from "@/assets/designs/secretly-latina-navy-6.jpg";

// Secretly Latina - Lavender Blue variant
import secretlyLatinaLavender1 from "@/assets/designs/secretly-latina-lavender-1.jpg";
import secretlyLatinaLavender2 from "@/assets/designs/secretly-latina-lavender-2.jpg";
import secretlyLatinaLavender3 from "@/assets/designs/secretly-latina-lavender-3.jpg";
import secretlyLatinaLavender4 from "@/assets/designs/secretly-latina-lavender-4.jpg";
import secretlyLatinaLavender5 from "@/assets/designs/secretly-latina-lavender-5.jpg";
import secretlyLatinaLavender6 from "@/assets/designs/secretly-latina-lavender-6.jpg";

// Dress Spanish - White variant
import dressSpanishWhite1 from "@/assets/designs/dress-spanish-white-1.jpg";
import dressSpanishWhite2 from "@/assets/designs/dress-spanish-white-2.jpg";
import dressSpanishWhite3 from "@/assets/designs/dress-spanish-white-3.jpg";
import dressSpanishWhite4 from "@/assets/designs/dress-spanish-white-4.jpg";
import dressSpanishWhite5 from "@/assets/designs/dress-spanish-white-5.jpg";
import dressSpanishWhite6 from "@/assets/designs/dress-spanish-white-6.jpg";

// Dress Spanish - Black variant
import dressSpanishBlack1 from "@/assets/designs/dress-spanish-black-1.jpg";
import dressSpanishBlack2 from "@/assets/designs/dress-spanish-black-2.jpg";
import dressSpanishBlack3 from "@/assets/designs/dress-spanish-black-3.jpg";
import dressSpanishBlack4 from "@/assets/designs/dress-spanish-black-4.jpg";
import dressSpanishBlack5 from "@/assets/designs/dress-spanish-black-5.jpg";
import dressSpanishBlack6 from "@/assets/designs/dress-spanish-black-6.jpg";

// Dress Spanish - Navy variant
import dressSpanishNavy1 from "@/assets/designs/dress-spanish-navy-1.jpg";
import dressSpanishNavy2 from "@/assets/designs/dress-spanish-navy-2.jpg";
import dressSpanishNavy3 from "@/assets/designs/dress-spanish-navy-3.jpg";
import dressSpanishNavy4 from "@/assets/designs/dress-spanish-navy-4.jpg";
import dressSpanishNavy5 from "@/assets/designs/dress-spanish-navy-5.jpg";
import dressSpanishNavy6 from "@/assets/designs/dress-spanish-navy-6.jpg";

// Dress Spanish - Lavender Blue variant
import dressSpanishLavender1 from "@/assets/designs/dress-spanish-lavender-1.jpg";
import dressSpanishLavender2 from "@/assets/designs/dress-spanish-lavender-2.jpg";
import dressSpanishLavender3 from "@/assets/designs/dress-spanish-lavender-3.jpg";
import dressSpanishLavender4 from "@/assets/designs/dress-spanish-lavender-4.jpg";
import dressSpanishLavender5 from "@/assets/designs/dress-spanish-lavender-5.jpg";
import dressSpanishLavender6 from "@/assets/designs/dress-spanish-lavender-6.jpg";

// Tequila - White variant
import tequilaWhite1 from "@/assets/designs/tequila-white-1.jpg";
import tequilaWhite2 from "@/assets/designs/tequila-white-2.jpg";
import tequilaWhite3 from "@/assets/designs/tequila-white-3.jpg";
import tequilaWhite4 from "@/assets/designs/tequila-white-4.jpg";
import tequilaWhite5 from "@/assets/designs/tequila-white-5.jpg";
import tequilaWhite6 from "@/assets/designs/tequila-white-6.jpg";

// Tequila - Black variant
import tequilaBlack1 from "@/assets/designs/tequila-black-1.jpg";
import tequilaBlack2 from "@/assets/designs/tequila-black-2.jpg";
import tequilaBlack3 from "@/assets/designs/tequila-black-3.jpg";
import tequilaBlack4 from "@/assets/designs/tequila-black-4.jpg";
import tequilaBlack5 from "@/assets/designs/tequila-black-5.jpg";
import tequilaBlack6 from "@/assets/designs/tequila-black-6.jpg";

// Vermut - White variant
import vermutWhite1 from "@/assets/designs/vermut-white-1.jpg";
import vermutWhite2 from "@/assets/designs/vermut-white-2.jpg";
import vermutWhite3 from "@/assets/designs/vermut-white-3.jpg";
import vermutWhite4 from "@/assets/designs/vermut-white-4.jpg";
import vermutWhite5 from "@/assets/designs/vermut-white-5.jpg";
import vermutWhite6 from "@/assets/designs/vermut-white-6.jpg";

// Vermut - Black variant
import vermutBlack1 from "@/assets/designs/vermut-black-1.jpg";
import vermutBlack2 from "@/assets/designs/vermut-black-2.jpg";
import vermutBlack3 from "@/assets/designs/vermut-black-3.jpg";
import vermutBlack4 from "@/assets/designs/vermut-black-4.jpg";
import vermutBlack5 from "@/assets/designs/vermut-black-5.jpg";
import vermutBlack6 from "@/assets/designs/vermut-black-6.jpg";

// Vermut - Navy variant
import vermutNavy1 from "@/assets/designs/vermut-navy-1.jpg";
import vermutNavy2 from "@/assets/designs/vermut-navy-2.jpg";
import vermutNavy3 from "@/assets/designs/vermut-navy-3.jpg";
import vermutNavy4 from "@/assets/designs/vermut-navy-4.jpg";
import vermutNavy5 from "@/assets/designs/vermut-navy-5.jpg";
import vermutNavy6 from "@/assets/designs/vermut-navy-6.jpg";

// Vermut - Lavender Blue variant
import vermutLavender1 from "@/assets/designs/vermut-lavender-1.jpg";
import vermutLavender2 from "@/assets/designs/vermut-lavender-2.jpg";
import vermutLavender3 from "@/assets/designs/vermut-lavender-3.jpg";
import vermutLavender4 from "@/assets/designs/vermut-lavender-4.jpg";
import vermutLavender5 from "@/assets/designs/vermut-lavender-5.jpg";
import vermutLavender6 from "@/assets/designs/vermut-lavender-6.jpg";

// Ex Fan - White variant
import exFanWhite1 from "@/assets/designs/ex-fan-white-1.jpg";
import exFanWhite2 from "@/assets/designs/ex-fan-white-2.jpg";
import exFanWhite3 from "@/assets/designs/ex-fan-white-3.jpg";
import exFanWhite4 from "@/assets/designs/ex-fan-white-4.jpg";
import exFanWhite5 from "@/assets/designs/ex-fan-white-5.jpg";
import exFanWhite6 from "@/assets/designs/ex-fan-white-6.jpg";

// Ex Fan - Black variant
import exFanBlack1 from "@/assets/designs/ex-fan-black-1.jpg";
import exFanBlack2 from "@/assets/designs/ex-fan-black-2.jpg";
import exFanBlack3 from "@/assets/designs/ex-fan-black-3.jpg";
import exFanBlack4 from "@/assets/designs/ex-fan-black-4.jpg";
import exFanBlack5 from "@/assets/designs/ex-fan-black-5.jpg";
import exFanBlack6 from "@/assets/designs/ex-fan-black-6.jpg";

// Ex Fan - Lavender Blue variant
import exFanLavender1 from "@/assets/designs/ex-fan-lavender-1.jpg";
import exFanLavender2 from "@/assets/designs/ex-fan-lavender-2.jpg";
import exFanLavender3 from "@/assets/designs/ex-fan-lavender-3.jpg";
import exFanLavender4 from "@/assets/designs/ex-fan-lavender-4.jpg";
import exFanLavender5 from "@/assets/designs/ex-fan-lavender-5.jpg";
import exFanLavender6 from "@/assets/designs/ex-fan-lavender-6.jpg";

// Ex Fan - Navy variant
import exFanNavy1 from "@/assets/designs/ex-fan-navy-1.jpg";
import exFanNavy2 from "@/assets/designs/ex-fan-navy-2.jpg";
import exFanNavy3 from "@/assets/designs/ex-fan-navy-3.jpg";
import exFanNavy4 from "@/assets/designs/ex-fan-navy-4.jpg";
import exFanNavy5 from "@/assets/designs/ex-fan-navy-5.jpg";
import exFanNavy6 from "@/assets/designs/ex-fan-navy-6.jpg";

// Stay Cool - Black variant
import stayCoolBlack1 from "@/assets/designs/stay-cool-black-1.jpg";
import stayCoolBlack2 from "@/assets/designs/stay-cool-black-2.jpg";
import stayCoolBlack3 from "@/assets/designs/stay-cool-black-3.jpg";
import stayCoolBlack4 from "@/assets/designs/stay-cool-black-4.jpg";
import stayCoolBlack5 from "@/assets/designs/stay-cool-black-5.jpg";
import stayCoolBlack6 from "@/assets/designs/stay-cool-black-6.jpg";

// No Game - White variant
import noGameWhite1 from "@/assets/designs/no-game-white-1.jpg";
import noGameWhite2 from "@/assets/designs/no-game-white-2.jpg";
import noGameWhite3 from "@/assets/designs/no-game-white-3.jpg";
import noGameWhite4 from "@/assets/designs/no-game-white-4.jpg";
import noGameWhite5 from "@/assets/designs/no-game-white-5.jpg";
import noGameWhite6 from "@/assets/designs/no-game-white-6.jpg";

// No Game - Black variant
import noGameBlack1 from "@/assets/designs/no-game-black-1.jpg";
import noGameBlack2 from "@/assets/designs/no-game-black-2.jpg";
import noGameBlack3 from "@/assets/designs/no-game-black-3.jpg";
import noGameBlack4 from "@/assets/designs/no-game-black-4.jpg";
import noGameBlack5 from "@/assets/designs/no-game-black-5.jpg";
import noGameBlack6 from "@/assets/designs/no-game-black-6.jpg";

// No Game - Lavender variant
import noGameLavender1 from "@/assets/designs/no-game-lavender-1.jpg";
import noGameLavender2 from "@/assets/designs/no-game-lavender-2.jpg";
import noGameLavender3 from "@/assets/designs/no-game-lavender-3.jpg";
import noGameLavender4 from "@/assets/designs/no-game-lavender-4.jpg";
import noGameLavender5 from "@/assets/designs/no-game-lavender-5.jpg";
import noGameLavender6 from "@/assets/designs/no-game-lavender-6.jpg";

// No Game - Navy variant
import noGameNavy1 from "@/assets/designs/no-game-navy-1.jpg";
import noGameNavy2 from "@/assets/designs/no-game-navy-2.jpg";
import noGameNavy3 from "@/assets/designs/no-game-navy-3.jpg";
import noGameNavy4 from "@/assets/designs/no-game-navy-4.jpg";
import noGameNavy5 from "@/assets/designs/no-game-navy-5.jpg";
import noGameNavy6 from "@/assets/designs/no-game-navy-6.jpg";

// I Lied - White variant
import iLiedWhite1 from "@/assets/designs/i-lied-white-1.jpg";
import iLiedWhite2 from "@/assets/designs/i-lied-white-2.jpg";
import iLiedWhite3 from "@/assets/designs/i-lied-white-3.jpg";
import iLiedWhite4 from "@/assets/designs/i-lied-white-4.jpg";
import iLiedWhite5 from "@/assets/designs/i-lied-white-5.jpg";
import iLiedWhite6 from "@/assets/designs/i-lied-white-6.jpg";

// I Lied - Black variant
import iLiedBlack1 from "@/assets/designs/i-lied-black-1.jpg";
import iLiedBlack2 from "@/assets/designs/i-lied-black-2.jpg";
import iLiedBlack3 from "@/assets/designs/i-lied-black-3.jpg";
import iLiedBlack4 from "@/assets/designs/i-lied-black-4.jpg";
import iLiedBlack5 from "@/assets/designs/i-lied-black-5.jpg";
import iLiedBlack6 from "@/assets/designs/i-lied-black-6.jpg";

// I Lied - Navy variant
import iLiedNavy1 from "@/assets/designs/i-lied-navy-1.jpg";
import iLiedNavy2 from "@/assets/designs/i-lied-navy-2.jpg";
import iLiedNavy3 from "@/assets/designs/i-lied-navy-3.jpg";
import iLiedNavy4 from "@/assets/designs/i-lied-navy-4.jpg";
import iLiedNavy5 from "@/assets/designs/i-lied-navy-5.jpg";
import iLiedNavy6 from "@/assets/designs/i-lied-navy-6.jpg";

// I Lied - Lavender variant
import iLiedLavender1 from "@/assets/designs/i-lied-lavender-1.jpg";
import iLiedLavender2 from "@/assets/designs/i-lied-lavender-2.jpg";
import iLiedLavender3 from "@/assets/designs/i-lied-lavender-3.jpg";
import iLiedLavender4 from "@/assets/designs/i-lied-lavender-4.jpg";
import iLiedLavender5 from "@/assets/designs/i-lied-lavender-5.jpg";
import iLiedLavender6 from "@/assets/designs/i-lied-lavender-6.jpg";

// ASAP - White variant
import asapWhite1 from "@/assets/designs/asap-white-1.jpg";
import asapWhite2 from "@/assets/designs/asap-white-2.jpg";
import asapWhite3 from "@/assets/designs/asap-white-3.jpg";
import asapWhite4 from "@/assets/designs/asap-white-4.jpg";
import asapWhite5 from "@/assets/designs/asap-white-5.jpg";
import asapWhite6 from "@/assets/designs/asap-white-6.jpg";

// ASAP - Black variant
import asapBlack1 from "@/assets/designs/asap-black-1.jpg";
import asapBlack2 from "@/assets/designs/asap-black-2.jpg";
import asapBlack3 from "@/assets/designs/asap-black-3.jpg";
import asapBlack4 from "@/assets/designs/asap-black-4.jpg";
import asapBlack5 from "@/assets/designs/asap-black-5.jpg";
import asapBlack6 from "@/assets/designs/asap-black-6.jpg";

// Common white front photos (shared across all white variants)
import whiteFront1 from "@/assets/designs/white-front-1.jpg";
import whiteFront2 from "@/assets/designs/white-front-2.jpg";
import whiteFront3 from "@/assets/designs/white-front-3.jpg";

// ============================================
// SHOP URL - Link to Printify store
// ============================================
const SHOP_URL = "https://habibi-amigo.printify.me";

// ============================================
// DESIGNS DATA - FULLY EDITABLE
// ============================================
// To edit a design:
// - name: Change the display title
// - caption: Short text shown on grid card
// - description: Full text shown in modal
// - colorVariations: Add/remove colors with their images
// - defaultColorIndex: Which color shows by default (0-based)
// - availableSizes: Which sizes are available
// - notes: Optional fit/fabric info
// - inStock: true/false for availability
// ============================================

const designs: Design[] = [
  {
    id: "secretly-latina",
    name: "Secretly In Love With Every Latina Here",
    caption: "A tribute to the latinas",
    description:
      "A bold statement piece celebrating the beauty and culture of Latinas everywhere. Perfect for those who wear their heart on their sleeve.",
    colorVariations: [
      {
        name: "White",
        swatchColor: "#f5f5f5",
        images: [
          secretlyLatinaWhite6,
          secretlyLatinaWhite5,
          whiteFront1,
          whiteFront2,
          whiteFront3,
          secretlyLatinaWhite4,
        ],
      },
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [
          secretlyLatinaBlack6,
          secretlyLatinaBlack5,
          secretlyLatinaBlack1,
          secretlyLatinaBlack4,
          secretlyLatinaBlack3,
          secretlyLatinaBlack2,
        ],
      },
      {
        name: "Navy",
        swatchColor: "#1e3a5f",
        images: [
          secretlyLatinaNavy6,
          secretlyLatinaNavy5,
          secretlyLatinaNavy1,
          secretlyLatinaNavy4,
          secretlyLatinaNavy3,
          secretlyLatinaNavy2,
        ],
      },
      {
        name: "Lavender Blue",
        swatchColor: "#7b9cb8",
        images: [
          secretlyLatinaLavender1,
          secretlyLatinaLavender2,
          secretlyLatinaLavender3,
          secretlyLatinaLavender4,
          secretlyLatinaLavender5,
          secretlyLatinaLavender6,
        ],
      },
    ],
    defaultColorIndex: 3,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    notes: "Unisex fit. True to size. 100% cotton.",
    inStock: true,
  },
  {
    id: "dress-spanish",
    name: "Dress Spanish, Eat Lebanese, Kiss Both",
    caption: "The best of both worlds",
    description:
      "Embrace the Mediterranean lifestyle with this fusion-inspired design. For those who appreciate culture without borders.",
    colorVariations: [
      {
        name: "White",
        swatchColor: "#f5f5f5",
        images: [
          dressSpanishWhite1,
          dressSpanishWhite2,
          dressSpanishWhite3,
          dressSpanishWhite4,
          dressSpanishWhite5,
        ],
      },
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [
          dressSpanishBlack1,
          dressSpanishBlack2,
          dressSpanishBlack3,
          dressSpanishBlack4,
          dressSpanishBlack5,
        ],
      },
      {
        name: "Navy",
        swatchColor: "#1e3a5f",
        images: [
          dressSpanishNavy1,
          dressSpanishNavy2,
          dressSpanishNavy3,
          dressSpanishNavy4,
          dressSpanishNavy5,
        ],
      },
      {
        name: "Lavender Blue",
        swatchColor: "#7b9cb8",
        images: [
          dressSpanishLavender1,
          dressSpanishLavender2,
          dressSpanishLavender3,
          dressSpanishLavender4,
          dressSpanishLavender5,
        ],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["XS", "S", "M", "L", "XL"],
    notes: "Relaxed fit. Runs slightly large.",
    inStock: true,
  },
  {
    id: "tequila",
    name: "1 Tequila, 2 Tequilas, 3 Tekilsas... Floor",
    caption: "Count your way down",
    description:
      "The perfect party companion. A playful nod to those nights that start with good intentions and end with great stories.",
    colorVariations: [
      {
        name: "White",
        swatchColor: "#ffffff",
        images: [tequilaWhite6, tequilaWhite5, whiteFront1, whiteFront2, whiteFront3, tequilaWhite4],
      },
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [tequilaBlack6, tequilaBlack1, tequilaBlack2, tequilaBlack3, tequilaBlack4, tequilaBlack5],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "vermut",
    name: "Eres La Aceituna De Mi Vermut",
    caption: "You're the olive to my vermouth",
    description:
      "A romantic Spanish phrase for the aperitivo lovers. Because every great drink needs its perfect match.",
    colorVariations: [
      {
        name: "Navy",
        swatchColor: "#1e3a5f",
        images: [vermutNavy1, vermutNavy2, vermutNavy3, vermutNavy4, vermutNavy5, vermutNavy6],
      },
      {
        name: "White",
        swatchColor: "#f5f5f5",
        images: [vermutWhite6, vermutWhite5, whiteFront1, whiteFront2, whiteFront3, vermutWhite4],
      },
      {
        name: "Lavender Blue",
        swatchColor: "#7b9cb8",
        images: [vermutLavender1, vermutLavender2, vermutLavender3, vermutLavender4, vermutLavender5, vermutLavender6],
      },
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [vermutBlack1, vermutBlack2, vermutBlack3, vermutBlack4, vermutBlack5, vermutBlack6],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "ex-fan",
    name: "My Ex Is My Biggest Fan",
    caption: "Still watching your every move",
    description:
      "For those who know their worth. A confident reminder that moving on doesn't mean being forgotten.",
    colorVariations: [
      {
        name: "White",
        swatchColor: "#f5f5f5",
        images: [exFanWhite1, exFanWhite2, exFanWhite3, exFanWhite4, exFanWhite5],
      },
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [exFanBlack1, exFanBlack2, exFanBlack3, exFanBlack4, exFanBlack5],
      },
      {
        name: "Lavender Blue",
        swatchColor: "#7b9cb8",
        images: [exFanLavender1, exFanLavender2, exFanLavender3, exFanLavender4, exFanLavender5],
      },
      {
        name: "Navy",
        swatchColor: "#1e3a5f",
        images: [exFanNavy1, exFanNavy2, exFanNavy3, exFanNavy4, exFanNavy5],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "stay-cool",
    name: "Stay Cool, Stay Iconic",
    caption: "Channel your inner legend",
    description:
      "A minimalist statement for those who let their presence speak louder than words. Effortlessly cool.",
    colorVariations: [
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [stayCoolBlack1, stayCoolBlack2, stayCoolBlack3, stayCoolBlack4, stayCoolBlack5, stayCoolBlack6],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    notes: "Oversized fit. Size down for regular fit.",
    inStock: true,
  },
  {
    id: "no-game",
    name: "I Like You But I Got No Game",
    caption: "Honest confession vibes",
    description:
      "Honesty is the best policy. For the charmingly awkward and authentically real among us.",
    colorVariations: [
      {
        name: "White",
        swatchColor: "#f5f5f5",
        images: [
          noGameWhite1,
          noGameWhite2,
          noGameWhite3,
          noGameWhite4,
          noGameWhite5,
        ],
      },
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [
          noGameBlack1,
          noGameBlack2,
          noGameBlack3,
          noGameBlack4,
          noGameBlack5,
        ],
      },
      {
        name: "Lavender Blue",
        swatchColor: "#7b9cb8",
        images: [
          noGameLavender1,
          noGameLavender2,
          noGameLavender3,
          noGameLavender4,
          noGameLavender5,
        ],
      },
      {
        name: "Navy",
        swatchColor: "#1e3a5f",
        images: [
          noGameNavy1,
          noGameNavy2,
          noGameNavy3,
          noGameNavy4,
          noGameNavy5,
        ],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "i-lied",
    name: "I Lied. I Love House Music",
    caption: "For the rave lovers",
    description:
      "The confession every house head needs to make. Because the bass drop never lies.",
    colorVariations: [
      {
        name: "White",
        swatchColor: "#f5f5f5",
        images: [iLiedWhite6, iLiedWhite5, whiteFront1, whiteFront2, whiteFront3, iLiedWhite4],
      },
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [iLiedBlack6, iLiedBlack5, iLiedBlack4, iLiedBlack3, iLiedBlack2, iLiedBlack1],
      },
      {
        name: "Lavender Blue",
        swatchColor: "#7b9cb8",
        images: [iLiedLavender6, iLiedLavender5, iLiedLavender4, iLiedLavender3, iLiedLavender2, iLiedLavender1],
      },
      {
        name: "Navy",
        swatchColor: "#1e3a5f",
        images: [iLiedNavy6, iLiedNavy5, iLiedNavy4, iLiedNavy3, iLiedNavy2, iLiedNavy1],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    notes: "Festival-ready. Lightweight cotton.",
    inStock: true,
  },
  {
    id: "asap",
    name: "My ASAP Stands For Aperol Spritz And Party",
    caption: "Party priorities sorted",
    description:
      "Redefining urgency one spritz at a time. For those whose priority list starts with good vibes.",
    colorVariations: [
      {
        name: "White",
        swatchColor: "#f5f5f5",
        images: [
          asapWhite1,
          asapWhite2,
          asapWhite3,
          asapWhite4,
          asapWhite5,
        ],
      },
      {
        name: "Black",
        swatchColor: "#1a1a1a",
        images: [
          asapBlack1,
          asapBlack2,
          asapBlack3,
          asapBlack4,
          asapBlack5,
        ],
      },
    ],
    defaultColorIndex: 0,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
];

// ============================================
// DESIGNS PAGE COMPONENT
// ============================================

const Designs = () => {
  const [stockFilter, setStockFilter] = useState<"all" | "in" | "out">("all");

  const filteredDesigns = designs.filter((design) => {
    if (stockFilter === "all") return true;
    if (stockFilter === "in") return design.inStock;
    if (stockFilter === "out") return !design.inStock;
    return true;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative aspect-video md:aspect-auto md:pt-32 md:pb-20 md:min-h-[60vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain md:object-cover"
        >
          <source src="/videos/designs-hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-background/60" />

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-display text-foreground mb-8 opacity-0 animate-fade-up text-3xl md:text-7xl text-left">
              THE HABIBI AMIGO COLLECTION
            </h1>
          </div>
        </div>
      </section>

      {/* Designs Grid */}
      <section className="py-16 pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Filter */}
          <div className="flex gap-2 mb-10">
            <button
              onClick={() => setStockFilter("all")}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded transition-colors ${
                stockFilter === "all"
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setStockFilter("in")}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded transition-colors ${
                stockFilter === "in"
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              In Stock
            </button>
            <button
              onClick={() => setStockFilter("out")}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded transition-colors ${
                stockFilter === "out"
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Out of Stock
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-20">
            {filteredDesigns.map((design, index) => (
              <div
                key={design.id}
                className="opacity-0 animate-fade-up"
                style={{
                  animationDelay: `${index * 75}ms`,
                }}
              >
                <DesignCard design={design} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="premium" size="xl" asChild>
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                Shop All Designs
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Designs;
