
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface PrivacyPolicyProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">Política de Privacidade</DialogTitle>
        </DialogHeader>
        
        <div className="text-foreground mt-4">
          <p><strong>Última atualização:</strong> 06/05/2025</p>

          <p className="mt-4">Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os dados pessoais dos usuários que acessam o site <strong>qiartificial soluções tecnológicas</strong>, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD) e demais normas aplicáveis no ordenamento jurídico brasileiro.</p>

          <h2 className="text-lg font-semibold mt-6">1. Coleta de Dados Pessoais</h2>
          <p className="mt-2">Coletamos os seguintes dados pessoais, fornecidos diretamente pelo usuário ou automaticamente por meio da navegação no site:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Dados de navegação (IP, geolocalização, tipo de dispositivo, sistema operacional, páginas acessadas, cookies, entre outros)</li>
            <li>Outros dados eventualmente fornecidos pelo usuário em formulários de contato, cadastro ou atendimento</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">2. Finalidade da Coleta de Dados</h2>
          <p className="mt-2">Os dados pessoais poderão ser utilizados para as seguintes finalidades:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Viabilizar a comunicação com o usuário</li>
            <li>Responder dúvidas, solicitações ou prestar suporte</li>
            <li>Enviar comunicações promocionais, informativos ou newsletters (com consentimento)</li>
            <li>Melhorar a experiência do usuário no site</li>
            <li>Cumprir obrigações legais ou regulatórias</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">3. Compartilhamento de Dados</h2>
          <p className="mt-2">Seus dados não serão vendidos, alugados ou compartilhados com terceiros, exceto nas seguintes hipóteses:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Para cumprimento de obrigações legais ou regulatórias</li>
            <li>Com prestadores de serviço ou parceiros contratados, quando necessário à execução das finalidades descritas</li>
            <li>Mediante consentimento do titular dos dados</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">4. Cookies e Tecnologias de Rastreamento</h2>
          <p className="mt-2">Utilizamos cookies e tecnologias semelhantes para:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Garantir funcionalidades básicas do site</li>
            <li>Analisar o comportamento de navegação para fins estatísticos e de marketing</li>
            <li>Personalizar o conteúdo e anúncios exibidos</li>
          </ul>
          <p className="mt-2">O usuário pode, a qualquer momento, configurar seu navegador para recusar ou remover os cookies.</p>

          <h2 className="text-lg font-semibold mt-6">5. Armazenamento e Segurança dos Dados</h2>
          <p className="mt-2">Os dados coletados são armazenados em ambiente seguro, com medidas técnicas e administrativas adequadas para proteger contra acessos não autorizados, vazamentos, perdas ou destruição.</p>
          <p className="mt-2">O armazenamento dos dados respeita os prazos legais e/ou o tempo necessário para atingir as finalidades informadas.</p>

          <h2 className="text-lg font-semibold mt-6">6. Direitos do Titular dos Dados</h2>
          <p className="mt-2">Nos termos da LGPD, você tem direito a:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Confirmar a existência de tratamento de seus dados</li>
            <li>Acessar seus dados</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</li>
            <li>Revogar o consentimento, quando aplicável</li>
            <li>Solicitar a portabilidade dos dados</li>
          </ul>
          <p className="mt-2">Para exercer seus direitos, entre em contato conosco através do e-mail: <a href="mailto:contato@qiartificial.com.br" className="text-green-500 hover:underline">contato@qiartificial.com.br</a>.</p>

          <h2 className="text-lg font-semibold mt-6">7. Alterações nesta Política</h2>
          <p className="mt-2">Esta política poderá ser alterada a qualquer momento para garantir conformidade com a legislação vigente. Recomendamos a revisão periódica desta página.</p>

          <h2 className="text-lg font-semibold mt-6">8. Contato</h2>
          <p className="mt-2">Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato com:</p>
          <p className="mt-2"><strong>qiartificial soluções tecnológicas</strong><br />
          E-mail: <a href="mailto:contato@qiartificial.com.br" className="text-green-500 hover:underline">contato@qiartificial.com.br</a><br />
          Endereço: Florianópolis/SC</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;
