
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

interface AnalyticsProps {
  ga4Id?: string;
}

const Analytics = ({ ga4Id = 'G-XXXXXXXXXX' }: AnalyticsProps) => {
  const [vercelAnalyticsAvailable, setVercelAnalyticsAvailable] = useState(false);

  useEffect(() => {
    // Inicializa o Google Analytics se um ID válido for fornecido
    if (ga4Id && ga4Id !== 'G-XXXXXXXXXX') {
      try {
        ReactGA.initialize(ga4Id);
        ReactGA.send("pageview");
        console.log("Google Analytics inicializado com sucesso");
      } catch (error) {
        console.error("Erro ao inicializar o Google Analytics:", error);
      }
    }

    // Verifica se o script do Vercel Analytics está disponível antes de tentar carregá-lo
    const checkVercelAnalytics = async () => {
      try {
        // Fazer uma verificação mais segura com um tempo limite
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        
        const response = await fetch('/_vercel/insights/script.js', { 
          method: 'HEAD',
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        setVercelAnalyticsAvailable(response.ok);
        
        if (response.ok) {
          console.log("Vercel Analytics está disponível");
        } else {
          console.log("Vercel Analytics não está disponível (status não ok)");
        }
      } catch (error) {
        console.log('Vercel Analytics não está disponível:', error instanceof DOMException ? 'timeout' : error);
        setVercelAnalyticsAvailable(false);
      }
    };

    checkVercelAnalytics();
  }, [ga4Id]);

  // Não renderiza nada
  return null;
};

export default Analytics;
