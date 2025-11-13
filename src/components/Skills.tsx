import { Code, Palette, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Code,
    title: "Technical Skills",
    color: "text-primary",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "WordPress", level: 85 },
      { name: "IT Support", level: 88 },
      { name: "Networking", level: 75 },
      { name: "System Maintenance", level: 82 },
      { name: "AI Tools", level: 80 }
    ]
  },
  {
    icon: Palette,
    title: "Creative Skills",
    color: "text-accent",
    skills: [
      { name: "Videography", level: 85 },
      { name: "Canva Design", level: 92 },
      { name: "Video Editing", level: 88 },
      { name: "Branding", level: 80 }
    ]
  },
  {
    icon: Users,
    title: "Professional Skills",
    color: "text-primary",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Customer Support", level: 90 },
      { name: "Project Coordination", level: 85 },
      { name: "Problem Solving", level: 88 }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical, creative, and professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <Card 
              key={category.title}
              className="glass animate-slide-up"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <CardTitle>{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="space-y-2"
                    style={{ animationDelay: `${(catIndex * 100) + (skillIndex * 50)}ms` }}
                  >
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
