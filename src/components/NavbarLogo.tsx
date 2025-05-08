
import { useState, useEffect, useRef } from 'react';

const NavbarLogo = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [logoRetries, setLogoRetries] = useState(0);
  const logoTimestamp = useRef(new Date().getTime());
  const logoUrl = `/logo-qiartificial.png?t=${logoTimestamp.current}`;

  useEffect(() => {
    // Preload logo with retry mechanism
    const loadLogo = () => {
      const img = new Image();
      img.src = `/logo-qiartificial.png?t=${logoTimestamp.current}`;
      img.onload = () => {
        console.log("Logo carregado com sucesso após", logoRetries, "tentativas");
        setLogoLoaded(true);
        setLogoError(false);
      };
      img.onerror = (e) => {
        console.error("Falha ao carregar o logo", e);
        setLogoError(true);
        
        // Retry logic - try up to 3 times with increasing delays
        if (logoRetries < 3) {
          setTimeout(() => {
            logoTimestamp.current = new Date().getTime(); // Generate new timestamp
            setLogoRetries(prev => prev + 1);
            loadLogo(); // Try again
          }, 1000 * (logoRetries + 1));
        }
      };
    };
    
    loadLogo();
  }, [logoRetries]);

  return (
    <a href="#" className="flex items-center gap-2 text-2xl font-bold text-white navbar-logo">
      {logoError ? (
        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-white p-1 shadow flex items-center justify-center border border-red-500">
          <span className="text-xs text-red-500">Erro</span>
        </div>
      ) : (
        <img 
          src={logoUrl}
          alt="Logo QiArtificial" 
          className={`h-8 w-8 md:h-10 md:w-10 rounded-full bg-white p-1 shadow ${logoError ? 'border border-red-500 hidden' : ''}`}
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
  );
};

export default NavbarLogo;
