
import React from 'react';
import Analytics from './Analytics';

// Componente simplificado que apenas renderiza o Analytics em ambientes de produção
const ConditionalAnalytics = () => {
  // Verifica se o ambiente é de desenvolvimento/preview
  const isDevEnvironment = 
    process.env.NODE_ENV === 'development' || 
    window.location.hostname === 'localhost' || 
    window.location.hostname.includes('preview') || 
    window.location.hostname.includes('127.0.0.1');
  
  // Em ambientes de desenvolvimento, não renderiza nada
  if (isDevEnvironment) {
    return null;
  }
  
  // Em produção, renderiza o componente Analytics
  return <Analytics />;
};

export default ConditionalAnalytics;
