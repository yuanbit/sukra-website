
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

interface Exhibition {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  link: string;
  featured?: boolean;
}

const exhibitions: Exhibition[] = [
  {
    id: 1,
    title: "Intuitive Painting Exhibit",
    date: "April 19, 2024",
    location: "International School of Analytical Psychology, Zürich, Switzerland",
    description: "This exhibition presents works from students of ISAPZurich’s Intuitive Painting class, led by Swiss Psychoanalyst, Lucienne Marguerat. Beginning with wide, spontaneous brushstrokes, students let the painting take the lead—allowing unconscious elements to emerge while navigating the ego’s influence. Rooted in Jungian principles, these works reveal the hidden depths of the psyche, where color and form become a bridge between inner experience and expression.",
    image: "images/rebirth.png",
    link: "#",
    featured: true
  }
];

const Exhibitions = ({ limit = exhibitions.length, homePage = false }) => {
  const navigate = useNavigate();
  const displayedExhibitions = exhibitions.slice(0, limit);

  const handleViewMore = () => {
    navigate('/exhibitions');
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Exhibitions</h2>
          <p className="section-subtitle">FEATURED SHOWCASE</p>
        </div>

        {displayedExhibitions.length === 0 ? (
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-6">No exhibitions currently scheduled. Please check back soon for upcoming shows.</p>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            {displayedExhibitions.map((exhibition) => (
              <div 
                key={exhibition.id} 
                className="animate-scale-in mb-12 last:mb-0"
              >
                <div className="glass-card overflow-hidden rounded-xl">
                  <div className="md:flex">
                    <div className="md:w-1/2 h-[500px] flex-shrink-0">
  <img
    src={exhibition.image}
    alt={exhibition.title}
    className="w-full h-full object-cover block"
    loading="lazy"
  />
</div>
                    <div className="md:w-1/2 p-8 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-2xl font-custom-heading mb-4">{exhibition.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{exhibition.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-5">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exhibition.location}</span>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{exhibition.description}</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Future exhibitions placeholder - only shows on exhibitions page */}
        {!homePage && displayedExhibitions.length > 0 && (
          <div className="mt-16 border-t border-border pt-16">
            <div className="text-center mb-8">
              <h3 className="text-xl font-custom-heading mb-2">Upcoming Exhibitions</h3>
              <p className="text-muted-foreground">Future showcases will appear here. Stay tuned for announcements.</p>
            </div>
            <div className="glass-card bg-background/50 p-10 text-center max-w-2xl mx-auto">
              <p className="text-xl mb-3 font-custom-heading">Interested in my work?</p>
              <p className="mb-6 text-muted-foreground">If you're a gallery owner or curator interested in featuring my work, please get in touch.</p>
 <a href="mailto:artsukra@gmail.com" className="btn-primary">
  Contact Me
</a>

            </div>
          </div>
        )}

        {homePage && (
          <div className="text-center mt-12">
            <button onClick={handleViewMore} className="btn-primary">
              View Exhibition Details
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Exhibitions;
