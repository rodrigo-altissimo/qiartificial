
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-qiartificial-900 to-qiartificial-800" />
      
      {/* Flow image pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute w-full h-full">
          <svg viewBox="0 0 1920 1080" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
            <path 
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="url(#gradient)"
              fillOpacity="0.6"
            />
            <path 
              d="M0,64L48,90.7C96,117,192,171,288,170.7C384,171,480,117,576,128C672,139,768,213,864,213.3C960,213,1056,139,1152,133.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="url(#gradient)"
              fillOpacity="0.4"
              transform="translate(0, 400)"
            />
            <path 
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="url(#gradient)" 
              fillOpacity="0.3"
              transform="translate(0, 600)"
            />
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="container-narrow relative z-10">
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
