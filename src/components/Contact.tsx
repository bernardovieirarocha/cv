import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <AnimatedSection animation="fade-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="font-mono text-primary text-sm">04.</span>
              <h2 className="text-3xl md:text-4xl font-bold">Contato</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
              Estou sempre aberto a novas oportunidades, colaborações e conversas sobre 
              tecnologia. Se você tem um projeto interessante ou apenas quer trocar uma ideia, 
              ficarei feliz em conversar.
            </p>
          </AnimatedSection>

          {/* Contact options */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-mono text-sm text-muted-foreground mb-2">Email</p>
                <a 
                  href="mailto:bernardo@email.com" 
                  className="text-foreground hover:text-primary transition-colors link-underline"
                >
                  bernardo@email.com
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-mono text-sm text-muted-foreground mb-2">Localização</p>
                <p className="text-foreground">Brasil</p>
              </div>
            </AnimatedSection>
          </div>

          {/* CTA Button */}
          <AnimatedSection animation="scale" delay={300}>
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:bernardo@email.com" className="gap-3">
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </a>
            </Button>
          </AnimatedSection>

          {/* Terminal signature */}
          <AnimatedSection animation="fade" delay={400}>
            <div className="mt-16 p-4 rounded-lg bg-secondary/30 border border-border inline-block">
              <p className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">$</span> echo "Obrigado por visitar!" 
                <span className="text-primary animate-pulse">▌</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
