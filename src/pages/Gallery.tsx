
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
              Through meditation, I quiet the mind and awaken the unconscious—activating images and symbols born from intuition and feelings. With my left, non-dominant fingers, I surrender to the body's movements, allowing color and form to flow freely, unfiltered and raw. Each stroke is a mediation between the conscious and unconscious.
            </p>
          </div>
        </div>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
