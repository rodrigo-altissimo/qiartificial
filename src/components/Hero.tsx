
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-qiartificial-900 to-qiartificial-800 min-h-[80vh] flex items-center text-white">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Automatize processos com Inteligência Artificial
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Soluções low-code e no-code que transformam a eficiência do seu negócio e potencializam a produtividade da sua equipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-qiartificial-800 hover:bg-gray-100">
                Solicitar demonstração <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Nossos serviços
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-qiartificial-400 rounded-lg blur opacity-75"></div>
              <div className="relative bg-qiartificial-900 p-6 rounded-lg">
                <img 
                  src="/lovable-uploads/b4ec2253-44b1-408c-a2e9-a51a7abcfe6f.png" 
                  alt="Automação com IA" 
                  className="rounded-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
