
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
    <section id="beneficios" className="section-padding bg-qiartificial-800 text-white">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios das Nossas <span className="bg-gradient-to-r from-qiartificial-300 to-teal-500 bg-clip-text text-transparent">Soluções</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Descubra como nossas automações podem transformar seu negócio e impulsionar resultados.
          </p>
          <div className="h-1 w-20 bg-teal-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {benefitItems.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-teal-500 rounded-full p-1">
                  <Check className="h-5 w-5 text-white" />
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
