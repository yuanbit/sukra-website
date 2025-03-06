import { Brain, Moon, Compass, Sparkles} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black py-6 text-center">
      <div className="container mx-auto">

        <p className="text-lg text-gray-600 mt-2">artsukra@gmail.com</p>
        <p className="text-sm text-gray-600 mt-2">© {currentYear} SUKRA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
