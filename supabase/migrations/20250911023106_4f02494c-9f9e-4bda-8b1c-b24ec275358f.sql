-- Create visitor tracking table
CREATE TABLE public.visitor_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visited_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_agent TEXT,
  referrer TEXT,
  ip_address INET,
  page_path TEXT NOT NULL DEFAULT '/'
);

-- Enable Row Level Security (make data private - no public access)
ALTER TABLE public.visitor_logs ENABLE ROW LEVEL SECURITY;

-- Create index for better performance on queries
CREATE INDEX idx_visitor_logs_visited_at ON public.visitor_logs(visited_at DESC);
CREATE INDEX idx_visitor_logs_page_path ON public.visitor_logs(page_path);