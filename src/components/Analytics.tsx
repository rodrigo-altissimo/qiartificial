import { useEffect } from 'react';
import ReactGA from 'react-ga4';

interface AnalyticsProps {
  ga4Id?: string;
}

const Analytics = ({ ga4Id = 'G-XXXXXXXXXX' }: AnalyticsProps) => {
  useEffect(() => {
    // Inicializa o Google Analytics apenas em produção
    if (import.meta.env.MODE === 'production' && ga4Id && ga4Id !== 'G-XXXXXXXXXX') {
      try {
        ReactGA.initialize(ga4Id);
        ReactGA.send("pageview");
        console.log("Google Analytics inicializado com sucesso");
      } catch (error) {
        // Silencia erros para não poluir o console
        console.error("Erro ao inicializar o Google Analytics:", error);
      }
    }
  }, [ga4Id]);

  if (import.meta.env.DEV) return null;        // 👈 bloqueia no dev
  return (
    <script
      defer
      src="https://analytics.qiartificial.com/script.js"
      data-domain="qiartificial.com.br"
    />
  );
};

export default Analytics;
