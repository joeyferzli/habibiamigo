// Static Habibi Amigo catalog exposed to MCP callers.
// This is a hand-authored summary of the public collection.
// Update this file whenever the on-site design list changes.

export const SHOP_URL = "https://habibi-amigo.printify.me";
export const CONTACT_EMAIL = "habibiamigo@gmail.com";
export const SITE_URL = "https://habibiamigo.com";

export interface CatalogDesign {
  id: string;
  name: string;
  caption: string;
  colors: string[];
  sizes: string[];
  inStock: boolean;
}

export const DESIGNS: CatalogDesign[] = [
  {
    id: "tequila-run-club",
    name: "Tequila Run Club",
    caption: "For the ones who run on tequila.",
    colors: ["White", "Black", "Navy", "Baby Blue"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "secretly-latina",
    name: "Secretly Latina",
    caption: "The secret is out.",
    colors: ["White", "Black", "Navy", "Baby Blue"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "dress-spanish",
    name: "Dress Spanish",
    caption: "Style that speaks Spanish.",
    colors: ["White", "Black", "Navy", "Baby Blue"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "tequila",
    name: "Tequila",
    caption: "One word. One vibe.",
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "vermut",
    name: "Vermut",
    caption: "Sunday afternoons, always.",
    colors: ["White", "Black", "Navy", "Baby Blue"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "ex-fan",
    name: "Ex Fan",
    caption: "Been there, unliked that.",
    colors: ["White", "Black", "Navy", "Baby Blue"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "stay-cool",
    name: "Stay Cool",
    caption: "Rule number one.",
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "no-game",
    name: "No Game",
    caption: "Say it with your chest.",
    colors: ["White", "Black", "Navy", "Baby Blue"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "i-lied",
    name: "I Lied",
    caption: "Honest about the dishonesty.",
    colors: ["White", "Black", "Navy", "Baby Blue"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "asap",
    name: "ASAP",
    caption: "No time like right now.",
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "get-married",
    name: "Get Married? Or Afters?",
    caption: "The eternal question.",
    colors: ["White", "Black", "Navy", "Baby Blue"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "spanish-girls",
    name: "Spanish Girls Are Always Right",
    caption: "It's not up for debate.",
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
];
