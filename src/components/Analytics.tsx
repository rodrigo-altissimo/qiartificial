
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

interface AnalyticsProps {
  ga4Id?: string;
}

const Analytics = ({ ga4Id = 'G-XXXXXXXXXX' }: AnalyticsProps) => {
  const [analyticsInitialized, setAnalyticsInitialized] = useState(false);

  useEffect(() => {
    // Initialize Google Analytics if a valid ID is provided
    if (ga4Id && ga4Id !== 'G-XXXXXXXXXX') {
      try {
        ReactGA.initialize(ga4Id);
        ReactGA.send("pageview");
        setAnalyticsInitialized(true);
        console.log("Google Analytics initialized successfully");
      } catch (error) {
        console.error("Error initializing Google Analytics:", error);
      }
    }

    // For Vercel Analytics, use dynamic import to avoid direct script loading
    // This is safer than trying to load the script directly
    const loadVercelAnalytics = async () => {
      try {
        const { inject } = await import('@vercel/analytics');
        inject();
        console.log("Vercel Analytics injected successfully");
      } catch (error) {
        // Silently handle error - don't log to console to avoid error messages
        // This is expected in environments where Vercel Analytics is not available
      }
    };

    loadVercelAnalytics();
  }, [ga4Id]);

  // Component doesn't render anything
  return null;
};

export default Analytics;
