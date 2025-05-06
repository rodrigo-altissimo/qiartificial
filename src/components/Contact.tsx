
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Agradecemos seu contato. Responderemos em breve.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="section-padding bg-black">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Vamos <span className="text-green-400">conversar</span></h2>
            <p className="text-gray-300 mb-8">
              Entre em contato para descobrir como podemos transformar seus processos 
              com nossas soluções de automação e inteligência artificial.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-green-900/30 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Telefone</p>
                  <p className="text-gray-300">(11) 9999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-900/30 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-300">contato@qiartificial.com.br</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-900/30 p-3 rounded-full mr-4">
                  <MessageSquare className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="font-medium text-white">WhatsApp</p>
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    Fale conosco via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-black/60 backdrop-blur-sm rounded-lg border border-green-900/30 p-8 shadow-lg shadow-green-500/10">
            <h3 className="text-2xl font-semibold mb-6 text-green-400">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nome completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="bg-black/50 border-green-900/30 text-white focus:border-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="bg-black/50 border-green-900/30 text-white focus:border-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Telefone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="bg-black/50 border-green-900/30 text-white focus:border-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  className="bg-black/50 border-green-900/30 text-white min-h-[120px] focus:border-green-500"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-green-500 hover:bg-green-400 text-black font-medium shadow-lg shadow-green-500/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
