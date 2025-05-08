
import React, { useEffect, useState } from 'react';
import Analytics from './Analytics';

// Componente que apenas renderiza o Analytics em ambientes de produção
const ConditionalAnalytics = () => {
  const [shouldRenderAnalytics, setShouldRenderAnalytics] = useState(false);
  
  useEffect(() => {
    // Verifica se o ambiente é de desenvolvimento/preview
    const isDevEnvironment = 
      process.env.NODE_ENV === 'development' || 
      window.location.hostname === 'localhost' || 
      window.location.hostname.includes('preview') || 
      window.location.hostname.includes('127.0.0.1') ||
      window.location.hostname.includes('lovable.app') ||
      window.location.hostname.includes('lovableproject.com');
    
    // Apenas renderiza em produção em domínio próprio
    setShouldRenderAnalytics(!isDevEnvironment);
    
    // Também adiciona meta tag para desabilitar o Vercel Analytics dinamicamente
    if (isDevEnvironment) {
      const metaTag = document.createElement('meta');
      metaTag.name = 'vercel-analytics';
      metaTag.content = 'false';
      document.head.appendChild(metaTag);
    }
  }, []);
  
  // Desativa completamente em ambientes que não são de produção
  if (!shouldRenderAnalytics) {
    return null;
  }
  
  // Em produção com domínio próprio, renderiza o componente Analytics
  return <Analytics />;
};

export default ConditionalAnalytics;
