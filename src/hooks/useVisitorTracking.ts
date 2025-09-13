import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useVisitorTracking = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // Get visitor information
        const userAgent = navigator.userAgent;
        const referrer = document.referrer || null;
        const pagePath = window.location.pathname;

        // Call edge function to track visitor with IP address
        const { error } = await supabase.functions.invoke('track-visitor', {
          body: {
            userAgent,
            referrer,
            pagePath,
          }
        });

        if (error) {
          console.error('Error tracking visitor:', error);
        }
      } catch (error) {
        console.error('Error in visitor tracking:', error);
      }
    };

    trackVisitor();
  }, []);
};