
import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import FadeIn from "./animations/FadeIn";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

// project data
const allProjects = [
  {
    id: 1,
    title: "Poll Tape Scanner for Election Night Reporting",
    description: "This project explores a novel approach to election-night reporting (ENR) using poll tape scanning technology. By leveraging mobile devices to capture and process poll tape data and AI powered OCR technology, we aim to bridge the gap between speed and security in preliminary election result reporting.",
    tags: ["OCR", "AI", "Python", "React Native"],
    image: "/project_images/PollScanner.png",
    links: { source: "https://github.com/ElectionNightReporting", demo: "https://www.youtube.com/playlist?list=PLFkdnw7FLBcBenD3G70jNKQ9ueyYPid9W" },
  },
  {
    id: 2,
    title: "IdentityAI",
    description: "Based on just an individual's face, we can build a comprehensive profile leveraging smaller pieces of evidence from various sources on the web. We can then cross reference this information with any ID card to validate identification with a high degree of accuracy.",
    tags: ["Agentic AI", "Python", "React"],
    image: "/project_images/IdentityAIDashborad.jpg",
    links: { source: "https://github.com/mschubs/IdentityAI", demo: "https://youtu.be/5B6Yhyr4uA0?si=49vCsU8EdD5I_sbu" },
  },
  {
    id: 3,
    title: "If We Had Trains (In Progress)",
    description: "An interactive educational platform demonstrating how high-speed rail could transform U.S. transportation infrastructure. The tool calculates optimal train routes nationwide while integrating Google Maps API to analyze connectivity between stations and user locations.",
    tags: ["React", "Routing", "APIs"],
    image: "/project_images/trains_dash.png",
    links: { source: "https://github.com/nandansrikrishna/ifwehadtrains" },
  },
  {
    id: 4,
    title: "Job Finder Bot",
    description: "A tailored job tracking solution that automatically scrapes targeted websites for relevant job listings based on user preferences. The bot monitors employment opportunities in real-time, filtering results according to customized criteria, and delivers curated job openings directly to users via email notifications.",
    tags: ["Web Scraping", "Python", "Google Cloud"],
    image: "/project_images/job_listings.png",
    links: { source: "https://github.com/nandansrikrishna/IntuitiveScraper" },
  },
];

const InfiniteProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState<typeof allProjects>(allProjects);

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
                    {project.links.source && (
                      <a
                        href={project.links.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:underline"
                      >
                        <Github size={16} />
                        <span>View Source</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:underline"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteProjectsSection;
