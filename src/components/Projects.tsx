import { Globe, Share2, Heart, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    icon: Globe,
    title: "Portfolio Websites",
    description: "Custom portfolio websites for professionals and creatives with modern, responsive designs.",
    tags: ["HTML/CSS", "WordPress", "Responsive Design"],
    color: "text-primary"
  },
  {
    icon: Share2,
    title: "Social Media & Videography",
    description: "Complete social media management and professional video content for small businesses.",
    tags: ["Video Editing", "Canva", "Social Media"],
    color: "text-accent"
  },
  {
    icon: Heart,
    title: "NGO Digital Advocacy",
    description: "Digital advocacy website helping NGOs reach wider audiences and drive impact.",
    tags: ["Web Development", "Digital Marketing", "Community"],
    color: "text-primary"
  },
  {
    icon: Wrench,
    title: "IT Support Solutions",
    description: "System troubleshooting, maintenance, and technical support for individuals and businesses.",
    tags: ["IT Support", "Networking", "System Maintenance"],
    color: "text-accent"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in web development, digital content, and IT solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass group hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <project.icon className={`w-12 h-12 ${project.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <CardTitle className="text-2xl mt-4">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
