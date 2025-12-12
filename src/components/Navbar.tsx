import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const SHOP_URL = "https://habibi-amigo.printify.me";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Designs", path: "/designs" },
  { name: "About", path: "/about" },
  { name: "Shop", path: SHOP_URL, external: true },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Habibi Amigo" className="h-16 md:h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm tracking-wide uppercase transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-8 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-6">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-foreground/60 hover:text-foreground transition-colors tracking-wide uppercase"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-lg tracking-wide uppercase transition-colors ${
                      location.pathname === item.path
                        ? "text-foreground"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
