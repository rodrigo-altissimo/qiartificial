
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
      {/* Dark background with grid pattern */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Grid overlay pattern */}
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
               backgroundSize: "40px 40px"
             }}>
        </div>
      </div>
      
      {/* Green glow effect */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="w-full h-[300px]">
          <div className="w-full h-[600px] bg-gradient-to-t from-green-500/30 via-green-400/10 to-transparent rounded-[100%] transform translate-y-1/2"></div>
        </div>
      </div>
      
      {/* Top light effect */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative h-32">
            {/* Green glow at the top */}
            <div className="absolute w-full h-[150px] bg-gradient-to-b from-green-500/30 via-green-400/10 to-transparent rounded-full transform -translate-y-1/2 blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container-narrow relative z-20">
        <div className="max-w-3xl mx-auto text-center mt-16">
          <div className="animate-fade-in space-y-6">
            <div className="flex justify-center items-center mb-6 gap-4">
              <img src="/logo-qiartificial.png" alt="Logo QiArtificial" className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-white p-2 shadow-lg" />
              <div className="px-6 py-1 bg-black/50 rounded-full border border-green-500/30 inline-flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span className="text-green-400 text-sm font-bold text-2xl md:text-3xl">QiArtificial</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Automatize <span className="text-white uppercase font-extrabold">PROCESSOS</span> com ferramentas <span className="text-green-400">Low-Code</span> e <span className="text-green-400">Inteligência Artificial</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
              Soluções low-code e no-code que transformam a eficiência do seu negócio e potencializam a produtividade da sua equipe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contato">
                <Button size="lg" className="bg-green-500 hover:bg-green-400 text-black font-medium shadow-lg shadow-green-500/30 transition-all duration-300 w-full sm:w-auto">
                  Solicitar demonstração <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#servicos">
                <Button variant="outline" size="lg" className="border-green-500/50 text-white w-full sm:w-auto">
                  Nossos serviços
                </Button>
              </a>
            </div>
            
            {/* Rating stars */}
            <div className="mt-20 pt-10">
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#F0B31A" stroke="none" className="mx-1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-400">Mais de centenas de empresas confiam em nós</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
