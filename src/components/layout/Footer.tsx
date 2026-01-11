import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-mineral-gold to-mineral-copper flex items-center justify-center">
                <span className="font-display text-xl text-primary-foreground">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground tracking-tight">
                  NAGARAJUNA
                </span>
                <span className="text-xs text-muted-foreground tracking-widest uppercase">
                  Minerals
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Powering Industry with Earth's Finest Resources. Your trusted partner for
              premium industrial minerals and bulk supply solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About Us", "Products", "Material Management", "Logistics", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-muted-foreground hover:text-mineral-gold transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Minerals */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Our Minerals
            </h4>
            <ul className="space-y-3">
              {["Iron Ore", "Bauxite", "Limestone", "Quartz", "Feldspar", "Coal"].map(
                (mineral) => (
                  <li key={mineral}>
                    <Link
                      to="/products"
                      className="text-sm text-muted-foreground hover:text-mineral-gold transition-colors"
                    >
                      {mineral}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-mineral-gold mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Industrial Area, Sector 12,<br />
                  Hyderabad, Telangana 500032
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-mineral-gold" />
                <span className="text-sm text-muted-foreground">+91 40 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-mineral-gold" />
                <span className="text-sm text-muted-foreground">
                  info@nagarajunaminerals.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nagarajuna Minerals. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-mineral-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-mineral-gold transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
