import { Link } from "react-router-dom";
const SHOP_URL = "https://habibi-amigo.printify.me";
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="font-display text-3xl text-foreground tracking-widest mb-6">
              HABIBI AMIGO
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">T-shirts by friends, for friends</p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-display text-lg text-foreground tracking-wider mb-6">NAVIGATE</h4>
            <ul className="space-y-3">
              {[{
              name: "Home",
              path: "/"
            }, {
              name: "Designs",
              path: "/designs"
            }, {
              name: "Shop",
              path: SHOP_URL,
              external: true
            }].map(item => item.external ? <li key={item.name}>
                    <a href={item.path} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item.name}
                    </a>
                  </li> : <li key={item.name}>
                    <Link to={item.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item.name}
                    </Link>
                  </li>)}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h4 className="font-display text-lg text-foreground tracking-wider mb-6">SUPPORT</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h4 className="font-display text-lg text-foreground tracking-wider mb-6">SOCIAL</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.instagram.com/habibixamigo/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs text-center">
            © {new Date().getFullYear()} Habibi Amigo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;