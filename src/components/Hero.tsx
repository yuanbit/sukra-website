
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
<div className="absolute inset-0 bg-[url('/images/webp/hero.png')] bg-cover bg-center">
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/60 to-black/30"></div>
</div>


      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-4">
          Art from the Inner World
        </h1>
        <p className="text-lg md:text-3xl text-white/90 mb-8 max-w-2xl mx-auto">
          Mediating between the conscious and unconscious through color and form.
        </p>
        <a href="/gallery" className="bg-white text-black px-6 py-3 rounded-md shadow-md border border-black hover:bg-gray-200 transition-all">
  View Gallery
</a>

      </div>
      
      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
