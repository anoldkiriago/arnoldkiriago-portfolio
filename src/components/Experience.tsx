import { Briefcase, Camera, Wrench, Heart } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "Freelance Web Developer",
    period: "2023 - Present",
    description: "Building custom websites and digital solutions for clients across various industries.",
    color: "bg-primary"
  },
  {
    icon: Camera,
    role: "Social Media Manager & Videographer",
    period: "Jan 2025 - Aug 2025",
    description: "Creating engaging video content and managing social media presence for small businesses.",
    color: "bg-accent"
  },
  {
    icon: Wrench,
    role: "IT Support Specialist",
    period: "2024 - Present",
    description: "Providing technical support, system maintenance, and troubleshooting services.",
    color: "bg-primary"
  },
  {
    icon: Heart,
    role: "Community Outreach Volunteer",
    period: "2024 - Present",
    description: "Engaging in community development projects and digital advocacy initiatives.",
    color: "bg-accent"
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My experience in technology, creativity, and community service
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.role}
                className={`flex gap-8 items-center animate-slide-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass p-6 rounded-lg hover:scale-105 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>

                <div className="relative hidden md:block">
                  <div className={`w-16 h-16 rounded-full ${exp.color} flex items-center justify-center shadow-lg`}>
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
