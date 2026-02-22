import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-display text-primary mb-4">Aseem Design Studios</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Plan · Design · Shape — Transforming spaces since 2010. Gurugram's trusted interior design partner.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-body font-semibold uppercase tracking-wider text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Services", "Portfolio", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-").replace("us", "").replace("--", "")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-body font-semibold uppercase tracking-wider text-primary mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary shrink-0" />
                Gurugram, Haryana, India
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary shrink-0" />
                +91 98XXX XXXXX
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary shrink-0" />
                info@aseemdesigns.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Aseem Design Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
