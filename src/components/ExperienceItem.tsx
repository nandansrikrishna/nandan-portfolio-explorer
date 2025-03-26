
import { Calendar, Code, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ExperiencePoint = {
  text: string;
  icon?: ReactNode;
};

type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  points: ExperiencePoint[];
};

const ExperienceItem = ({ title, company, period, points }: ExperienceItemProps) => {
  return (
    <div className="mb-8 last:mb-0 p-6 rounded-xl bg-white/50 dark:bg-black/20 border border-primary/10 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between mb-2 gap-1">
        <h3 className="font-bold text-xl flex items-center">
          {title} <span className="text-foreground/70">| {company}</span>
        </h3>
        <span className="flex items-center text-sm text-foreground/70">
          <Calendar size={16} className="mr-1 flex-shrink-0" /> {period}
        </span>
      </div>
      <ul className="space-y-3 mt-3">
        {points.map((point, index) => (
          <li 
            key={index} 
            className={cn(
              "flex items-start gap-2",
              "text-foreground/80 leading-relaxed"
            )}
          >
            <span className="text-primary/70 mt-1 flex-shrink-0">
              {point.icon || <Code size={18} />}
            </span>
            <span>{point.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
