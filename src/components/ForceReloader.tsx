
import { useEffect, useState } from "react";

const ForceReloader = () => {
  const [timestamp] = useState(() => new Date().getTime().toString());
  
  useEffect(() => {
    console.log("Force reload timestamp:", timestamp);
    
    // Técnica mais agressiva para forçar recarregamento de recursos
    const forceReload = () => {
      try {
        // Limpa o localStorage e sessionStorage
        localStorage.clear();
        sessionStorage.clear();
        
        // Adiciona timestamp a todos os links de stylesheet
        const links = document.querySelectorAll('link[rel="stylesheet"]');
        links.forEach(link => {
          const href = link.getAttribute('href');
          if (href) {
            // Remove o link antigo
            const oldLink = link;
            const newLink = document.createElement('link');
            
            // Copia todos os atributos
            Array.from(oldLink.attributes).forEach(attr => {
              newLink.setAttribute(attr.name, attr.value);
            });
            
            // Adiciona timestamp ao href
            const updatedHref = href.includes('?') 
              ? `${href}&t=${timestamp}` 
              : `${href}?t=${timestamp}`;
            newLink.setAttribute('href', updatedHref);
            
            // Substitui o link antigo pelo novo
            if (oldLink.parentNode) {
              oldLink.parentNode.insertBefore(newLink, oldLink);
              setTimeout(() => {
                oldLink.parentNode?.removeChild(oldLink);
              }, 100);
            }
          }
        });
        
        // Força recarregamento de imagens definindo src novamente
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          const src = img.getAttribute('src');
          if (src) {
            const cacheBusterSrc = src.includes('?') 
              ? `${src}&t=${timestamp}` 
              : `${src}?t=${timestamp}`;
            
            // Cria nova imagem com src atualizado
            const newImg = new Image();
            newImg.onload = function() {
              img.setAttribute('src', cacheBusterSrc);
            };
            newImg.src = cacheBusterSrc;
          }
        });
        
        // Adiciona parâmetros de cache-busting ao URL do script principal
        const scripts = document.querySelectorAll('script[src]');
        scripts.forEach(script => {
          const src = script.getAttribute('src');
          if (src && !src.includes('gptengineer.js')) {
            const updatedSrc = src.includes('?') 
              ? `${src}&t=${timestamp}` 
              : `${src}?t=${timestamp}`;
            script.setAttribute('src', updatedSrc);
          }
        });

        // Verifica se o script gptengineer.js está presente
        const gptEngScript = document.querySelector('script[src*="gptengineer.js"]');
        if (!gptEngScript) {
          console.warn("Script gptengineer.js não encontrado. Tentando recarregar a página...");
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        } else {
          console.log("Script gptengineer.js encontrado:", gptEngScript);
        }

      } catch (error) {
        console.error("Erro ao forçar reload:", error);
      }
    };
    
    // Executa o forceReload
    forceReload();
    
    // Cria metadados para forçar recarregamento
    const meta = document.createElement('meta');
    meta.name = 'force-reload';
    meta.content = timestamp;
    document.head.appendChild(meta);
    
    // Adiciona um atributo de timestamp ao <html>
    document.documentElement.setAttribute('data-timestamp', timestamp);
    
    // Limpa os caches do navegador
    if ('caches' in window) {
      caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
          console.log(`Attempting to clear cache: ${cacheName}`);
          caches.delete(cacheName).then(success => {
            console.log(`Cache ${cacheName} cleared: ${success}`);
          });
        });
      });
    }
    
    // Limpa o meta tag na desmontagem
    return () => {
      if (document.head.contains(meta)) {
        document.head.removeChild(meta);
      }
    };
  }, [timestamp]);
  
  return (
    <>
      <div className="force-reload" data-timestamp={timestamp}></div>
      {/* Elemento invisível com conteúdo dinâmico para garantir novo render */}
      <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<!-- Cache buster: ${timestamp} -->` }} />
    </>
  );
};

export default ForceReloader;
