import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { PhoneButton } from "./ui/phone";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Components", href: "/components" },
  { name: "Doors & Cabins", href: "/doors-cabins" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BE</span>
              </div>
              <div>
                <div className="font-bold text-foreground">Bharti Elevator</div>
                <div className="text-xs text-muted-foreground">Complete Solutions</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <PhoneButton
                number="+919990917708"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +91 9990917708
              </PhoneButton>
              <Button variant="primary" size="sm">
                Get a Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t bg-background">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                      location.pathname === item.href
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-3 py-2 space-y-2">
                  <PhoneButton
                    number="+919990917708"
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    +91 9990917708
                  </PhoneButton>
                  <Button variant="primary" size="sm" className="w-full">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-steel-light border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">BE</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">Bharti Elevator</div>
                  <div className="text-xs text-muted-foreground">Complete Solutions</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Service Satisfaction Guaranteed
              </p>
              <p className="text-xs text-muted-foreground">
                GSTIN: 07BDJPK9503M2Z3
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.slice(1).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Dehradun */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Dehradun Office</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Blinkit Market, Canal Road, Dehradun</p>
                <PhoneButton number="+919990917708" className="block hover:text-primary transition-colors">
                  +91 9990917708
                </PhoneButton>
              </div>
            </div>

            {/* Contact Delhi */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Delhi Office</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Plot No. 50, Khasra No. 44/11, Nangloi, Village Safipur Ranhola, Nathan Vihar, New Delhi 110041</p>
                <PhoneButton number="+919667007059" className="block hover:text-primary transition-colors">
                  +91 9667007059
                </PhoneButton>
                <a href="mailto:bhartielevator1@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  bhartielevator1@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8">
            <div className="text-center text-sm text-muted-foreground">
              <p>© 2024 Bharti Elevator. All rights reserved.</p>
              <p className="mt-2">All dimensions are approximate and may vary by site conditions; as per relevant IS code.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        <PhoneButton
          number="+919990917708"
          className="bg-primary hover:bg-primary-hover text-primary-foreground p-3 rounded-full shadow-elevator transition-colors"
        >
          <Phone className="h-5 w-5" />
        </PhoneButton>
        <Button
          variant="primary"
          size="sm"
          className="shadow-elevator"
        >
          Get Quote
        </Button>
      </div>
    </div>
  );
};