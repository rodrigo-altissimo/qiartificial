
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a <span className="text-gradient">Qiartificial</span></h2>
          <div className="h-1 w-20 bg-qiartificial-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Equipe Qiartificial" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-qiartificial-800">Nossa Missão</h3>
            <p className="text-gray-700 mb-6">
              A Qiartificial é especializada em criar soluções de automação e inteligência artificial 
              que simplificam processos empresariais. Utilizamos ferramentas low-code e no-code 
              para entregar resultados rápidos e eficientes, sem a necessidade de desenvolvimento complexo.
            </p>
            <p className="text-gray-700 mb-6">
              Nossa equipe combina experiência técnica e visão estratégica para identificar 
              oportunidades de otimização nos seus processos, permitindo que sua empresa 
              foque no que realmente importa: seu core business.
            </p>
            <Button className="bg-qiartificial-600 hover:bg-qiartificial-700">
              Conheça nosso time
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
