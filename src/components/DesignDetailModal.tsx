import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Design, Size, ALL_SIZES } from "@/types/design";
import { useIsMobile } from "@/hooks/use-mobile";

const SHOP_URL = "https://habibi-amigo.printify.me";

interface DesignDetailModalProps {
  design: Design | null;
  isOpen: boolean;
  onClose: () => void;
  selectedColorIndex: number;
  onColorChange: (index: number) => void;
}

const DesignDetailModal = ({
  design,
  isOpen,
  onClose,
  selectedColorIndex,
  onColorChange,
}: DesignDetailModalProps) => {
  const isMobile = useIsMobile();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState<Size[]>([]);

  // Reset image index when color changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedColorIndex]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setSelectedSizes([]);
    }
  }, [isOpen]);

  if (!design) return null;

  const currentColor = design.colorVariations[selectedColorIndex];
  const currentImages = currentColor?.images || [];

  const toggleSize = (size: Size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const isSizeAvailable = (size: Size) => design.availableSizes.includes(size);

  const content = (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-h-[85vh] lg:max-h-none overflow-y-auto lg:overflow-visible">
      {/* Left side - Images */}
      <div className="lg:w-1/2 space-y-4">
        {/* Main Image */}
        <div className="aspect-square bg-muted rounded-lg overflow-hidden">
          {currentImages[currentImageIndex] && (
            <img
              src={currentImages[currentImageIndex]}
              alt={`${design.name} - ${currentColor.name}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Thumbnail Gallery */}
        {currentImages.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {currentImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  index === currentImageIndex
                    ? "border-foreground"
                    : "border-transparent hover:border-muted-foreground/50"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right side - Details */}
      <div className="lg:w-1/2 space-y-6">
        {/* Title */}
        <div>
          <h2 className="font-display text-2xl lg:text-3xl text-foreground tracking-wider mb-2">
            {design.name}
          </h2>
          <p className="text-muted-foreground">{design.description}</p>
        </div>

        {/* Color Selector */}
        <div>
          <h3 className="text-sm font-medium text-foreground mb-3">
            Color: {currentColor.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {design.colorVariations.map((color, index) => (
              <button
                key={color.name}
                onClick={() => onColorChange(index)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  index === selectedColorIndex
                    ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                    : "hover:scale-110"
                }`}
                style={{ backgroundColor: color.swatchColor }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div>
          <h3 className="text-sm font-medium text-foreground mb-3">
            Select Size
          </h3>
          <div className="flex flex-wrap gap-2">
            {ALL_SIZES.map((size) => {
              const available = isSizeAvailable(size);
              const selected = selectedSizes.includes(size);
              return (
                <button
                  key={size}
                  onClick={() => available && toggleSize(size)}
                  disabled={!available}
                  className={`px-4 py-2 text-sm rounded-md border transition-all ${
                    !available
                      ? "border-muted text-muted-foreground/40 cursor-not-allowed line-through"
                      : selected
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        {design.notes && (
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground italic">
              {design.notes}
            </p>
          </div>
        )}

        {/* Shop Button */}
        <Button variant="premium" size="lg" className="w-full" asChild>
          <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
            Shop Now
          </a>
        </Button>
      </div>
    </div>
  );

  // Mobile: Use Drawer (slide-up)
  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DrawerContent className="max-h-[95vh] p-6">
          <DrawerTitle className="sr-only">{design.name}</DrawerTitle>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
          >
            <X className="h-5 w-5" />
          </button>
          {content}
        </DrawerContent>
      </Drawer>
    );
  }

  // Desktop: Use Dialog (modal)
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-6 lg:p-8 rounded-2xl">
        <DialogTitle className="sr-only">{design.name}</DialogTitle>
        {content}
      </DialogContent>
    </Dialog>
  );
};

export default DesignDetailModal;
