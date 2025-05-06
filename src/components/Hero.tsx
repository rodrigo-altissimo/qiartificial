
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
      {/* Dark background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-qiartificial-900 to-[#0c1736]" />
      
      {/* Flow diagram image */}
      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-30">
        <img 
          src="/lovable-uploads/70ec3b04-e01e-43a7-b03c-7043afb7d9a7.png" 
          alt="Flow diagram de automação" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container-narrow relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Automatize processos com Inteligência Artificial
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-100 max-w-2xl mx-auto">
              Soluções low-code e no-code que transformam a eficiência do seu negócio e potencializam a produtividade da sua equipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-qiartificial-800 hover:bg-gray-100">
                Solicitar demonstração <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Nossos serviços
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
