import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a href="#" className="font-mono text-lg font-bold">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">BR</span>
              <span className="text-primary">/&gt;</span>
            </a>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:bernardo@email.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="font-mono text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Bernardo Rocha
            </p>
          </div>

          {/* Built with */}
          <p className="text-center font-mono text-xs text-muted-foreground mt-8">
            Projetado & Desenvolvido com{" "}
            <span className="text-primary">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
