
import { useState, useEffect, useRef } from 'react';

const NavbarLogo = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [logoRetries, setLogoRetries] = useState(0);
  const logoTimestamp = useRef(new Date().getTime());
  
  // Força um novo timestamp a cada renderização
  const logoUrl = `/logo-qiartificial.png?nocache=${logoTimestamp.current}`;

  useEffect(() => {
    // Preload logo with aggressive retry mechanism
    const loadLogo = () => {
      const img = new Image();
      img.src = `/logo-qiartificial.png?nocache=${new Date().getTime()}`;
      img.onload = () => {
        console.log("Logo carregado com sucesso após", logoRetries, "tentativas");
        setLogoLoaded(true);
        setLogoError(false);
      };
      img.onerror = (e) => {
        console.error("Falha ao carregar o logo", e);
        setLogoError(true);
        
        // Retry logic - try up to 5 times with increasing delays
        if (logoRetries < 5) {
          setTimeout(() => {
            logoTimestamp.current = new Date().getTime(); // Generate new timestamp
            setLogoRetries(prev => prev + 1);
            loadLogo(); // Try again
          }, 500 * (logoRetries + 1));
        }
      };
    };
    
    // Load logo immediately
    loadLogo();
    
    // And try again after a short delay as a fallback
    const retryTimeout = setTimeout(() => {
      if (!logoLoaded && !logoError) {
        console.log("Tentando recarregar o logo após timeout");
        loadLogo();
      }
    }, 2000);
    
    return () => clearTimeout(retryTimeout);
  }, [logoRetries, logoLoaded, logoError]);

  // Componente que força o navegador a baixar a imagem novamente
  const ImagePreloader = () => (
    <div style={{ display: 'none' }}>
      <img src={`/logo-qiartificial.png?preload=${logoTimestamp.current}`} alt="" />
    </div>
  );

  return (
    <>
      <ImagePreloader />
      <a href="#" className="flex items-center gap-2 text-2xl font-bold text-white navbar-logo">
        {logoError ? (
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-white p-1 shadow flex items-center justify-center">
            <span className="text-xs">Logo</span>
          </div>
        ) : (
          <img 
            src={logoUrl}
            alt="Logo QiArtificial" 
            className={`h-8 w-8 md:h-10 md:w-10 rounded-full bg-white p-1 shadow ${!logoLoaded ? 'opacity-0' : ''}`}
            style={{ transition: 'opacity 0.3s' }}
            onLoad={() => {
              console.log("Logo carregado em linha");
              setLogoLoaded(true);
              setLogoError(false);
            }}
            onError={(e) => {
              console.error("Falha ao carregar o logo em linha", e);
              setLogoError(true);
            }}
          />
        )}
        QiArtificial
      </a>
    </>
  );
};

export default NavbarLogo;
