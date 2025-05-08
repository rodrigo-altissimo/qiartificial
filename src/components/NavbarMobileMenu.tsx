
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';

const NavbarMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
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
    </>
  );
};

export default NavbarMobileMenu;
