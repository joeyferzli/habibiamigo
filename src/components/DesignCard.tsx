import { useState } from "react";
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
  const isLocked = design.comingSoon;

  const handleColorChange = (index: number) => {
    setSelectedColorIndex(index);
  };

  const handleOpenModal = () => {
    if (isLocked) return;
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="group">
        {/* Image - Large Square */}
        <div
          className={`aspect-square bg-muted mb-4 overflow-hidden relative border border-border ${
            isLocked ? "cursor-default" : "cursor-pointer"
          }`}
          onClick={handleOpenModal}
        >
          {/* Badge */}
          <div
            className={`absolute top-0 right-0 z-10 px-3 py-1.5 text-[10px] uppercase tracking-widest font-medium ${
              isLocked
                ? "bg-rust text-rust-foreground"
                : design.inStock
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground/70"
            }`}
          >
            {isLocked ? "Coming Soon" : design.inStock ? "In Stock" : "Out of Stock"}
          </div>

          {thumbnailImage ? (
            <img
              src={thumbnailImage}
              alt={design.name}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isLocked
                  ? "grayscale blur-sm scale-105 opacity-70"
                  : "group-hover:scale-105"
              }`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <span className="text-muted-foreground text-xs uppercase tracking-wider">
                No Image
              </span>
            </div>
          )}

          {/* Locked overlay */}
          {isLocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/10">
              <span className="font-display text-2xl md:text-3xl text-background bg-foreground/90 px-6 py-2 tracking-widest">
                SEASON 2
              </span>
            </div>
          )}

          {/* Hover reveal bar */}
          {!isLocked && (
            <div className="absolute bottom-0 left-0 right-0 bg-rust text-rust-foreground text-center text-xs uppercase tracking-widest py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              View Details
            </div>
          )}
        </div>

        {/* Color Swatches */}
        {!isLocked && design.colorVariations.length >= 1 && (
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
        <div className="space-y-1">
          <h3 className="font-display text-xl text-foreground tracking-wider group-hover:text-rust transition-colors duration-300">
            {design.name}
          </h3>
          <p className="text-muted-foreground text-sm">
            {isLocked ? "Dropping soon" : design.caption}
          </p>
        </div>
      </div>

      {/* Detail Modal */}
      {!isLocked && (
        <DesignDetailModal
          design={design}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedColorIndex={selectedColorIndex}
          onColorChange={handleColorChange}
        />
      )}
    </>
  );
};

export default DesignCard;
