interface DesignCardProps {
  name: string;
  description: string;
  imagePlaceholder?: string;
}

const DesignCard = ({ name, description, imagePlaceholder }: DesignCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Placeholder */}
      <div className="aspect-square bg-sand/50 flex items-center justify-center overflow-hidden">
        <div className="text-muted-foreground text-center p-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-taupe/30 flex items-center justify-center">
            <span className="text-3xl">👕</span>
          </div>
          <p className="text-sm italic">{imagePlaceholder || "Design image placeholder"}</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default DesignCard;
