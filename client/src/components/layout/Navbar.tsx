
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
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

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
          {/* Logo */}
          <Link to="/" className="z-50">
            <img 
              src="/lovable-uploads/1ebf338e-3643-4bdd-83c3-a4b06835e2c3.png" 
              alt="UnderTheArch Logo" 
              className="h-8 md:h-10"
            />
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
              "fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden",
              isOpen ? "translate-x-0" : "translate-x-full"
            )}
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
