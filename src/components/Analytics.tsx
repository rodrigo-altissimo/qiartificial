
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

    // We've already checked for Vercel Analytics availability in the parent component
    // If we're rendering this component, we know Vercel is deployed correctly
    try {
      import('@vercel/analytics').then(({ inject }) => {
        inject();
        console.log("Vercel Analytics injected successfully");
      }).catch(err => {
        console.warn("Error injecting Vercel Analytics:", err);
      });
    } catch (error) {
      console.warn("Vercel Analytics module not available:", error);
    }
  }, [ga4Id]);

  // Component doesn't render anything
  return null;
};

export default Analytics;
