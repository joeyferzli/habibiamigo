import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DesignCardProps {
  name: string;
  description: string;
  images?: string[];
}

const DesignCard = ({ name, description, images = [] }: DesignCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div 
        className="group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Image - Large Square */}
        <div className="aspect-square bg-sand mb-6 overflow-hidden">
          {hasImages ? (
            <img 
              src={images[0]} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-oatmeal/50 group-hover:bg-oatmeal transition-colors duration-500">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 border-2 border-dashed border-taupe/50 flex items-center justify-center">
                  <span className="text-taupe/60 text-xs uppercase tracking-wider">Image</span>
                </div>
                <p className="text-xs text-muted-foreground italic">[Design image placeholder]</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div>
          <h3 className="font-display text-xl text-foreground tracking-wider mb-2 group-hover:tracking-widest transition-all duration-300">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>

      {/* Quick View Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background border-border">
          <DialogTitle className="sr-only">{name}</DialogTitle>
          <div className="aspect-square w-full relative">
            {hasImages ? (
              <>
                <img 
                  src={images[currentIndex]} 
                  alt={`${name} - Image ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                {hasMultipleImages && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                      onClick={goToPrevious}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                      onClick={goToNext}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-3 py-1 text-sm">
                      {currentIndex + 1} / {images.length}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-oatmeal/50">
                <div className="text-center p-12">
                  <div className="w-32 h-32 mx-auto mb-6 border-2 border-dashed border-taupe/50 flex items-center justify-center">
                    <span className="text-taupe/60 text-sm uppercase tracking-wider">Image</span>
                  </div>
                  <p className="text-muted-foreground italic">[Design image placeholder]</p>
                </div>
              </div>
            )}
          </div>
          <div className="p-6">
            <h3 className="font-display text-2xl text-foreground tracking-wider mb-2">
              {name}
            </h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DesignCard;
