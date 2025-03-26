import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import FadeIn from "./animations/FadeIn";
import { cn } from "@/lib/utils";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Poll Tape Scanner for Election Night Reporting",
    description: "This project explores a novel approach to election-night reporting (ENR) using poll tape scanning technology. By leveraging mobile devices to capture and process poll tape data and AI powered OCR technology, we aim to bridge the gap between speed and security in preliminary election result reporting.",
    tags: ["OCR", "AI", "Python", "React Native"],
    image: "/project_images/PollScanner.png",
  },
  {
    id: 2,
    title: "IdentityAI",
    description: "Based on just an individual's face, we can build a comprehensive profile leveraging smaller pieces of evidence from various sources on the web. We can then cross reference this information with any ID card to validate identification with a high degree of accuracy.",
    tags: ["Agentic AI", "Python", "React"],
    image: "/project_images/IdentityAIDashboard.jpg",
  },
  {
    id: 3,
    title: "If We Had Trains (In Progress)",
    description: "An interactive educational platform demonstrating how high-speed rail could transform U.S. transportation infrastructure. The tool calculates optimal train routes nationwide while integrating Google Maps API to analyze connectivity between stations and user locations.",
    tags: ["React", "Routing", "APIs"],
    image: "/project_images/trains_dash.png",
  },
  {
    id: 4,
    title: "Job Finder Bot",
    description: "A tailored job tracking solution that automatically scrapes targeted websites for relevant job listings based on user preferences. The bot monitors employment opportunities in real-time, filtering results according to customized criteria, and delivers curated job openings directly to users via email notifications.",
    tags: ["Web Scraping", "Python", "Google Cloud"],
    image: "/project_images/job_listings.png",
  },
];

const ProjectsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalItems = projects.length;

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    setProgressWidth((activeIndex + 1) / totalItems * 100);
  }, [activeIndex, totalItems]);

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="section-heading text-center mb-12">Projects</h2>
        </FadeIn>

        <div className="relative overflow-hidden">
          <FadeIn>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <p className="text-sm text-foreground/60 font-medium">
                  Item {activeIndex + 1} of {totalItems}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full border border-border bg-background shadow-sm hover:bg-primary/5 transition-colors"
                  aria-label="Previous project"
                  disabled={isAnimating}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full border border-border bg-background shadow-sm hover:bg-primary/5 transition-colors"
                  aria-label="Next project"
                  disabled={isAnimating}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Progress bar */}
          <div className="h-1 bg-border rounded-full mb-6 overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500 ease-in-out"
              style={{ width: `${progressWidth}%` }}
            />
          </div>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="relative"
          >
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full flex-shrink-0 px-4"
                    style={{ minWidth: "100%" }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative overflow-hidden rounded-xl aspect-video">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to project ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
