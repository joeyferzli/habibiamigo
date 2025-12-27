import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Eye, EyeOff } from "lucide-react";
import DesignCard from "@/components/DesignCard";
import { Design } from "@/types/design";

const SECRET_PASSWORD = "SideQuest69";
const SHOP_URL = "https://habibi-amigo.printify.me";

// Secret designs will be added here
const secretDesigns: Design[] = [];

const SecretDesigns = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [stockFilter, setStockFilter] = useState<"all" | "in" | "out">("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Wrong password. Try again, amigo.");
    }
  };

  const filteredDesigns = secretDesigns.filter((design) => {
    if (stockFilter === "all") return true;
    if (stockFilter === "in") return design.inStock;
    if (stockFilter === "out") return !design.inStock;
    return true;
  });

  // Password Gate
  if (!isAuthenticated) {
    return (
      <Layout>
        <section className="min-h-screen flex items-center justify-center py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-md mx-auto text-center">
              {/* Lock Icon */}
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-muted flex items-center justify-center">
                <Lock className="w-10 h-10 text-muted-foreground" />
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                SECRET DESIGNS
              </h1>
              <p className="text-muted-foreground mb-8">
                Enter the password to access exclusive Habibi Amigo drops.
              </p>

              {/* Password Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter password..."
                    className="pr-12 text-center text-lg h-14"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {error && (
                  <p className="text-destructive text-sm animate-fade-in">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="premium"
                  size="lg"
                  className="w-full"
                >
                  Unlock
                </Button>
              </form>

              <p className="text-muted-foreground/60 text-xs mt-8">
                Don't have the password? Stay tuned for exclusive drops.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Authenticated View
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 min-h-[40vh] flex items-center overflow-hidden bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-muted-foreground" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Exclusive Access
              </span>
            </div>
            <h1 className="font-display text-foreground mb-8 opacity-0 animate-fade-up text-3xl md:text-7xl text-left">
              SECRET DESIGNS
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl opacity-0 animate-fade-up delay-100">
              Welcome to the vault. These are the designs that only real habibis get to see.
            </p>
          </div>
        </div>
      </section>

      {/* Designs Grid */}
      <section className="py-16 pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          {secretDesigns.length > 0 ? (
            <>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredDesigns.map((design, index) => (
                  <div
                    key={design.id}
                    className="opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <DesignCard design={design} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Empty State */
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-muted flex items-center justify-center">
                <Lock className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                COMING SOON
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                The vault is being stocked with exclusive designs. Check back soon for secret drops that only true habibis will get access to.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                  Shop Regular Collection
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SecretDesigns;