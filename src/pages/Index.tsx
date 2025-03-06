
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Commission from '../components/Commission';
import Exhibitions from '../components/Exhibitions';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Gallery limit={4} homePage={true} />
        <About />
        <Exhibitions limit={2} homePage={true} />
        <Commission homePage={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
