import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';

const NavbarDesktopMenu = () => {
  return (
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
          variant="outline"
          size="lg"
          className="border-green-700/80 text-white bg-green-700/60 hover:bg-green-500/80 font-semibold w-full sm:w-auto transition-all duration-300 shadow-md shadow-green-500/10 flex items-center gap-2 px-6 py-2 rounded-lg"
        >
          <Smartphone className="mr-2 h-4 w-4" /> WhatsApp
        </Button>
      </a>
    </div>
  );
};

export default NavbarDesktopMenu;
