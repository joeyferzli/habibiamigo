interface DesignCardProps {
  name: string;
  description: string;
  image?: string;
}

const DesignCard = ({ name, description, image }: DesignCardProps) => {
  return (
    <div className="group">
      {/* Image - Large Square */}
      <div className="aspect-square bg-sand mb-6 overflow-hidden">
        {image ? (
          <img 
            src={image} 
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
  );
};

export default DesignCard;
