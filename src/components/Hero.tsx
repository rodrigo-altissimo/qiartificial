
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
      {/* Dark background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-qiartificial-900 to-[#0c1736]" />
      
      {/* Flow diagram graphic */}
      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-20">
        <div className="w-full max-w-6xl overflow-hidden">
          <svg viewBox="0 0 1200 500" className="w-full" preserveAspectRatio="xMidYMid meet">
            {/* Grid background */}
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Connection lines */}
            <g fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.4">
              <path d="M 120 100 L 220 100" />
              <path d="M 320 100 L 420 100" />
              <path d="M 520 100 L 620 100" />
              <path d="M 720 100 L 820 100" />
              <path d="M 920 100 L 1020 100" />
              
              <path d="M 120 250 L 220 250" />
              <path d="M 320 250 L 420 250" />
              
              <path d="M 120 400 L 220 400" />
              <path d="M 320 400 L 420 400" />
              
              <path d="M 820 100 C 870 100 870 250 820 250" />
              <path d="M 520 250 C 570 250 570 400 520 400" />
              <path d="M 720 250 L 820 250" />
              <path d="M 920 250 L 1020 250" />
              
              <path d="M 1020 250 C 1070 250 1070 100 1120 100" />
            </g>
            
            {/* Nodes */}
            <g>
              {/* First row */}
              <rect x="50" y="70" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="250" y="70" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="450" y="70" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="650" y="70" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="850" y="70" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="1050" y="70" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              
              {/* Second row */}
              <rect x="50" y="220" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="250" y="220" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="450" y="220" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="650" y="220" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="850" y="220" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="1050" y="220" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              
              {/* Third row */}
              <rect x="50" y="370" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="250" y="370" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="450" y="370" width="70" height="60" rx="5" fill="#1a365d" stroke="#38bdf8" strokeWidth="1.5" />
              
              {/* Node connectors/circles */}
              <circle cx="120" cy="100" r="5" fill="#38bdf8" />
              <circle cx="320" cy="100" r="5" fill="#38bdf8" />
              <circle cx="520" cy="100" r="5" fill="#38bdf8" />
              <circle cx="720" cy="100" r="5" fill="#38bdf8" />
              <circle cx="920" cy="100" r="5" fill="#38bdf8" />
              
              <circle cx="120" cy="250" r="5" fill="#38bdf8" />
              <circle cx="320" cy="250" r="5" fill="#38bdf8" />
              <circle cx="520" cy="250" r="5" fill="#38bdf8" />
              <circle cx="720" cy="250" r="5" fill="#38bdf8" />
              <circle cx="920" cy="250" r="5" fill="#38bdf8" />
              
              <circle cx="120" cy="400" r="5" fill="#38bdf8" />
              <circle cx="320" cy="400" r="5" fill="#38bdf8" />
              <circle cx="520" cy="400" r="5" fill="#38bdf8" />
              
              {/* Node icons */}
              <text x="85" y="110" fill="#0ea5e9" fontSize="24" fontWeight="bold">@</text>
              <text x="278" y="110" fill="#0ea5e9" fontSize="24">&lt;/&gt;</text>
              <text x="485" y="110" fill="#0ea5e9" fontSize="24">→</text>
              <text x="685" y="110" fill="#0ea5e9" fontSize="24">@</text>
              <text x="878" y="110" fill="#0ea5e9" fontSize="24">+</text>
              <text x="1078" y="110" fill="#0ea5e9" fontSize="24">✓</text>
              
              <text x="85" y="260" fill="#0ea5e9" fontSize="24" fontWeight="bold">@</text>
              <text x="278" y="260" fill="#0ea5e9" fontSize="24">✎</text>
              <text x="485" y="260" fill="#0ea5e9" fontSize="24">→</text>
              <text x="685" y="260" fill="#0ea5e9" fontSize="24">@</text>
              <text x="878" y="260" fill="#0ea5e9" fontSize="24">≡</text>
              <text x="1078" y="260" fill="#0ea5e9" fontSize="24">✓</text>
              
              <text x="85" y="410" fill="#0ea5e9" fontSize="24" fontWeight="bold">@</text>
              <text x="278" y="410" fill="#0ea5e9" fontSize="24">→</text>
              <text x="485" y="410" fill="#0ea5e9" fontSize="24">✓</text>
            </g>
          </svg>
        </div>
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
