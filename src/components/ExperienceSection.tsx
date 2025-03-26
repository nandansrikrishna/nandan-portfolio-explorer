
import FadeIn from "./animations/FadeIn";
import ExperienceItem from "./ExperienceItem";
import { Database, Code, Laptop } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tour",
      period: "July 2024 - Present",
      points: [
        {
          text: "Developed and deployed a scalable FastAPI backend to enable automated web scraping for over 100 apartment websites, reducing manual effort by 90%.",
          icon: <Code size={18} />
        },
        {
          text: "Designed a distributed system to power AI-driven video tour widgets, leveraging PostgreSQL for efficient data management.",
          icon: <Database size={18} />
        },
        {
          text: "Built REST APIs for real-time analytics and automated data collection pipelines using scheduled cron jobs.",
          icon: <Code size={18} />
        },
        {
          text: "Spearheaded integration of Instagram analytics, Google Reviews, and Facebook ad campaign data into a centralized platform, improving data accessibility for client insights.",
          icon: <Laptop size={18} />
        }
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Michigan Kidney Translational Medicine Center",
      period: "May 2023 - Aug 2023",
      points: [
        {
          text: "Led the development of a genome data analysis web application to assist researchers in identifying early signs of kidney disease.",
          icon: <Code size={18} />
        },
        {
          text: "Developed an open-source web application that allows non-bioinformaticians to conduct in-depth metabolomics data analysis with interactive visualizations using Python and Shiny.",
          icon: <Laptop size={18} />
        },
        {
          text: "Developed an in-house gene expression visualization tool that allows researchers to interpret gene data using R and Shiny easily. Increased productivity by 50%.",
          icon: <Database size={18} />
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 px-6 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={100} duration={800}>
          <h2 className="section-heading text-center mb-12">Work Experience</h2>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={200} duration={800}>
            {experiences.map((exp, index) => (
              <ExperienceItem 
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                points={exp.points}
              />
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
