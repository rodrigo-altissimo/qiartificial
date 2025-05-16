import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section
      id="sobre"
      className="section-padding relative overflow-hidden"
    >
      {/* Imagem de fundo com parallax, preto e branco, e suavidade */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
          backgroundAttachment: 'fixed',
          filter: 'grayscale(100%) brightness(120%)',
          opacity: 0.15, // <- suaviza ao máximo
          zIndex: 0,
        }}
      />

      {/* Overlay branco translúcido adicional (quase transparente) */}
      <div className="absolute inset-0 bg-white/10 z-10 pointer-events-none" />

      {/* Conteúdo principal sobreposto */}
      <div className="container-narrow relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre a <span className="text-green-400">QiArtificial</span>
          </h2>
          <div className="h-1 w-20 bg-green-500 mx-auto" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-2xl text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Nossa Missão
            </h3>
            <p className="text-gray-700 mb-6">
              A QiArtificial é especializada em criar soluções de automação e inteligência artificial que simplificam processos empresariais. Utilizamos ferramentas low-code e no-code para entregar resultados rápidos e eficientes, sem a necessidade de desenvolvimento complexo.
            </p>
            <p className="text-gray-700 mb-6">
              Nossa equipe combina experiência técnica e visão estratégica para identificar oportunidades de otimização nos seus processos, permitindo que sua empresa foque no que realmente importa: seu core business.
            </p>
            <Button className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-md font-medium shadow-lg transition-all duration-300">
              Conheça nosso time
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
