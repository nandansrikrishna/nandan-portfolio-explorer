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

        // Insert visitor log
        const { error } = await supabase
          .from('visitor_logs')
          .insert({
            user_agent: userAgent,
            referrer: referrer,
            page_path: pagePath,
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