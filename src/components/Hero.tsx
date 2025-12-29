import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Grid background */}
      <div className="absolute inset-0 grid-background opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-secondary/50 backdrop-blur-sm opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> ./init --portfolio
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up stagger-1">
            <span className="text-foreground">Bernardo</span>
            <br />
            <span className="text-gradient">Rocha</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 opacity-0 animate-fade-up stagger-2">
            Engenheiro de Computação & Cientista da Computação
          </p>
          
          {/* Innovative statement */}
          <p className="font-mono text-lg md:text-xl text-primary mb-12 opacity-0 animate-fade-up stagger-3">
            &lt;Transformando bits em impacto real/&gt;
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-up stagger-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">Ver Projetos</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Contato</a>
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-up stagger-5">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-secondary hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-secondary hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:bernardo@email.com"
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-secondary hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-mono">scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
