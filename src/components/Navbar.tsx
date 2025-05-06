
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Smartphone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className={`text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
              Qiartificial
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-6">
              <a href="#sobre" className={`hover:text-qiartificial-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                Sobre
              </a>
              <a href="#servicos" className={`hover:text-qiartificial-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                Serviços
              </a>
              <a href="#beneficios" className={`hover:text-qiartificial-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                Benefícios
              </a>
              <a href="#depoimentos" className={`hover:text-qiartificial-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                Depoimentos
              </a>
              <a href="#contato" className={`hover:text-qiartificial-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                Contato
              </a>
            </div>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant={isScrolled ? "default" : "outline"} 
                className={isScrolled 
                  ? "bg-green-600 hover:bg-green-700 text-white font-medium shadow-md transition-all duration-300 hover:scale-105" 
                  : "border-white text-white hover:bg-white/10 border-2 hover:scale-105 transition-all duration-300"
                }
                size="sm"
              >
                <Smartphone className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-4 py-4 px-2 absolute left-4 right-4 transition-all duration-300">
            <div className="flex flex-col space-y-4">
              <a href="#sobre" className="text-gray-700 hover:text-qiartificial-500 px-4 py-2 rounded-md" onClick={toggleMobileMenu}>
                Sobre
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-qiartificial-500 px-4 py-2 rounded-md" onClick={toggleMobileMenu}>
                Serviços
              </a>
              <a href="#beneficios" className="text-gray-700 hover:text-qiartificial-500 px-4 py-2 rounded-md" onClick={toggleMobileMenu}>
                Benefícios
              </a>
              <a href="#depoimentos" className="text-gray-700 hover:text-qiartificial-500 px-4 py-2 rounded-md" onClick={toggleMobileMenu}>
                Depoimentos
              </a>
              <a href="#contato" className="text-gray-700 hover:text-qiartificial-500 px-4 py-2 rounded-md" onClick={toggleMobileMenu}>
                Contato
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2"
                onClick={toggleMobileMenu}
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium shadow-md transition-all duration-300">
                  <Smartphone className="mr-2 h-4 w-4" /> WhatsApp
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
