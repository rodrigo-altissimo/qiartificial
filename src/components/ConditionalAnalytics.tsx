
import React, { Suspense, useEffect, useState } from 'react';
import Analytics from './Analytics';

const ConditionalAnalytics = () => {
  const [shouldRender, setShouldRender] = useState(false);
  
  useEffect(() => {
    // Verifica se deve renderizar o Analytics
    const isLocalOrPreview = 
      window.location.hostname === 'localhost' || 
      window.location.hostname.includes('preview') || 
      window.location.hostname.includes('127.0.0.1');
    
    setShouldRender(!isLocalOrPreview);
  }, []);

  if (!shouldRender) {
    return null;
  }
  
  return (
    <Suspense fallback={null}>
      <Analytics />
    </Suspense>
  );
};

export default ConditionalAnalytics;
