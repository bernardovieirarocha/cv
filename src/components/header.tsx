import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "Sobre", number: "01" },
    { href: "#skills", label: "Skills", number: "02" },
    { href: "#projects", label: "Projetos", number: "03" },
    { href: "#contact", label: "Contato", number: "04" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="container px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-xl font-bold group">
          <span className="text-primary">&lt;</span>
          <span className="text-foreground group-hover:text-primary transition-colors">BR</span>
          <span className="text-primary">/&gt;</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary">{link.number}.</span> {link.label}
            </a>
          ))}
          <Button variant="outline" size="sm" asChild>
            <Link to="/resume">Currículo</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-background/95 backdrop-blur-lg z-40">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="font-mono text-lg text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-primary">{link.number}.</span> {link.label}
              </a>
            ))}
            <Button variant="outline" size="lg" asChild>
              <Link to="/resume" onClick={() => setIsMobileMenuOpen(false)}>Currículo</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
