
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
      {/* Dark background gradient - pure black */}
      <div className="absolute inset-0 z-0 bg-black" />
      
      {/* Modern light element - similar to reference image */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="relative h-48 md:h-64">
            {/* Purple-pink glow effect */}
            <div className="absolute w-full h-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-3xl rounded-full transform -translate-y-1/2"></div>
            
            {/* Light arc effect */}
            <div className="absolute w-full h-[300px] top-0 left-0 overflow-hidden">
              <div className="w-full h-[600px] bg-gradient-to-b from-pink-500/30 via-purple-400/20 to-transparent rounded-[100%] transform -translate-y-[60%]"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container-narrow relative z-20">
        <div className="max-w-3xl mx-auto text-center mt-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Automatize processos com ferramentas Low-Code e Inteligência Artificial</h1>
            <p className="text-lg md:text-xl mb-10 text-gray-100 max-w-2xl mx-auto">
              Soluções low-code e no-code que transformam a eficiência do seu negócio e potencializam a produtividade da sua equipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
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
