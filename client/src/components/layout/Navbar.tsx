import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Recognitions", path: "/recognitions" },
    { name: "Contact", path: "/contact" },
  ];

  const priceCalculatorLink = { name: "Price Calculator", path: "/price-calculator" };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling when menu is open
      document.body.style.overflow = 'hidden';
      // Store current scroll position
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Restore scrolling when menu is closed
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-4",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo with Text */}
          <Link to="/" className="z-50 flex items-center">
            <img 
              src="/lovable-uploads/1ebf338e-3643-4bdd-83c3-a4b06835e2c3.png" 
              alt="UnderTheArch Logo" 
              className="h-8 md:h-10"
            />
            <span className="ml-2 text-white font-medium text-xl md:text-2xl flex items-end">UnderTheArch</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-medium text-sm tracking-wider uppercase link-underline py-2",
                  location.pathname === link.path
                    ? "text-white"
                    : "text-gray-400 hover:text-white transition-colors"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={priceCalculatorLink.path}
              className={cn(
                "w-full sm:w-auto border border-white/30 bg-transparent text-white px-4 py-2",  // Reduced padding
                "rounded-md font-medium inline-flex items-center justify-center",  // Changed rounded-lg to rounded-md
                "hover:bg-white hover:text-black hover:border-white",
                "transform hover:scale-105",
                "transition-all duration-300 ease-in-out",
                "text-sm tracking-wider uppercase"
              )}
            >
              {priceCalculatorLink.name}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden",
              isOpen ? "translate-x-0" : "translate-x-full"
            )}
            style={{ position: 'fixed' }}
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-2xl font-medium tracking-wide",
                    location.pathname === link.path
                      ? "text-white"
                      : "text-gray-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
