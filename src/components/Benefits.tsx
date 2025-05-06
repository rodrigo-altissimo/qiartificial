
import { Check } from 'lucide-react';

const benefitItems = [
  {
    title: "Aumento de produtividade",
    description: "Automatize tarefas repetitivas e libere sua equipe para trabalhos estratégicos."
  },
  {
    title: "Redução de custos operacionais",
    description: "Diminua gastos com processos manuais e otimize recursos humanos."
  },
  {
    title: "Atendimento 24/7",
    description: "Ofereça suporte contínuo aos seus clientes, mesmo fora do horário comercial."
  },
  {
    title: "Escalabilidade",
    description: "Cresça sem preocupações, nossos sistemas se adaptam ao volume do seu negócio."
  },
  {
    title: "Dados para decisões",
    description: "Obtenha insights valiosos com análises detalhadas do comportamento do cliente."
  },
  {
    title: "Implementação rápida",
    description: "Soluções low-code e no-code permitem implantação em semanas, não meses."
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="relative text-white py-24 overflow-hidden">
      {/* Dark background with grid pattern */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
               backgroundSize: "40px 40px"
             }}>
        </div>
      </div>
      
      {/* Green glow effect */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="w-full h-[200px]">
          <div className="w-full h-[400px] bg-gradient-to-b from-green-500/30 via-green-400/10 to-transparent rounded-[100%] transform -translate-y-1/2"></div>
        </div>
      </div>
      
      <div className="container-narrow relative z-20">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-1 bg-black/50 rounded-full border border-green-500/30 mb-4">
            <span className="text-green-400 text-sm">Por que escolher nossa solução</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios das Nossas <span className="text-green-400">Soluções</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Descubra como nossas automações podem transformar seu negócio e impulsionar resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {benefitItems.map((benefit, index) => (
            <div key={index} className="flex items-start backdrop-blur-sm bg-black/30 rounded-xl p-6 border border-green-900/30">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-green-500 rounded-full p-1">
                  <Check className="h-5 w-5 text-black" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
