
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "A automatização do nosso atendimento via WhatsApp aumentou nossa taxa de conversão em 40% e reduziu o tempo de resposta para menos de 5 minutos.",
    name: "Ana Silva",
    role: "Gerente de Marketing, E-commerce",
    avatar: "AS"
  },
  {
    quote: "Os dashboards analíticos desenvolvidos pela QiArtificial nos permitiram identificar gargalos e otimizar nossos processos de vendas, aumentando a receita em 25%.",
    name: "Carlos Mendes",
    role: "Diretor Comercial, Varejo",
    avatar: "CM"
  },
  {
    quote: "Graças à integração de sistemas com n8n, conseguimos automatizar toda a jornada do cliente, desde o primeiro contato até o pós-venda, melhorando significativamente a experiência.",
    name: "Márcia Oliveira",
    role: "COO, Empresa de Tecnologia",
    avatar: "MO"
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">O que nossos <span className="text-green-400">clientes</span> dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça as histórias de sucesso de empresas que transformaram seus processos com a QiArtificial.
          </p>
          <div className="h-1 w-20 bg-green-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover bg-white shadow-md border border-gray-200">
              <CardHeader className="pb-2">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-400 rounded-full blur opacity-75"></div>
                    <Avatar className="h-16 w-16 border-2 border-white relative">
                      <AvatarFallback className="bg-green-900 text-green-100">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <blockquote className="italic text-gray-600 mb-4">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="flex flex-col items-center pt-0">
                <p className="font-semibold text-green-400">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
