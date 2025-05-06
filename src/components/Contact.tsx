
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
    <section id="contato" className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos <span className="text-gradient">conversar</span></h2>
            <p className="text-gray-600 mb-8">
              Entre em contato para descobrir como podemos transformar seus processos 
              com nossas soluções de automação e inteligência artificial.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-qiartificial-100 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-qiartificial-600" />
                </div>
                <div>
                  <p className="font-medium text-qiartificial-800">Telefone</p>
                  <p className="text-gray-600">(11) 9999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-qiartificial-100 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-qiartificial-600" />
                </div>
                <div>
                  <p className="font-medium text-qiartificial-800">Email</p>
                  <p className="text-gray-600">contato@qiartificial.com.br</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-qiartificial-100 p-3 rounded-full mr-4">
                  <MessageSquare className="h-5 w-5 text-qiartificial-600" />
                </div>
                <div>
                  <p className="font-medium text-qiartificial-800">WhatsApp</p>
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-qiartificial-600 hover:underline"
                  >
                    Fale conosco via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-qiartificial-800">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  className="input-field min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-qiartificial-600 hover:bg-qiartificial-700"
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
