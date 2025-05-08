
import React, { Suspense } from 'react';
import Analytics from './Analytics';

const ConditionalAnalytics = () => {
  // Renderiza o Analytics apenas se não estiver em localhost ou ambiente de preview
  if (
    window.location.hostname === 'localhost' || 
    window.location.hostname.includes('preview') || 
    window.location.hostname.includes('127.0.0.1')
  ) {
    return null;
  }
  
  return (
    <Suspense fallback={null}>
      <Analytics />
    </Suspense>
  );
};

export default ConditionalAnalytics;
