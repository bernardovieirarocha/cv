import { Code2, Cpu, Database, Server, Workflow, Zap } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const About = () => {
  const highlights = [
    { icon: Code2, label: "Software Engineering" },
    { icon: Cpu, label: "Embedded Systems" },
    { icon: Zap, label: "Electronics" },
    { icon: Server, label: "Backend" },
    { icon: Workflow, label: "DevOps" },
    { icon: Database, label: "Systems Design" },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-4 mb-16">
              <span className="font-mono text-primary text-sm">01.</span>
              <h2 className="text-3xl md:text-4xl font-bold">Sobre Mim</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <AnimatedSection animation="fade-right" delay={100}>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sou um entusiasta da tecnologia que acredita no poder da 
                  <span className="text-foreground font-medium"> engenharia bem feita</span>. 
                  Como estudante de Engenharia de Computação e Ciência da Computação, 
                  transito entre o hardware e o software com naturalidade.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Minha paixão está em criar soluções que fazem a diferença — desde 
                  <span className="text-foreground font-medium"> sistemas embarcados </span>
                  que operam no limite do metal até 
                  <span className="text-foreground font-medium"> arquiteturas de backend </span>
                  escaláveis e resilientes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Acredito que a melhor tecnologia é aquela que 
                  <span className="text-primary font-semibold"> simplesmente funciona</span> — 
                  elegante por baixo dos panos, invisível para quem usa.
                </p>

                {/* Terminal-style quote */}
                <div className="mt-8 p-4 rounded-lg bg-secondary/50 border border-border">
                  <p className="font-mono text-sm text-muted-foreground">
                    <span className="text-primary">bernardo@portfolio</span>:<span className="text-accent">~</span>$ echo $FILOSOFIA
                  </p>
                  <p className="font-mono text-sm text-foreground mt-2">
                    "Código limpo, sistemas robustos, impacto mensurável."
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Skills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <AnimatedSection key={item.label} animation="scale" delay={150 + index * 100}>
                  <div 
                    className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 cursor-default"
                  >
                    <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
