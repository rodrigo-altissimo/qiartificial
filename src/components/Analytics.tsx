
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

interface AnalyticsProps {
  ga4Id?: string;
}

const Analytics = ({ ga4Id = 'G-XXXXXXXXXX' }: AnalyticsProps) => {
  useEffect(() => {
    if (ga4Id && ga4Id !== 'G-XXXXXXXXXX') {
      ReactGA.initialize(ga4Id);
      ReactGA.send("pageview");
    }
  }, [ga4Id]);

  // Verificar se estamos em ambiente de produção
  const isProd = window.location.hostname !== 'localhost' && 
                !window.location.hostname.includes('preview') && 
                !window.location.hostname.includes('127.0.0.1');

  // Renderizar o componente VercelAnalytics apenas se estivermos em ambiente de produção
  return isProd ? <VercelAnalytics debug={false} /> : null;
};

export default Analytics;
