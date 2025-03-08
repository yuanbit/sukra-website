import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        const heroHeight = window.innerHeight;
        setIsPastHero(window.scrollY > heroHeight - 80);
      } else {
        setIsPastHero(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const getLinkClass = () => {
    if (isHomePage && !isPastHero) {
      return "nav-link py-2 text-white hover:text-white after:bg-white";
    }
    return "nav-link py-2";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isPastHero ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-4">
          {/* Dynamically Change Logo */}
          <img
            src={isHomePage && !isPastHero ? "/images/logo-light.png" : "/images/logo-dark.png"}
            alt="Logo"
            className="h-8 w-auto transition-opacity duration-300"
          />
          <span
            className={`font-serif text-lg md:text-2xl font-medium transition-colors duration-300 ${
              isHomePage && !isPastHero ? "text-white" : "text-foreground"
            }`}
          >
            SUKRA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className={getLinkClass()}>About</Link>
          <Link to="/gallery" className={getLinkClass()}>Gallery</Link>
          <Link to="/exhibitions" className={getLinkClass()}>Exhibitions</Link>
          <Link to="/commission" className={getLinkClass()}>Commission</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            isHomePage && !isPastHero ? "text-white" : "text-foreground"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="nav-link py-2 text-lg">Home</Link>
            <Link to="/gallery" className="nav-link py-2 text-lg">Gallery</Link>
            <Link to="/exhibitions" className="nav-link py-2 text-lg">Exhibitions</Link>
            <Link to="/commission" className="nav-link py-2 text-lg">Commission</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
