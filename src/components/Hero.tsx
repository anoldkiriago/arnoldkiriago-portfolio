import { Download, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end opacity-50" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Arnold <span className="gradient-text">Kiriago</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Web Developer • IT Support • Creative Digital Specialist
              </p>
              <p className="text-lg text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Based in Nairobi, Kenya
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gap-2 hover:scale-105 transition-transform duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5" />
                Hire Me
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 hover:scale-105 transition-transform duration-300"
                asChild
              >
                <a href="/Arnold_Kiriago_CV.docx" download>
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="gap-2 hover:scale-105 transition-transform duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="w-5 h-5" />
                View Projects
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-3xl opacity-30 animate-pulse" />
              <div className="relative rounded-full overflow-hidden border-4 border-card shadow-2xl w-80 h-80 md:w-96 md:h-96 animate-float">
                <img 
                  src={profileImage} 
                  alt="Arnold Kiriago" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
