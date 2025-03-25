
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#top" 
          className="text-xl font-display font-bold"
          aria-label="Nandan's Portfolio"
        >
          Nandan
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#awards" className="nav-link">
            Awards
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a 
            href="https://github.com/nandansrikrishna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-primary rounded-md"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[61px] bg-background/90 backdrop-blur-lg md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen
            ? "max-h-[300px] border-b border-border shadow-lg"
            : "max-h-0"
        )}
      >
        <nav className="flex flex-col space-y-4 p-6">
          <a 
            href="#projects" 
            className="text-lg font-medium py-2"
            onClick={toggleMobileMenu}
          >
            Projects
          </a>
          <a 
            href="#awards" 
            className="text-lg font-medium py-2"
            onClick={toggleMobileMenu}
          >
            Awards
          </a>
          <a 
            href="#contact" 
            className="text-lg font-medium py-2"
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
          <a 
            href="https://github.com/nandansrikrishna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-medium py-2"
            onClick={toggleMobileMenu}
          >
            GitHub
          </a>
        </nav>
      </div>

      {/* Skip to content link */}
      <a href="#content" className="skip-link">
        Skip to Content
      </a>
    </header>
  );
};

export default Navbar;
