import { useEffect, useState } from "react";

const ForceReloader = () => {
  const [timestamp] = useState(() => new Date().getTime().toString());
  
  useEffect(() => {
    console.log("Force reload timestamp:", timestamp);
    
    // Técnica avançada para forçar recarregamento de recursos em GitHub Pages
    const forceReload = () => {
      try {
        // Limpa todos os caches possíveis
        localStorage.clear();
        sessionStorage.clear();
        
        // Tenta limpar o cache do navegador
        if ('caches' in window) {
          caches.keys().then(cacheNames => {
            cacheNames.forEach(cacheName => {
              caches.delete(cacheName);
            });
          });
        }
        
        // Força recarregamento de todos os estilos sem usar parâmetros de URL
        document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
          const href = link.getAttribute('href');
          if (href) {
            const parent = link.parentNode;
            const newLink = document.createElement('link');
            newLink.rel = 'stylesheet';
            newLink.href = href;
            // Use data attribute instead of URL parameter
            newLink.setAttribute('data-timestamp', timestamp);
            if (parent) {
              parent.appendChild(newLink);
            }
          }
        });
        
        // Força recarregamento de todas as imagens sem usar parâmetros de URL nas importações
        document.querySelectorAll('img').forEach(img => {
          const src = img.getAttribute('src');
          if (src && !src.startsWith('data:')) {
            // Use separate query parameter for images since they're not imported as JS
            const separator = src.includes('?') ? '&' : '?';
            const newSrc = `${src}${separator}t=${timestamp}`;
            const newImg = new Image();
            newImg.onload = () => {
              img.src = newSrc;
            };
            newImg.src = newSrc;
          }
        });
        
        // Força recarregamento de scripts (exceto gptengineer.js) sem usar parâmetros de URL
        document.querySelectorAll('script[src]:not([src*="gptengineer.js"])').forEach(script => {
          const src = script.getAttribute('src');
          if (src) {
            const parent = script.parentNode;
            const nextSibling = script.nextSibling;
            script.remove();
            const newScript = document.createElement('script');
            newScript.src = src;
            // Add data attribute instead of URL parameter
            newScript.setAttribute('data-timestamp', timestamp);
            if (parent) {
              parent.insertBefore(newScript, nextSibling);
            }
          }
        });
        
        // Adiciona metadados para dar dicas ao navegador
        const meta = document.createElement('meta');
        meta.name = 'cache-control';
        meta.content = 'no-cache, no-store, must-revalidate';
        document.head.appendChild(meta);
        
        const pragmaMeta = document.createElement('meta');
        pragmaMeta.name = 'pragma';
        pragmaMeta.content = 'no-cache';
        document.head.appendChild(pragmaMeta);
        
        const expiresMeta = document.createElement('meta');
        expiresMeta.name = 'expires';
        expiresMeta.content = '0';
        document.head.appendChild(expiresMeta);
        
        // Para GitHub Pages especificamente
        if (window.location.hostname.includes('github.io')) {
          console.log("Detectado GitHub Pages, aplicando técnicas anti-cache adicionais");
          // Técnica específica para GitHub Pages
          const ghPagesMeta = document.createElement('meta');
          ghPagesMeta.setAttribute('http-equiv', 'Cache-Control');
          ghPagesMeta.content = 'no-cache, no-store, must-revalidate';
          document.head.appendChild(ghPagesMeta);
          // Add a timestamp marker in localStorage instead of URL parameter
          localStorage.setItem('cache_timestamp', timestamp);
        }
      } catch (error) {
        console.error("Erro ao forçar reload:", error);
      }
    };
    
    // Executa imediatamente
    forceReload();
    
    // E também após um pequeno atraso para garantir
    setTimeout(forceReload, 1000);
    
  }, [timestamp]);
  
  return (
    <>
      {/* Elemento visível apenas para desenvolvimento que mostra o timestamp */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ 
          position: 'fixed', 
          bottom: '5px', 
          right: '5px', 
          background: 'rgba(0,0,0,0.7)', 
          color: 'lime', 
          padding: '2px 5px', 
          fontSize: '10px',
          zIndex: 9999 
        }}>
          v:{timestamp}
        </div>
      )}
      
      {/* Elemento invisível com conteúdo dinâmico para garantir novo render */}
      <div style={{ display: 'none' }} data-timestamp={timestamp} />
    </>
  );
};

export default ForceReloader;
