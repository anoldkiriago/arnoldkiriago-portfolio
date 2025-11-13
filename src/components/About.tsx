import { Code, Monitor, Video, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  { icon: Code, label: "Web Development", color: "text-primary" },
  { icon: Monitor, label: "IT Support", color: "text-accent" },
  { icon: Video, label: "Videography", color: "text-primary" },
  { icon: Users, label: "Community Outreach", color: "text-accent" },
];

const tools = [
  "HTML/CSS", "WordPress", "Canva", "AI Tools",
  "IT Support", "Networking", "System Maintenance", "Video Editing"
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A self-taught tech creative and final-year Community Development student with experience 
              in web development, system troubleshooting, digital content creation, and social media branding. 
              I build clean websites, solve tech problems, and help small businesses grow using digital tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
            {skills.map((skill) => (
              <Card 
                key={skill.label}
                className="glass p-6 flex flex-col items-center text-center gap-3 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
                <span className="text-sm font-medium">{skill.label}</span>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">Technical Tools & Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool) => (
                <span 
                  key={tool}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
