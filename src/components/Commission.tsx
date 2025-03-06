
import { useNavigate } from 'react-router-dom';
import { Palette, Clock, Mail, CheckCircle } from 'lucide-react';

const Commission = ({ homePage = false }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/commission');
  };

  return (
    <section className={`py-16 md:py-24 px-4 ${homePage ? 'bg-white' : ''}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Commission a Painting</h2>
          <p className="section-subtitle">CUSTOM INTUITIVE ARTWORK</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-12">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src="images/webp/painting15.webp"
                  alt="Commission artwork"
                  className="w-full h-full object-cover animate-image-fade-in"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-serif mb-4">Personal Intuitive Art</h3>
              <p className="text-muted-foreground mb-6">
                Each commissioned piece is created through an intuitive process that taps into the collective unconscious, resulting in a deeply personal artwork that resonates with your unique journey.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Personalized Consultation</h4>
                    <p className="text-sm text-muted-foreground">Initial discussion to understand your vision and intentions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Jungian Approach</h4>
                    <p className="text-sm text-muted-foreground">Incorporating archetypal elements and symbolic representations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Various Sizes Available</h4>
                    <p className="text-sm text-muted-foreground">From intimate 12" x 12" to statement 48" x 60" pieces</p>
                  </div>
                </div>
              </div>

              {homePage ? (
                <button onClick={handleViewMore} className="btn-primary self-start">
                  Learn More
                </button>
              ) : (
               <a href="mailto:artsukra@gmail.com" className="btn-primary self-start">
                  Request Commission
                </a>
              )}
            </div>
          </div>

          {!homePage && (
            <div className="mt-16 pt-16 border-t">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-serif mb-2">Commission Process</h3>
                <p className="text-muted-foreground">How we'll work together to create your unique piece</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card p-6 flex flex-col items-center text-center animate-scale-in">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-serif mb-2">Initial Consultation</h4>
                  <p className="text-muted-foreground">
                    We'll discuss your intentions, themes, and any specific elements you'd like incorporated.
                  </p>
                </div>

                <div className="glass-card p-6 flex flex-col items-center text-center animate-scale-in" style={{animationDelay: "0.1s"}}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-serif mb-2">Creation</h4>
                  <p className="text-muted-foreground">
                    I'll enter into an intuitive painting process with your intentions as a guiding energy.
                  </p>
                </div>

                <div className="glass-card p-6 flex flex-col items-center text-center animate-scale-in" style={{animationDelay: "0.2s"}}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-serif mb-2">Completion & Delivery</h4>
                  <p className="text-muted-foreground">
                    Your finished artwork will be professionally packaged and shipped to your location.
                  </p>
                </div>
              </div>


            </div>
          )}
        </div>
      </div>
      {/* Centered "Request Commission" Button */}
<div className="text-center mt-12">
 <a href="mailto:artsukra@gmail.com" className="btn-primary self-start">
                  Request Commission
                </a>
</div>

    </section>
  );
};

export default Commission;
