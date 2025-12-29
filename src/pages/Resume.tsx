import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, MapPin, Calendar, Briefcase, GraduationCap, Award, Code2, FolderKanban } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Resume = () => {
  const { t, language } = useLanguage();

  // Scroll animation refs
  const [headerRef, headerVisible] = useScrollAnimation<HTMLElement>();
  const [aboutRef, aboutVisible] = useScrollAnimation<HTMLElement>();
  const [expRef, expVisible] = useScrollAnimation<HTMLElement>();
  const [eduRef, eduVisible] = useScrollAnimation<HTMLElement>();
  const [certRef, certVisible] = useScrollAnimation<HTMLElement>();
  const [skillsRef, skillsVisible] = useScrollAnimation<HTMLElement>();
  const [projectsRef, projectsVisible] = useScrollAnimation<HTMLElement>();

  const experiences = [
    {
      title: t('experience.cefet.title'),
      company: t('experience.cefet.company'),
      period: t('experience.cefet.period'),
      type: t('experience.cefet.type'),
      description: t('experience.cefet.description'),
      technologies: ["Altium Designer", "PCB Design", "Electronics"],
    },
    {
      title: t('experience.puc.title'),
      company: t('experience.puc.company'),
      period: t('experience.puc.period'),
      type: t('experience.puc.type'),
      description: t('experience.puc.description'),
      technologies: ["C", "Data Structures", "Algorithms", "Teaching"],
    },
  ];

  const education = [
    {
      degree: t('education.cefet.degree'),
      institution: t('education.cefet.institution'),
      period: t('education.cefet.period'),
    },
    {
      degree: t('education.puc.degree'),
      institution: t('education.puc.institution'),
      period: t('education.puc.period'),
    },
    {
      degree: t('education.highschool.degree'),
      institution: t('education.highschool.institution'),
      period: t('education.highschool.period'),
    },
  ];

  const certifications = [
    {
      title: t('certifications.swift.title'),
      period: t('certifications.swift.period'),
      description: t('certifications.swift.description'),
      link: "https://lms.hackatruck.com.br/mod/simplecertificate/verify.php",
    },
    {
      title: t('certifications.redhat.title'),
      period: t('certifications.redhat.period'),
      description: t('certifications.redhat.description'),
      link: "https://www.linkedin.com/in/bernardovrocha/details/certifications/1723726445548/single-media-viewer?type=DOCUMENT&profileId=ACoAAEtsdd4Bid3JT3WnHLrstc7yY9ct1Ij0dXY",
    },
    {
      title: t('certifications.python.title'),
      issuer: t('certifications.python.issuer'),
      period: t('certifications.python.period'),
      description: t('certifications.python.description'),
      link: "https://www.udemy.com/certificate/UC-21V2Q9RM/",
    },
    {
      title: t('certifications.django.title'),
      issuer: t('certifications.django.issuer'),
      period: t('certifications.django.period'),
      description: t('certifications.django.description'),
      link: "https://www.udemy.com/certificate/UC-2dcdc62c-fde4-48fa-99e3-9bd8eeb77a49/",
    },
    {
      title: t('certifications.math.title'),
      period: t('certifications.math.period'),
      description: t('certifications.math.description'),
      link: "https://www.matematicasemfronteiras.org/OIMSF_2023_NACIONAL_OURO.pdf",
    },
    {
      title: t('certifications.astronomy.title'),
      period: t('certifications.astronomy.period'),
      description: t('certifications.astronomy.description'),
      link: "http://www.oba.org.br/site/",
    },
  ];

  const skills = [
    "Python", "Altium", "C", "C++", "Java", "Linux", "Django", "JavaScript", "HTML", "CSS", "React"
  ];

  const projects = [
    {
      title: t('projects.flixmate.title'),
      description: t('projects.flixmate.description'),
      technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Figma"],
      link: "https://github.com/rubensbkl/Flixmate",
    },
    {
      title: t('projects.testador.title'),
      description: t('projects.testador.description'),
      technologies: ["C++", "C", "Linux", "Python"],
      link: "https://github.com/bernardovieirarocha/TestadorC",
    },
    {
      title: t('projects.class2cal.title'),
      description: t('projects.class2cal.description'),
      type: t('projects.class2cal.type'),
      technologies: ["Python", "Data Science"],
      link: "https://github.com/bernardovieirarocha/Class2Cal",
    },
    {
      title: t('projects.genius.title'),
      description: t('projects.genius.description'),
      technologies: ["Arduino", "C++", "Tinkercad"],
      link: "https://github.com/bernardovieirarocha/GeniusTinkerCadLIP",
    },
    {
      title: t('projects.unicaronas.title'),
      description: t('projects.unicaronas.description'),
      technologies: ["JavaScript", "jQuery", "HTML5", "CSS3", "Node.js"],
      link: "https://github.com/bernardovieirarocha/UniCaronas",
    },
  ];

  const getMonthYear = () => {
    const date = new Date();
    return date.toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border print:hidden">
        <nav className="container px-6 h-16 flex items-center">
          <img src="/bernardologo.png" alt="Logo" className="h-8 w-auto invert dark:invert-0 opacity-90 hover:opacity-100 transition-opacity" />
        </nav>
      </header>

      <main className="pt-24 pb-16 print:pt-0 print:pb-0">
        <div className="container px-6 max-w-4xl mx-auto">
          {/* Profile Header */}
          <section
            ref={headerRef}
            className={`mb-12 pb-8 border-b border-border transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex items-center gap-6">
                <img
                  src="https://avatars.githubusercontent.com/bernardovieirarocha"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-2 border-primary/50 shadow-lg shadow-primary/20"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">{t('hero.name')}</h1>
                  <p className="text-xl text-primary font-mono">{t('hero.title')}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="mailto:b.vieira.rocha@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  b.vieira.rocha@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {t('hero.location')}
                </span>
                <div className="flex items-center gap-4 mt-2">
                  <a href="https://github.com/bernardovieirarocha" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/bernardovrocha/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section
            ref={aboutRef}
            className={`mb-12 transition-all duration-700 delay-100 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <p className="text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
          </section>

          {/* Experience */}
          <section
            ref={expRef}
            className={`mb-12 transition-all duration-700 ${expVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">{t('experience.title')}</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 print:pl-0 border-l-2 print:border-l-0 border-border hover:border-primary/50 transition-colors"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary print:hidden" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-semibold">{exp.title}</h3>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary text-sm mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-2">{exp.type}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono rounded bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section
            ref={eduRef}
            className={`mb-12 transition-all duration-700 ${eduVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">{t('education.title')}</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 print:pl-0 border-l-2 print:border-l-0 border-border hover:border-primary/50 transition-colors"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary print:hidden" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-primary text-sm">{edu.institution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section
            ref={skillsRef}
            className={`mb-12 transition-all duration-700 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">{t('skills.title')}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-lg bg-secondary border border-border"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section
            ref={certRef}
            className={`mb-12 transition-all duration-700 ${certVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">{t('certifications.title')}</h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-border/50 last:border-0"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      {'link' in cert && cert.link ? (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-sm hover:text-primary transition-colors">
                          {cert.title}
                        </a>
                      ) : (
                        <h3 className="font-semibold text-sm">{cert.title}</h3>
                      )}
                    </div>
                    {'issuer' in cert && cert.issuer && (
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">{cert.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">{cert.period}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section
            ref={projectsRef}
            className={`mb-12 transition-all duration-700 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <FolderKanban className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">{t('projects.title')}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 print:grid-cols-1">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold">{project.title}</h3>
                    {'link' in project && project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors print:hidden"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  {'type' in project && project.type && (
                    <span className="text-xs text-primary font-mono mb-2 block">{project.type}</span>
                  )}
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-background/50 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-8 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              Press{' '}
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-secondary px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>J
              </kbd>{' '}
              to open the command menu
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Resume;
