
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scrolling to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">SB</span>
          </div>
          <span className="font-display font-bold text-xl">SupportBot</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#demo" className="text-foreground/80 hover:text-primary transition-colors">
            Demo
          </a>
          <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">
            Log in
          </a>
          <a href="#" className="btn-primary text-sm py-2">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t animate-fade-down">
          <div className="container py-4 flex flex-col gap-4">
            <nav className="flex flex-col gap-4">
              <a 
                href="#how-it-works" 
                className="text-foreground/80 hover:text-primary py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#features" 
                className="text-foreground/80 hover:text-primary py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#demo" 
                className="text-foreground/80 hover:text-primary py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </a>
              <a 
                href="#pricing" 
                className="text-foreground/80 hover:text-primary py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#faq" 
                className="text-foreground/80 hover:text-primary py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </nav>
            <div className="flex flex-col gap-3 mt-2">
              <a 
                href="#" 
                className="text-primary font-medium hover:text-primary/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </a>
              <a 
                href="#" 
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
