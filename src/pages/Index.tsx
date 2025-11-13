import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold gradient-text">AK</h1>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
              About
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
              Projects
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
              Experience
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
              Skills
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
              Contact
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
