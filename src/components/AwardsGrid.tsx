
import { cn } from "@/lib/utils";
import FadeIn from "./animations/FadeIn";
import { Award } from "lucide-react";

// Sample awards data
const awards = [
  {
    title: "Treehacks Finalist",
    year: "2025",
    description: "Selected as a finalist at Stanford's premier hackathon for innovative project development."
  },
  {
    title: "Best Hack by Fidelity",
    year: "2024",
    description: "Awarded for developing a cutting-edge financial technology solution at a national hackathon."
  },
  {
    title: "Stellantis Student Awards recipient",
    year: "2022",
    description: "Recognized for contributions to automotive software development and innovation."
  },
  {
    title: "National Merit Scholar Finalist",
    year: "2021",
    description: "Selected as a National Merit Scholar Finalist for academic excellence and test performance."
  },
  {
    title: "Regents Merit Award",
    year: "2021",
    description: "Received university merit award for outstanding academic achievement and leadership."
  }
];

const AwardsGrid = () => {
  return (
    <section id="awards" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="section-heading text-center mb-12">Awards</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <FadeIn 
              key={award.title} 
              delay={index * 100}
              className="h-full"
            >
              <div 
                className={cn(
                  "h-full glass-card glass-gradient-effect rounded-xl p-6",
                  "transition-all duration-500 card-hover"
                )}
              >
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-primary" size={24} />
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-foreground/70 text-sm">{award.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsGrid;
