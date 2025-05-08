
import { useEffect } from "react";

// Componente para verificar se o gptengineer.js está carregado corretamente
const GptEngineerCheck = () => {
  useEffect(() => {
    // Verificar se o script de edição está presente
    const checkEditScript = setInterval(() => {
      if (typeof window.__gpteng !== 'undefined') {
        console.log("GPT Engineer inicializado com sucesso!");
        clearInterval(checkEditScript);
      } else {
        console.warn("GPT Engineer ainda não inicializado...");
        
        // Verificar se o script está no DOM
        const scriptElement = document.querySelector('script[src*="gptengineer.js"]');
        if (!scriptElement) {
          console.error("Script gptengineer.js não encontrado no DOM!");
          
          // Tenta recriar o script
          const newScript = document.createElement('script');
          newScript.src = "https://cdn.gpteng.co/gptengineer.js";
          newScript.type = "module";
          document.body.appendChild(newScript);
          console.log("Tentativa de reinserção do script gptengineer.js");
        }
      }
    }, 2000);
    
    return () => clearInterval(checkEditScript);
  }, []);
  
  return null;
};

export default GptEngineerCheck;
