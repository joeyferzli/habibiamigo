import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Design } from "@/types/design";
import DesignDetailModal from "./DesignDetailModal";

interface DesignCardProps {
  design: Design;
}

const DesignCard = ({ design }: DesignCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Randomize initial color on each mount for dynamic display
  const [selectedColorIndex, setSelectedColorIndex] = useState(() =>
    Math.floor(Math.random() * design.colorVariations.length)
  );

  const currentColor = design.colorVariations[selectedColorIndex];
  const thumbnailImage = currentColor?.images[0];

  const handleColorChange = (index: number) => {
    setSelectedColorIndex(index);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="group">
        {/* Image - Large Square */}
        <div
          className="aspect-square bg-muted mb-4 overflow-hidden relative cursor-pointer rounded-lg"
          onClick={handleOpenModal}
        >
          {/* Stock Badge */}
          <div
            className={`absolute top-3 right-3 z-10 px-2 py-1 text-[10px] uppercase tracking-wider rounded ${
              design.inStock
                ? "bg-muted/80 text-muted-foreground"
                : "bg-muted text-muted-foreground/60"
            }`}
          >
            {design.inStock ? "In Stock" : "Out of Stock"}
          </div>

          {thumbnailImage ? (
            <img
              src={thumbnailImage}
              alt={design.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <span className="text-muted-foreground text-xs uppercase tracking-wider">
                No Image
              </span>
            </div>
          )}
        </div>

        {/* Color Swatches */}
        {design.colorVariations.length >= 1 && (
          <div className="flex gap-1.5 mb-3">
            {design.colorVariations.map((color, index) => (
              <button
                key={color.name}
                onClick={() => handleColorChange(index)}
                className={`w-5 h-5 rounded-full border transition-all ${
                  index === selectedColorIndex
                    ? "ring-1 ring-foreground ring-offset-1 ring-offset-background"
                    : "hover:scale-110"
                }`}
                style={{ backgroundColor: color.swatchColor }}
                title={color.name}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-display text-xl text-foreground tracking-wider group-hover:tracking-widest transition-all duration-300">
            {design.name}
          </h3>
          <p className="text-muted-foreground text-sm">{design.caption}</p>

          {/* View Details Button */}
          <Button
            variant="outline"
            size="sm"
            className="mt-3 text-xs px-3 py-1 h-7"
            onClick={handleOpenModal}
          >
            View Details
          </Button>
        </div>
      </div>

      {/* Detail Modal */}
      <DesignDetailModal
        design={design}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedColorIndex={selectedColorIndex}
        onColorChange={handleColorChange}
      />
    </>
  );
};

export default DesignCard;
