import React from 'react';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface TermsOfUseProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TermsOfUse: React.FC<TermsOfUseProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50 z-40" />
        <DialogContent
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 text-white p-8 max-w-3xl w-[90vw] max-h-[80vh] overflow-y-auto rounded-lg shadow-lg z-50"
        >
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl">Termos de Uso</DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4 text-sm">
            <p><strong>Última atualização:</strong> 06/05/2025</p>
            <p>Bem-vindo ao nosso site! Ao acessar ou usar este site/aplicativo, você concorda com os presentes Termos de Uso. Recomendamos a leitura cuidadosa deste documento antes de utilizar nossos serviços.</p>
            <h2 className="text-lg font-semibold mt-6">1. Aceitação dos Termos</h2>
            <p className="mt-2">Ao utilizar este site ou qualquer um de seus serviços, você declara que leu, entendeu e concorda em cumprir todas as condições aqui descritas. Caso não concorde com algum dos termos, não utilize o site.</p>
            <h2 className="text-lg font-semibold mt-6">2. Modificações dos Termos</h2>
            <p className="mt-2">Reservamo-nos o direito de alterar ou atualizar estes Termos de Uso a qualquer momento, sem aviso prévio. Recomendamos que você revise este documento periodicamente. O uso contínuo do site após quaisquer alterações constitui aceitação dos novos termos.</p>
            <h2 className="text-lg font-semibold mt-6">3. Cadastro e Conta</h2>
            <p className="mt-2">Alguns recursos do site podem exigir cadastro. Ao se registrar, o usuário concorda em fornecer informações verdadeiras, completas e atualizadas. O usuário é responsável por manter a confidencialidade de suas credenciais e por todas as atividades que ocorrerem sob sua conta.</p>
            <h2 className="text-lg font-semibold mt-6">4. Privacidade e Dados</h2>
            <p className="mt-2">Seus dados serão tratados conforme nossa <button onClick={() => {onOpenChange(false); setTimeout(() => document.getElementById('privacy-policy-button')?.click(), 300);}} className="text-green-500 hover:underline">Política de Privacidade</button>. Não comercializamos nem compartilhamos suas informações com terceiros sem seu consentimento, exceto quando exigido por lei.</p>
            <h2 className="text-lg font-semibold mt-6">5. Uso Permitido</h2>
            <p className="mt-2">Você concorda em usar o site apenas para fins legais e permitidos. É proibido:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Praticar atos que violem leis ou direitos de terceiros;</li>
              <li>Interferir com o funcionamento do site;</li>
              <li>Tentar acessar áreas restritas sem autorização.</li>
            </ul>
            <h2 className="text-lg font-semibold mt-6">6. Propriedade Intelectual</h2>
            <p className="mt-2">Todo o conteúdo do site (textos, imagens, marcas, códigos, etc.) é protegido por direitos autorais e outras leis de propriedade intelectual. É proibida a reprodução, distribuição ou modificação sem autorização prévia e por escrito.</p>
            <h2 className="text-lg font-semibold mt-6">7. Limitação de Responsabilidade</h2>
            <p className="mt-2">Embora nos esforcemos para manter os serviços sempre disponíveis e seguros, não nos responsabilizamos por:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Erros, falhas técnicas ou indisponibilidade do sistema;</li>
              <li>Perdas decorrentes do uso do site;</li>
              <li>Conteúdo enviado por usuários ou terceiros.</li>
            </ul>
            <h2 className="text-lg font-semibold mt-6">8. Encerramento</h2>
            <p className="mt-2">Podemos suspender ou encerrar seu acesso ao site a qualquer momento, com ou sem motivo, especialmente em caso de violação destes Termos.</p>
            <h2 className="text-lg font-semibold mt-6">9. Disposições Gerais</h2>
            <p className="mt-2">Estes Termos serão regidos pelas leis do Brasil. Fica eleito o foro da comarca de <strong>Florianópolis/SC</strong>, com renúncia a qualquer outro, por mais privilegiado que seja, para dirimir eventuais conflitos oriundos deste documento.</p>
          </div>
          <div className="mt-6 flex justify-end">
            <DialogClose asChild>
              <Button variant="outline">Fechar</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default TermsOfUse;
