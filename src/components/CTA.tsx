
import { Button } from '@/components/ui/button';
import { MessageSquare, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-qiartificial-700 to-qiartificial-900 text-white">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para transformar seus processos com automação inteligente?
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
          Entre em contato agora mesmo e descubra como nossas soluções podem 
          aumentar a produtividade e reduzir custos na sua empresa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contato">
            <Button size="lg" className="bg-white text-qiartificial-800 hover:bg-gray-100">
              Solicitar demonstração <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
