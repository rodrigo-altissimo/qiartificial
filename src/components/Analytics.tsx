
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

interface AnalyticsProps {
  ga4Id?: string;
}

const Analytics = ({ ga4Id = 'G-XXXXXXXXXX' }: AnalyticsProps) => {
  useEffect(() => {
    // Inicializa o Google Analytics apenas se um ID válido for fornecido
    if (ga4Id && ga4Id !== 'G-XXXXXXXXXX') {
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

  return null;
};

export default Analytics;
