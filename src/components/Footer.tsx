
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative text-gray-300 overflow-hidden">
      {/* Dark background with grid pattern */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
               backgroundSize: "40px 40px"
             }}>
        </div>
      </div>
      
      {/* Green glow effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="w-full h-[100px]">
          <div className="w-full h-[200px] bg-gradient-to-t from-green-500/30 via-green-400/10 to-transparent rounded-[100%] transform translate-y-1/2"></div>
        </div>
      </div>
      
      <div className="container mx-auto py-12 px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Qiartificial</h3>
            <p className="mb-4 max-w-md">
              Soluções em automação e inteligência artificial para otimizar processos
              empresariais utilizando ferramentas low-code e no-code.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="bg-green-500/20 hover:bg-green-500/40 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 fill-current text-green-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-green-500/20 hover:bg-green-500/40 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5 fill-current text-green-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-green-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-green-400 transition-colors">Serviços</a></li>
              <li><a href="#beneficios" className="hover:text-green-400 transition-colors">Benefícios</a></li>
              <li><a href="#depoimentos" className="hover:text-green-400 transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-green-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-400" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-400" />
                <span>contato@qiartificial.com.br</span>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-green-400" />
                <a 
                  href="https://wa.me/5511999999999" 
                  className="hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-900/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Qiartificial. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-green-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-green-400 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
