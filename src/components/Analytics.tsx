
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

interface AnalyticsProps {
  ga4Id?: string;
}

const Analytics = ({ ga4Id = 'G-XXXXXXXXXX' }: AnalyticsProps) => {
  useEffect(() => {
    // Apenas inicializa o Google Analytics se um ID válido for fornecido
    if (ga4Id && ga4Id !== 'G-XXXXXXXXXX') {
      try {
        ReactGA.initialize(ga4Id);
        ReactGA.send("pageview");
        console.log("Google Analytics inicializado com sucesso");
      } catch (error) {
        // Silencia erros para não poluir o console
      }
    }
    // Não tenta mais carregar o Vercel Analytics de forma alguma
  }, [ga4Id]);

  return null;
};

export default Analytics;
