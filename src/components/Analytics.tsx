
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

interface AnalyticsProps {
  ga4Id?: string;
}

const Analytics = ({ ga4Id = 'G-XXXXXXXXXX' }: AnalyticsProps) => {
  useEffect(() => {
    if (ga4Id && ga4Id !== 'G-XXXXXXXXXX') {
      ReactGA.initialize(ga4Id);
      ReactGA.send("pageview");
    }
  }, [ga4Id]);

  return <VercelAnalytics />;
};

export default Analytics;
