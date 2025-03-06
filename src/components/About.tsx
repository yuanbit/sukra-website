import { Brain, Moon, Compass, Sparkles} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title font-custom-heading">My Story</h2>
          <p className="section-subtitle font-custom-text">INTUITIVE & JUNGIAN APPROACH</p>

          {/* Circle Image */}
          <div className="flex justify-center mt-6">
            <img
              src="/images/me.png"  // Change to the correct image path
              alt="My Story"
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto prose prose-lg">
<p className="text-lg mb-6 animate-slide-in font-custom-text">
  My name is Bithiah. As a mathematician and computer scientist, I live and breathe in the realm of mind and spirit. Inspired by Carl Jung’s analytical psychology, I practice intuitive painting to ground myself—where mind meets matter, and intuition speaks through sensation.<br /><br />

  Art is my bridge between the conscious and unconscious, helping me unveil hidden aspects of the psyche and integrating them into awareness.<br /><br />

Sukra, the Hindu planet of Venus, embodies beauty, connection, and transformation—illuminating the shadow and bringing it into light. Just as intuition guides my paintings, Sukra reflects my journey of uncovering hidden truths through color and form.
</p>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="glass-card p-6 flex flex-col items-center text-center animate-scale-in">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-custom-heading mb-3">The Unconscious</h3>
              <p className="text-muted-foreground font-custom-text">
                Accessing the unconscious through spontaneous creation, allowing archetypal symbols to emerge naturally.
              </p>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center animate-scale-in" style={{animationDelay: "0.1s"}}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Moon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-custom-heading mb-3">Dreams & Symbols</h3>
              <p className="text-muted-foreground font-custom-text">
                Exploring the rich symbolism of dreams and their connection to our waking life through visual expression.
              </p>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center animate-scale-in" style={{animationDelay: "0.2s"}}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-custom-heading mb-3">Intuitive Process</h3>
              <p className="text-muted-foreground font-custom-text">
                Surrendering to the intuitive painting process, allowing the psyche to guide the hand without conscious interference.
              </p>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center animate-scale-in" style={{animationDelay: "0.3s"}}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-custom-heading mb-3">Individuation</h3>
              <p className="text-muted-foreground font-custom-text">
                Viewing the artistic journey as parallel to Jung's individuation process—the integration of all aspects of the self.
              </p>
            </div>
          </div>

          <p className="text-lg animate-slide-in font-custom-text" style={{animationDelay: "0.4s"}}>
            Through my work, I invite viewers to embark on their own journey of self-discovery, to recognize the symbols and patterns
            that emerge from their unconscious, and to engage with art as a means of psychological integration and healing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
