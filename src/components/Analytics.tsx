
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
      ReactGA.initialize(ga4Id);
      ReactGA.send("pageview");
    }

    // Verifica se o script do Vercel Analytics está disponível antes de tentar carregá-lo
    const checkVercelAnalytics = async () => {
      try {
        const response = await fetch('/_vercel/insights/script.js', { method: 'HEAD' });
        setVercelAnalyticsAvailable(response.ok);
      } catch (error) {
        console.log('Vercel Analytics não está disponível:', error);
        setVercelAnalyticsAvailable(false);
      }
    };

    checkVercelAnalytics();
  }, [ga4Id]);

  // Não tenta carregar o Vercel Analytics se não estiver disponível
  return null;
};

export default Analytics;
