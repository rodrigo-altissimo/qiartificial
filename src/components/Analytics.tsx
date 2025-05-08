
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
        console.error("Erro ao inicializar o Google Analytics:", error);
      }
    }
    
    // Não tentamos mais carregar o Vercel Analytics aqui
    // O Vercel Analytics será configurado apenas pelo meta tag
  }, [ga4Id]);

  return null;
};

export default Analytics;
