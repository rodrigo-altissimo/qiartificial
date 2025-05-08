
import React, { Suspense, useEffect, useState } from 'react';
import Analytics from './Analytics';
import { useToast } from '@/hooks/use-toast';

const ConditionalAnalytics = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if it should render Analytics
    const isLocalOrPreview = 
      window.location.hostname === 'localhost' || 
      window.location.hostname.includes('preview') || 
      window.location.hostname.includes('127.0.0.1');
    
    // Only attempt to render in production environments
    setShouldRender(!isLocalOrPreview);
    
    // In development, show an informational toast about analytics
    if (isLocalOrPreview && process.env.NODE_ENV === 'development') {
      console.info("Analytics disabled in development/preview environment");
    }
  }, [toast]);

  // Don't render if we're in development
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
