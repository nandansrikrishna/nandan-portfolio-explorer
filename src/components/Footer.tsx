
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/30 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">Nandan</h2>
            <p className="text-foreground/70 mb-6 max-w-md">
              Software Engineer with a passion for building innovative solutions. 
              Graduating with a Computer Science degree.
            </p>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:nandans@umich.edu"
                className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors"
              >
                <Mail size={18} className="mr-2" />
                nandans@umich.edu
              </a>
              <a 
                href="https://github.com/nandansrikrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors"
              >
                <Github size={18} className="mr-2" />
                github.com/nandansrikrishna
              </a>
              <a 
                href="https://linkedin.com/in/nandan-srikrishna/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors"
              >
                <Linkedin size={18} className="mr-2" />
                linkedin.com/in/nandan-srikrishna/
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square max-w-[300px] mx-auto md:ml-auto rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <img
                src="public/lovable-uploads/4969bd16-61e5-467f-acfa-ac836cf09ddd.png"
                alt="Nandan on a beach with a kayak"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Nandan. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="https://github.com/nandansrikrishna"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full text-foreground/60 hover:text-foreground",
                  "transition-colors duration-300",
                  "hover:bg-primary/5"
                )}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/nandan-srikrishna/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full text-foreground/60 hover:text-foreground",
                  "transition-colors duration-300",
                  "hover:bg-primary/5"
                )}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:nandans@umich.edu"
                className={cn(
                  "p-2 rounded-full text-foreground/60 hover:text-foreground",
                  "transition-colors duration-300",
                  "hover:bg-primary/5"
                )}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
