
import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import FadeIn from "./animations/FadeIn";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

// Sample project data
const allProjects = [
  {
    id: 1,
    title: "Distributed ML System",
    description: "Built a distributed machine learning system for large-scale data processing using TensorFlow and Kubernetes.",
    tags: ["Python", "TensorFlow", "Kubernetes", "Docker"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Developed a full-stack e-commerce platform with React, Node.js, and PostgreSQL with advanced search capabilities.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "Created a real-time chat application with WebSockets, React, and Express supporting multiple chat rooms and file sharing.",
    tags: ["WebSockets", "React", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "IoT Home Automation",
    description: "Designed an IoT home automation system using Raspberry Pi, MQTT, and React Native for mobile control of smart devices.",
    tags: ["IoT", "Raspberry Pi", "MQTT", "React Native"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description: "Implemented a secure voting system on Ethereum blockchain with smart contracts and web3.js for transparent elections.",
    tags: ["Solidity", "Ethereum", "Web3.js", "React"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "Built an AI-powered content generator using GPT-3 with a React frontend for creating marketing copy and blog posts.",
    tags: ["OpenAI", "GPT-3", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    title: "Personal Finance Dashboard",
    description: "Created a personal finance tracking dashboard with data visualization, budget planning and expense categorization.",
    tags: ["React", "D3.js", "Firebase", "Authentication"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    title: "Augmented Reality Navigation",
    description: "Developed an AR navigation app using ARKit and Core Location that provides real-time directions with visual overlays.",
    tags: ["Swift", "ARKit", "CoreLocation", "MapKit"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    title: "Healthcare Appointment System",
    description: "Built a healthcare appointment booking system with scheduling, reminders, and telemedicine integration.",
    tags: ["Next.js", "MySQL", "Twilio", "Auth0"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    title: "Smart Contract Audit Tool",
    description: "Created an automated smart contract security auditing tool that identifies common vulnerabilities and suggests fixes.",
    tags: ["Solidity", "JavaScript", "Static Analysis", "Security"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    title: "Collaborative Whiteboard App",
    description: "Designed a real-time collaborative whiteboard application with drawing tools, sticky notes, and video conferencing.",
    tags: ["WebRTC", "Canvas API", "Socket.io", "React"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    title: "Recommendation Engine",
    description: "Implemented a content recommendation engine using collaborative filtering and machine learning algorithms.",
    tags: ["Python", "Pandas", "scikit-learn", "Flask"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
  },
];

const InfiniteProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState<typeof allProjects>([]);
  const [loading, setLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);
  const initialLoad = useRef(true);

  // Load initial projects
  useEffect(() => {
    if (initialLoad.current) {
      loadMoreProjects();
      initialLoad.current = false;
    }
  }, []);

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && visibleProjects.length < allProjects.length) {
          loadMoreProjects();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [visibleProjects, loading]);

  const loadMoreProjects = () => {
    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
      const nextIndex = visibleProjects.length;
      const moreProjects = allProjects.slice(
        nextIndex,
        Math.min(nextIndex + 3, allProjects.length)
      );
      
      setVisibleProjects((prev) => [...prev, ...moreProjects]);
      setLoading(false);
    }, 800);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="section-heading text-center mb-12">Projects</h2>
        </FadeIn>

        <div className="space-y-20">
          {visibleProjects.map((project, index) => (
            <FadeIn 
              key={project.id} 
              delay={index % 3 * 100}
              duration={800}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={cn("relative overflow-hidden rounded-xl aspect-video", index % 2 !== 0 && "md:order-2")}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className={cn("flex flex-col justify-center", index % 2 !== 0 && "md:order-1")}>
                  <h3 className="text-2xl font-display font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:underline"
                    >
                      <Github size={16} />
                      <span>View Source</span>
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Loading indicator and observer target */}
        <div 
          ref={observerTarget} 
          className="flex justify-center items-center pt-12 pb-4"
        >
          {loading ? (
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-2"></div>
              <p className="text-sm text-foreground/60">Loading more projects...</p>
            </div>
          ) : visibleProjects.length < allProjects.length ? (
            <p className="text-sm text-foreground/60">Scroll to load more projects</p>
          ) : (
            <p className="text-sm text-foreground/60">You've reached the end of the projects</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfiniteProjectsSection;
