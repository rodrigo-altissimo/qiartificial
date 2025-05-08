
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [logoRetries, setLogoRetries] = useState(0);
  const logoTimestamp = useRef(new Date().getTime());
  const logoUrl = `/logo-qiartificial.png?t=${logoTimestamp.current}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Preload logo with retry mechanism
    const loadLogo = () => {
      const img = new Image();
      img.src = `/logo-qiartificial.png?t=${logoTimestamp.current}`;
      img.onload = () => {
        console.log("Logo carregado com sucesso após", logoRetries, "tentativas");
        setLogoLoaded(true);
        setLogoError(false);
      };
      img.onerror = (e) => {
        console.error("Falha ao carregar o logo", e);
        setLogoError(true);
        
        // Retry logic - try up to 3 times with increasing delays
        if (logoRetries < 3) {
          setTimeout(() => {
            logoTimestamp.current = new Date().getTime(); // Generate new timestamp
            setLogoRetries(prev => prev + 1);
            loadLogo(); // Try again
          }, 1000 * (logoRetries + 1));
        }
      };
    };
    
    loadLogo();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [logoRetries]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold text-white navbar-logo">
              {logoError ? (
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-white p-1 shadow flex items-center justify-center border border-red-500">
                  <span className="text-xs text-red-500">Erro</span>
                </div>
              ) : (
                <img 
                  src={logoUrl}
                  alt="Logo QiArtificial" 
                  className={`h-8 w-8 md:h-10 md:w-10 rounded-full bg-white p-1 shadow ${logoError ? 'border border-red-500 hidden' : ''}`}
                  onLoad={() => {
                    console.log("Logo carregado em linha");
                    setLogoLoaded(true);
                    setLogoError(false);
                  }}
                  onError={(e) => {
                    console.error("Falha ao carregar o logo em linha", e);
                    setLogoError(true);
                  }}
                />
              )}
              QiArtificial
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-6">
              <a href="#sobre" className="text-gray-300 hover:text-green-400 transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="text-gray-300 hover:text-green-400 transition-colors">
                Serviços
              </a>
              <a href="#beneficios" className="text-gray-300 hover:text-green-400 transition-colors">
                Benefícios
              </a>
              <a href="#depoimentos" className="text-gray-300 hover:text-green-400 transition-colors">
                Depoimentos
              </a>
              <a href="#contato" className="text-gray-300 hover:text-green-400 transition-colors">
                Contato
              </a>
            </div>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition transform hover:scale-105"
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
              className="p-2 rounded-md text-white"
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
          <div className="md:hidden bg-black/95 backdrop-blur-md shadow-lg rounded-lg mt-4 py-4 px-2 absolute left-4 right-4 transition-all duration-300 border border-green-900/30">
            <div className="flex flex-col space-y-4">
              <a href="#sobre" className="text-gray-300 hover:text-green-400 px-4 py-2 rounded-md" onClick={toggleMobileMenu}>
                Sobre
              </a>
              <a href="#servicos" className="text-gray-300 hover:text-green-400 px-4 py-2 rounded-md" onClick={toggleMobileMenu}>
                Serviços
              </a>
              <a href="#beneficios" className="text-gray-300 hover:text-green-400 px-4 py-2 rounded-md" onClick={toggleMobileMenu}>
                Benefícios
              </a>
              <a href="#depoimentos" className="text-gray-300 hover:text-green-400 px-4 py-2 rounded-md" onClick={toggleMobileMenu}>
                Depoimentos
              </a>
              <a href="#contato" className="text-gray-300 hover:text-green-400 px-4 py-2 rounded-md" onClick={toggleMobileMenu}>
                Contato
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2"
                onClick={toggleMobileMenu}
              >
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white shadow-md rounded-lg transition transform hover:scale-105">
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
