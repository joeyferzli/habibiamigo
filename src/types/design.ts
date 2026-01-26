// Design Types for Habibi Amigo Collection
// All fields are editable - modify values directly in the designs data

export interface ColorVariation {
  /** Color name displayed to user (e.g., "Black", "White", "Navy") */
  name: string;
  /** CSS color value for the swatch (e.g., "#000000", "hsl(0 0% 0%)") */
  swatchColor: string;
  /** Images for this color variation - first image is the primary */
  images: string[];
}

export interface Design {
  /** Unique identifier for the design */
  id: string;
  /** Design name - displayed on card and modal */
  name: string;
  /** Short caption for the grid card */
  caption: string;
  /** Full description shown in the modal */
  description: string;
  /** Color variations with their respective images */
  colorVariations: ColorVariation[];
  /** Index of the default/highlighted color (0-based) */
  defaultColorIndex: number;
  /** Available sizes for this design */
  availableSizes: Size[];
  /** Optional notes about fit, fabric, etc. */
  notes?: string;
  /** Stock status */
  inStock: boolean;
}

export type Size = "S" | "M" | "L" | "XL";

export const ALL_SIZES: Size[] = ["S", "M", "L", "XL"];
