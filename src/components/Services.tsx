
import { 
  MessageSquare, 
  RefreshCw, 
  Zap, 
  Layers, 
  Database, 
  PieChart 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const serviceItems = [
  {
    icon: MessageSquare,
    title: "Automação de WhatsApp",
    description: "Atendimento automatizado via WhatsApp com chatbots inteligentes que respondem 24/7."
  },
  {
    icon: RefreshCw,
    title: "Integração com n8n",
    description: "Conecte diferentes sistemas e automatize fluxos de trabalho sem código."
  },
  {
    icon: Zap,
    title: "Automação de Marketing",
    description: "Campanhas automatizadas e segmentadas para aumentar conversões."
  },
  {
    icon: Layers,
    title: "Processamento de Dados",
    description: "Extração, transformação e análise de dados para decisões estratégicas."
  },
  {
    icon: Database,
    title: "CRM Personalizado",
    description: "Sistemas de gestão de relacionamento adaptados ao seu negócio."
  },
  {
    icon: PieChart,
    title: "Dashboards Analíticos",
    description: "Visualização clara de KPIs e métricas de negócio em tempo real."
  }
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nossos <span className="text-green-400">Serviços</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforme seu negócio com nossas soluções de automação e inteligência artificial.
            Aumente a produtividade e reduza custos com tecnologias low-code e no-code.
          </p>
          <div className="h-1 w-20 bg-green-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="card-hover border-t-4 border-t-green-500 bg-white shadow-md">
              <CardHeader className="pb-2">
                <div className="bg-green-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
