import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
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
  const [showCustomToast, setShowCustomToast] = useState(false);
  const toastTimeout = useRef<NodeJS.Timeout | null>(null);

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
  
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          showToast();
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
        } else {
          toast({
            title: "Erro ao enviar mensagem",
            description: data.message || "Tente novamente mais tarde.",
            variant: "destructive"
          });
        }
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Erro na requisição:', error);
        toast({
          title: "Erro ao conectar com o servidor",
          description: "Tente novamente mais tarde.",
          variant: "destructive"
        });
        setIsSubmitting(false);
      });
  };

  const showToast = () => {
    setShowCustomToast(true);
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setShowCustomToast(false), 4000);
  };

  return (
    <>
      <section id="contato" className="section-padding bg-white relative">
        {/* Notificação customizada sobre o formulário */}
        {showCustomToast && (
          <div className="fixed left-1/2 top-1/2 z-[200] w-full max-w-md -translate-x-1/2 -translate-y-1/2 flex justify-center pointer-events-none">
            <div className="bg-green-50 border border-green-500 text-green-900 rounded-lg shadow-lg px-6 py-4 font-medium text-center animate-custom-toast">
              <div className="text-lg font-bold mb-1">Mensagem enviada!</div>
              <div className="text-sm">Agradecemos seu contato. Responderemos em breve.</div>
            </div>
          </div>
        )}
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Vamos <span className="text-green-400">conversar</span></h2>
              <p className="text-gray-600 mb-8">
                Entre em contato para descobrir como podemos transformar seus processos 
                com nossas soluções de automação e inteligência artificial.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="bg-green-500/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Telefone</p>
                    <p className="text-gray-600">(11) 9999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-500/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">contato@qiartificial.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-500/10 p-3 rounded-full mr-4">
                    <MessageSquare className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">WhatsApp</p>
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
            
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Envie uma mensagem</h3>
              
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
                    className="border-gray-300 focus:border-green-500"
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
                    className="border-gray-300 focus:border-green-500"
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
                    className="border-gray-300 focus:border-green-500"
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
                    className="border-gray-300 min-h-[120px] focus:border-green-500"
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
    </>
  );
};

export default Contact;
