
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
    quote: "Os dashboards analíticos desenvolvidos pela Qiartificial nos permitiram identificar gargalos e otimizar nossos processos de vendas, aumentando a receita em 25%.",
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
    <section id="depoimentos" className="section-padding bg-gray-50">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos <span className="text-gradient">clientes</span> dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça as histórias de sucesso de empresas que transformaram seus processos com a Qiartificial.
          </p>
          <div className="h-1 w-20 bg-qiartificial-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover bg-white">
              <CardHeader className="pb-2">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-qiartificial-500 to-teal-500 rounded-full blur opacity-75"></div>
                    <Avatar className="h-16 w-16 border-2 border-white relative">
                      <AvatarFallback className="bg-qiartificial-100 text-qiartificial-800">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <blockquote className="italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="flex flex-col items-center pt-0">
                <p className="font-semibold text-qiartificial-800">{testimonial.name}</p>
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
