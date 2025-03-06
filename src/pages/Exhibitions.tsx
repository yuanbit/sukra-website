
import Navbar from '../components/Navbar';
import Exhibitions from '../components/Exhibitions';
import Footer from '../components/Footer';

const ExhibitionsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
        </div>
        <Exhibitions />
      </main>
      <Footer />
    </div>
  );
};

export default ExhibitionsPage;
