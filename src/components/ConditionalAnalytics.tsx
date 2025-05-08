
import React, { Suspense, useEffect, useState } from 'react';
import Analytics from './Analytics';
import { useToast } from '@/hooks/use-toast';

const ConditionalAnalytics = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const [analyticsAvailable, setAnalyticsAvailable] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if it should render Analytics
    const isLocalOrPreview = 
      window.location.hostname === 'localhost' || 
      window.location.hostname.includes('preview') || 
      window.location.hostname.includes('127.0.0.1');
    
    // Only attempt to render in production environments
    setShouldRender(!isLocalOrPreview);
    
    // Check if Vercel Analytics script is available in production
    if (!isLocalOrPreview) {
      fetch('/_vercel/insights/script.js', { method: 'HEAD' })
        .then(response => {
          if (!response.ok) {
            setAnalyticsAvailable(false);
            console.warn("Vercel Analytics script not available. Analytics will be disabled.");
            // Only show toast in development to avoid annoying users
            if (process.env.NODE_ENV === 'development') {
              toast({
                title: "Analytics Unavailable",
                description: "Vercel Analytics script could not be loaded. This is expected in development and preview environments.",
                variant: "default"
              });
            }
          }
        })
        .catch(() => {
          setAnalyticsAvailable(false);
          console.warn("Vercel Analytics script not available. Analytics will be disabled.");
        });
    }
  }, [toast]);

  // Don't render if we're in development or Analytics is not available
  if (!shouldRender || !analyticsAvailable) {
    return null;
  }
  
  return (
    <Suspense fallback={null}>
      <Analytics />
    </Suspense>
  );
};

export default ConditionalAnalytics;
