import React from 'react';
import CustomModal from './CustomModal';

interface PrivacyPolicyProps {
  open: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ open, onClose }) => {
  return (
    <CustomModal open={open} onClose={onClose} title="Política de Privacidade">
      <p><strong>Última atualização:</strong> 06/05/2025</p>
      <p style={{ marginTop: 16 }}>
        Esta Política de Privacidade descreve como coletamos, usamos e protegemos os dados pessoais
        dos usuários que acessam nosso site, conforme a LGPD (Lei nº 13.709/2018).
      </p>

      <h3 style={{ marginTop: 24, fontWeight: 600 }}>1. Coleta de Dados</h3>
      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
        <li>Nome</li>
        <li>Email</li>
        <li>Telefone</li>
        <li>IP e dados de navegação</li>
      </ul>

      <h3 style={{ marginTop: 24, fontWeight: 600 }}>2. Finalidades</h3>
      <ul style={{ paddingLeft: 20 }}>
        <li>Contato e suporte</li>
        <li>Melhoria do site</li>
        <li>Obrigação legal</li>
      </ul>

      <p style={{ marginTop: 16 }}>
        Para mais informações, entre em contato: <a href="mailto:contato@qiartificial.com.br">contato@qiartificial.com.br</a>
      </p>
    </CustomModal>
  );
};

export default PrivacyPolicy;