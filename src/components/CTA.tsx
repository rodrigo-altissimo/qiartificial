
import { Button } from '@/components/ui/button';
import { MessageSquare, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* Dark background with grid pattern */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
               backgroundSize: "40px 40px"
             }}>
        </div>
      </div>
      
      {/* Green glow effects */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="w-full h-[200px]">
          <div className="w-full h-[400px] bg-gradient-to-t from-green-500/30 via-green-400/10 to-transparent rounded-[100%] transform translate-y-1/2"></div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="w-full h-[200px]">
          <div className="w-full h-[400px] bg-gradient-to-b from-green-500/30 via-green-400/10 to-transparent rounded-[100%] transform -translate-y-1/2"></div>
        </div>
      </div>
      
      <div className="container-narrow relative z-20 text-center">
        <div className="backdrop-blur-sm bg-black/30 rounded-2xl p-10 border border-green-900/30 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar seus processos com <span className="text-green-400">automação inteligente</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Entre em contato agora mesmo e descubra como nossas soluções podem 
            aumentar a produtividade e reduzir custos na sua empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contato">
              <Button size="lg" className="bg-green-500 text-black font-medium hover:bg-green-400 shadow-lg shadow-green-500/30 transition-all duration-300">
                Solicitar demonstração <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="border-green-500/50 text-white hover:bg-green-500/10">
                <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
