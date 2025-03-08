
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
  size: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Descent into the Unconscious",
    year: "2023",
    description: "left, non-dominant finger painting with gouache",
    image: "images/webp/whale.webp",
    size: "100 x 70 cm"
  },
  {
    id: 2,
    title: "Alps",
    year: "2024",
    description: "left, non-dominant finger painting with gouache",
    image: "images/webp/mountain.webp",
    size: "100 x 70 cm"
  },
  {
    id: 3,
    title: "Dismemberment & Golden Rebirth",
    year: "2022",
    description: "Finger, hand, paintbrush, collage with gouache",
    image: "images/webp/rebirth.webp",
    size: "100 x 70 cm"
  },
  {
    id: 4,
    title: "Arctic Dance",
    year: "2022",
    description: "Paintbrush with gouache",
    image: "images/webp/dance.webp",
    size: "70 x 100 cm"
  },
                  {
    id: 11,
    title: "Flight in the Tempest of the Night",
    year: "2024",
    description: "left, non-dominant finger painting with gouache",
    image: "images/webp/painting14.webp",
    size: "100 x 70 cm"
  },
                    {
    id: 12,
    title: "Mountain Pass",
    year: "2024",
    description: "left, non-dominant finger painting with gouache",
    image: "images/webp/painting16.webp",
    size: "100 x 70 cm"
  },
    {
    id: 5,
    title: "Internal Flight",
    year: "2022",
    description: "Finger, hand, paintbrush with gouache",
    image: "images/webp/painting7.webp",
    size: "100 x 70 cm"
  },
      {
    id: 6,
    title: "Dragon Black",
    year: "2022",
    description: "Finger, hand, paintbrush with gouache",
    image: "images/webp/painting6.webp",
    size: "100 x 70 cm"
  },
        {
    id: 7,
    title: "Moody Tides",
    year: "2022",
    description: "Finger, hand, paintbrush with gouache",
    image: "images/webp/painting9.webp",
    size: "100 x 70 cm"
  },
          {
    id: 8,
    title: "Black Lagoon",
    year: "2022",
    description: "Finger, hand, paintbrush with gouache",
    image: "images/webp/painting5.webp",
    size: "100 x 70 cm"
  },
            {
    id: 9,
    title: "Kingdom of the Sun",
    year: "2023",
    description: "Finger, hand, paintbrush with gouache",
    image: "images/webp/painting8.webp",
    size: "100 x 70 cm"
  },
              {
    id: 10,
    title: "Mensageiro do Anjo Azul",
    year: "2023",
    description: "Finger, hand, paintbrush with gouache",
    image: "images/webp/painting10.webp",
    size: "70 x 100 cm"
  },
     { id: 13,
    title: "Steinadler",
    year: "2024",
    description: "left, non-dominant finger painting with gouache",
    image: "images/webp/painting15.webp",
    size: "100 x 70 cm"
  },
       { id: 14,
    title: "Lower World & Upper World",
    year: "2023",
    description: "Finger, hand, paintbrush with gouache",
    image: "images/webp/painting4.webp",
    size: "70 x 100 cm"
  },

       { id: 15,
    title: "Beyond Intelligence",
    year: "2023",
    description: "Paintbrush with gouache",
    image: "images/webp/painting13.webp",
    size: "70 x 100 cm"
  },

       { id: 16,
    title: "A Winter Night's Dream - Part 1",
    year: "2022",
    description: "Paintbrush with gouache",
    image: "images/webp/painting11.webp",
    size: "50 x 35 cm"
  },
        { id: 17,
    title: "A Winter Night's Dream - Part 2",
    year: "2022",
    description: "Paintbrush with gouache",
    image: "images/webp/painting12.webp",
    size: "50 x 35 cm"
  }

];

const Gallery = ({ limit = artworks.length, homePage = false }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();
  const displayedArtworks = artworks.slice(0, limit);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = artworks.map((artwork) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = artwork.image;
          img.onload = resolve;
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  // Open the popup
  const openPopup = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setPopupVisible(true);
  };

  // Close the popup
  const closePopup = () => {
    setPopupVisible(false);
    setTimeout(() => {
      setSelectedArtwork(null);
    }, 300); // Delay for animation
  };

  // Navigate Left & Right
  const handleNavigation = (direction: "left" | "right") => {
    if (!selectedArtwork) return;
    const currentIndex = artworks.findIndex((art) => art.id === selectedArtwork.id);
    const newIndex = direction === "left"
      ? (currentIndex - 1 + artworks.length) % artworks.length
      : (currentIndex + 1) % artworks.length;
    setSelectedArtwork(artworks[newIndex]);
  };

  return (
    <section className={`py-16 md:py-24 px-4 ${homePage ? 'bg-white' : ''}`}>
      <div className="container mx-auto">
        {homePage && (
          <div className="text-center mb-12">
            <h2 className="section-title">Intuitive Paintings</h2>
            <p className="section-subtitle">A Portal to the Inner World</p>
          </div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 transition-opacity duration-1000 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {displayedArtworks.map((artwork) => (
            <div key={artwork.id} className="group h-[400px] md:h-[500px] cursor-pointer" onClick={() => openPopup(artwork)}>
              <img
                src={artwork.image}
                alt={artwork.title}
                className="art-image animate-image-fade-in"
                loading="lazy"
              />
              <div className="art-overlay">
                <h3 className="text-white text-xl font-serif mb-1">{artwork.title}</h3>
                <p className="text-white/80 text-sm mb-2">{artwork.year} &nbsp;·&nbsp; {artwork.size}</p>
                <p className="text-white/90">{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>

        {homePage && (
          <div className="text-center mt-12">
            <button onClick={() => navigate('/gallery')} className="btn-primary">
              View Full Gallery
            </button>
          </div>
        )}

        {/* Fullscreen Popup with Navigation */}
        {selectedArtwork && (
          <div
            className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300 ${popupVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={closePopup}
          >
            <div className="relative max-w-3xl w-full p-4 bg-white/10 backdrop-blur-xl rounded-lg shadow-lg transform transition-transform duration-300 scale-95">


              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold"
                onClick={closePopup}
              >
                &times;
              </button>

              {/* Image & Details */}
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />

              <div className="text-center mt-4 text-white">
                <h2 className="text-2xl text-white">{selectedArtwork.title}</h2>
                <p className="text-sm text-white">{selectedArtwork.year} · {selectedArtwork.size}</p>
                <p className="mt-2 text-white">{selectedArtwork.description}</p>
              </div>

              {/* Left & Right Navigation Arrows */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
                onClick={(e) => { e.stopPropagation(); handleNavigation("left"); }}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
                onClick={(e) => { e.stopPropagation(); handleNavigation("right"); }}
              >
                <ChevronRight className="w-8 h-8" />
              </button>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
