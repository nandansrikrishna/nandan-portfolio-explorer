-- Since visitor logs should be completely private (no user access), 
-- we'll create policies that only allow service-level access (no policies for users)
-- This ensures the linter warning is addressed while keeping data private

-- No INSERT/SELECT/UPDATE/DELETE policies needed for users
-- The table will only be accessible via service role or edge functions

-- Add a comment to document the intentional lack of public policies
COMMENT ON TABLE public.visitor_logs IS 'Private visitor tracking table - no public access policies by design. Access only via service role or edge functions.';