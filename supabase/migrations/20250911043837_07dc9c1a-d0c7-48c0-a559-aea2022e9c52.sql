-- Allow anonymous users to insert visitor logs for tracking
-- This enables the frontend tracking while keeping data private
CREATE POLICY "Allow anonymous visitor tracking" 
ON public.visitor_logs 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Update the table comment to reflect the new policy
COMMENT ON TABLE public.visitor_logs IS 'Private visitor tracking table - allows anonymous inserts for tracking, no read access. Data remains private.';