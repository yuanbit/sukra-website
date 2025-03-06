import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Check if we're on the homepage
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl transition-all duration-300 ${
        scrolled ? "bg-white/5 shadow-md" : "bg-background/0"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center space-x-4 transition-colors duration-300 ${
            scrolled || !isHomePage ? "text-black" : "text-white"
          }`}
        >
          <img
            src={scrolled || !isHomePage ? "/images/logo-dark.png" : "/images/logo-light.png"}
            alt="SUKRA Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="font-serif text-lg md:text-2xl font-medium">SUKRA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/*<Link
  to="/about"
  className={`nav-link py-2 transition-colors duration-300 ${
    scrolled ? "text-black hover:text-black/80" : "text-white hover:text-white/80"
  }`}
>
  About
</Link>*/}


          <Link
            to="/gallery"
            className={`nav-link py-2 transition-colors duration-300 ${
              isHomePage ? (scrolled ? "text-black" : "text-white") : "text-black"
            } hover:text-black/80`}
          >
            Gallery
          </Link>

          <Link
            to="/exhibitions"
            className={`nav-link py-2 transition-colors duration-300 ${
              isHomePage ? (scrolled ? "text-black" : "text-white") : "text-black"
            } hover:text-black/80`}
          >
            Exhibitions
          </Link>

          <Link
            to="/commission"
            className={`nav-link py-2 transition-colors duration-300 ${
              isHomePage ? (scrolled ? "text-black" : "text-white") : "text-black"
            } hover:text-black/80`}
          >
            Commission
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            scrolled || !isHomePage ? "text-black" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

     {/* Mobile Navigation Menu */}
{menuOpen && (
  <div
    className={`md:hidden absolute top-20 left-0 w-full backdrop-blur-3xl z-50 transition-all duration-300 shadow-lg ${
      location.pathname === "/" ? "bg-black/30 text-white" : "bg-white text-black"
    }`}
  >
    <div className="flex flex-col items-center py-6 space-y-4">
      <Link to="/gallery" onClick={() => setMenuOpen(false)} className="text-lg">
        Gallery
      </Link>
      <Link to="/exhibitions" onClick={() => setMenuOpen(false)} className="text-lg">
        Exhibitions
      </Link>
      <Link to="/commission" onClick={() => setMenuOpen(false)} className="text-lg">
        Commission
      </Link>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
