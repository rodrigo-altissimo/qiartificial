
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
        
        // Força recarregamento de todos os estilos
        document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
          const href = link.getAttribute('href');
          if (href) {
            const parent = link.parentNode;
            link.remove();
            
            const newLink = document.createElement('link');
            newLink.rel = 'stylesheet';
            newLink.href = href.includes('?') 
              ? `${href}&v=${timestamp}` 
              : `${href}?v=${timestamp}`;
            
            if (parent) {
              parent.appendChild(newLink);
            }
          }
        });
        
        // Força recarregamento de todas as imagens
        document.querySelectorAll('img').forEach(img => {
          const src = img.getAttribute('src');
          if (src && !src.startsWith('data:')) {
            // Pré-carrega a imagem com cache-busting
            const newSrc = src.includes('?') 
              ? `${src}&v=${timestamp}` 
              : `${src}?v=${timestamp}`;
            
            const newImg = new Image();
            newImg.onload = () => {
              img.setAttribute('src', newSrc);
            };
            newImg.src = newSrc;
          }
        });
        
        // Força recarregamento de scripts (exceto gptengineer.js)
        document.querySelectorAll('script[src]:not([src*="gptengineer.js"])').forEach(script => {
          const src = script.getAttribute('src');
          if (src) {
            const parent = script.parentNode;
            const nextSibling = script.nextSibling;
            script.remove();
            
            const newScript = document.createElement('script');
            newScript.src = src.includes('?') 
              ? `${src}&v=${timestamp}` 
              : `${src}?v=${timestamp}`;
            
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
        
        // Para GitHub Pages específicamente
        if (window.location.hostname.includes('github.io')) {
          console.log("Detectado GitHub Pages, aplicando técnicas anti-cache adicionais");
          
          // Técnica específica para GitHub Pages
          const ghPagesMeta = document.createElement('meta');
          ghPagesMeta.setAttribute('http-equiv', 'Cache-Control');
          ghPagesMeta.content = 'no-cache, no-store, must-revalidate';
          document.head.appendChild(ghPagesMeta);
          
          // Adiciona um parâmetro de versão à URL para forçar novas solicitações
          if (!window.location.search.includes('v=') && !window.location.hash) {
            const newUrl = window.location.href + (window.location.href.includes('?') ? '&' : '?') + `v=${timestamp}`;
            window.history.replaceState(null, '', newUrl);
          }
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
      <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<!-- Cache buster: ${timestamp} -->` }} />
    </>
  );
};

export default ForceReloader;
