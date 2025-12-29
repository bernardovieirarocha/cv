import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.about': 'About Me',
    'nav.experience': 'Work Experience',
    'nav.education': 'Education',
    'nav.certifications': 'Certifications',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',

    // Hero
    'hero.name': 'Bernardo Vieira Rocha',
    'hero.title': 'Undergraduate in Computer Science and Computer Engineering.',
    'hero.location': 'Belo Horizonte, Brazil, MG',

    // About
    'about.title': 'About',
    'about.description': 'I am an Undergraduate Student 🎓 pursuing degrees in Computer Science at the Pontifical Catholic University of Minas Gerais and in Computer Engineering at the Federal Center for Technological Education of Minas Gerais. I am a Tech Enthusiast 💻 😃 passionate about learning and utilizing new technologies. I love building interesting projects and products that also serve a purpose.',

    // Experience
    'experience.title': 'Work Experience',
    'experience.cefet.title': 'Electronic Designer',
    'experience.cefet.company': 'CEFET-MG',
    'experience.cefet.period': '2024 - present',
    'experience.cefet.type': 'On-site',
    'experience.cefet.description': 'Electronic Module Designer using Altium Designer for the Formula Cefast Team.',
    'experience.puc.title': 'Computer Science Tutor (AEDs I)',
    'experience.puc.company': 'PUC MINAS',
    'experience.puc.period': '2024 - 2025',
    'experience.puc.type': 'On-site',
    'experience.puc.description': 'Tutor of Algorithms and Data Structures I at PUC Minas, assisting students in understanding concepts and solving exercises, developing skills in communication and leadership.',

    // Education
    'education.title': 'Education',
    'education.cefet.degree': 'Bachelor in Computer Engineering',
    'education.cefet.institution': 'Federal Center for Technological Education of Minas Gerais',
    'education.cefet.period': '2024 - 2029',
    'education.puc.degree': 'Bachelor in Computer Science',
    'education.puc.institution': 'Pontifical Catholic University of Minas Gerais',
    'education.puc.period': '2024 - 2028',
    'education.highschool.degree': 'High School Diploma',
    'education.highschool.institution': 'Magnum Agostiniano Cidade Nova School',
    'education.highschool.period': '2019 - 2023',

    // Certifications
    'certifications.title': 'Certifications',
    'certifications.swift.title': 'Algorithms and Object-Oriented Programming with Swift',
    'certifications.swift.period': '2024 - 2025',
    'certifications.swift.description': 'Completion of the Algorithms and Object-Oriented Programming with Swift course.',
    'certifications.redhat.title': 'Red Hat System Administration I (RH124)',
    'certifications.redhat.period': '2024 - 2025',
    'certifications.redhat.description': 'Completion of the Red Hat System Administration I (RH124) course.',
    'certifications.python.title': 'Complete Python 3',
    'certifications.python.issuer': 'Udemy',
    'certifications.python.period': '2018',
    'certifications.python.description': 'Certificate of completion of the Complete Python 3 course.',
    'certifications.django.title': 'Web Development with Django, React and AWS/Linux Deploy',
    'certifications.django.issuer': 'Udemy',
    'certifications.django.period': '2024',
    'certifications.django.description': 'Certificate of completion of the Udemy course on Web Development with Django.',
    'certifications.math.title': 'International Olympiad Mathématiques sans frontières',
    'certifications.math.period': '2023',
    'certifications.math.description': 'Gold Medalist in the OIMSF.',
    'certifications.astronomy.title': 'Brazilian Astronomy and Astronautics Olympiad',
    'certifications.astronomy.period': '2023',
    'certifications.astronomy.description': 'Silver Medalist in the OBA 2023.',

    // Skills
    'skills.title': 'Skills',

    // Projects
    'projects.title': 'Projects',
    'projects.flixmate.title': 'FlixMate',
    'projects.flixmate.description': 'A web application for movie recommendation and discovery.',
    'projects.testador.title': 'C/C++ Tester',
    'projects.testador.description': 'Project that provides an automation script to test C/C++ code, verifying if outputs are correct.',
    'projects.class2cal.title': 'Class2Cal',
    'projects.class2cal.description': 'Class2Cal automates the creation of academic calendars by integrating CSV and JSON to iCalendar (.ics) format.',
    'projects.class2cal.type': 'Side Project',
    'projects.genius.title': 'Genius TinkerCad',
    'projects.genius.description': 'Functional implementation of the popular memory game "Genius" using Tinkercad Circuits for the LIP course.',
    'projects.unicaronas.title': 'UniCaronas',
    'projects.unicaronas.description': 'TI-1 Project to facilitate carpooling among university students, promoting a more organized, safe, and sustainable means of transportation.',

    // Toolbar
    'toolbar.print': 'Print Resume',
    'toolbar.scrollTop': 'Scroll to Top',
    'toolbar.language': 'Switch Language',
    'toolbar.contact': 'Contact Me',

    // Footer
    'footer.updated': 'Updated in',
  },
  pt: {
    // Header
    'nav.about': 'Sobre Mim',
    'nav.experience': 'Experiência',
    'nav.education': 'Educação',
    'nav.certifications': 'Certificações',
    'nav.projects': 'Projetos',
    'nav.skills': 'Habilidades',

    // Hero
    'hero.name': 'Bernardo Vieira Rocha',
    'hero.title': 'Graduando em Ciência da Computação e Engenharia de Computação.',
    'hero.location': 'Belo Horizonte, Brasil, MG',

    // About
    'about.title': 'Sobre',
    'about.description': 'Eu sou um Estudante de Graduação 🎓 cursando Ciência da Computação na Pontifícia Universidade Católica de Minas Gerais e Engenharia de Computação no Centro Federal de Educação Tecnológica de Minas Gerais. Eu sou um Entusiasta 💻 😃 apaixonado por aprender e utilizar novas tecnologias. Eu adoro construir projetos e produtos interessantes, que também sirvam um propósito.',

    // Experience
    'experience.title': 'Experiência Profissional',
    'experience.cefet.title': 'Projetista Eletrônico',
    'experience.cefet.company': 'CEFET-MG',
    'experience.cefet.period': '2024 - presente',
    'experience.cefet.type': 'Presencial',
    'experience.cefet.description': 'Projetista de Módulos Eletrônicos usando Altium Designer para a Equipe Fórmula Cefast.',
    'experience.puc.title': 'Monitor de Computação (AEDs I)',
    'experience.puc.company': 'PUC MINAS',
    'experience.puc.period': '2024 - 2025',
    'experience.puc.type': 'Presencial',
    'experience.puc.description': 'Monitor de Algoritmos e Estrutura de Dados I na PUC Minas, auxilio alunos na compreensão de conceitos e resolução de exercícios, desenvolvendo habilidades em comunicação e liderança.',

    // Education
    'education.title': 'Educação',
    'education.cefet.degree': 'Bacharelado em Engenharia de Computação',
    'education.cefet.institution': 'Centro Federal de Educação Tecnológica de Minas Gerais',
    'education.cefet.period': '2024 - 2029',
    'education.puc.degree': 'Bacharelado em Ciência da Computação',
    'education.puc.institution': 'Pontifícia Universidade Católica de Minas Gerais',
    'education.puc.period': '2024 - 2028',
    'education.highschool.degree': 'Ensino Médio Completo',
    'education.highschool.institution': 'Colégio Magnum Agostiniano Cidade Nova',
    'education.highschool.period': '2019 - 2023',

    // Certifications
    'certifications.title': 'Certificações',
    'certifications.swift.title': 'Algoritmos e Programação Orientada a Objetos com Swift',
    'certifications.swift.period': '2024 - 2025',
    'certifications.swift.description': 'Conclusão do curso Algoritmos e Programação Orientada a Objetos com Swift.',
    'certifications.redhat.title': 'Red Hat System Administration I (RH124)',
    'certifications.redhat.period': '2024 - 2025',
    'certifications.redhat.description': 'Conclusão do curso Red Hat System Administration I (RH124).',
    'certifications.python.title': 'Python 3 COMPLETO',
    'certifications.python.issuer': 'Udemy',
    'certifications.python.period': '2018',
    'certifications.python.description': 'Certificado de conclusão do curso de Python 3 COMPLETO.',
    'certifications.django.title': 'Desenvolvimento web com Django, React e deploy AWS e Linux',
    'certifications.django.issuer': 'Udemy',
    'certifications.django.period': '2024',
    'certifications.django.description': 'Certificado de conclusão do curso da Udemy de Desenvolvimento web com Django.',
    'certifications.math.title': 'Olimpíada Internacional Mathématiques sans frontières',
    'certifications.math.period': '2023',
    'certifications.math.description': 'Medalhalista de Ouro na OMISF.',
    'certifications.astronomy.title': 'Olimpíada Brasileira de Astronomia e Astronáutica',
    'certifications.astronomy.period': '2023',
    'certifications.astronomy.description': 'Medalhalista de Prata na OBA 2023.',

    // Skills
    'skills.title': 'Habilidades',

    // Projects
    'projects.title': 'Projetos',
    'projects.flixmate.title': 'FlixMate',
    'projects.flixmate.description': 'Uma aplicação web para recomendação e descoberta de filmes.',
    'projects.testador.title': 'Testador C/C++',
    'projects.testador.description': 'Projeto que fornece um script de automação para testar códigos em C/C++, verificando se as saídas estão corretas.',
    'projects.class2cal.title': 'Class2Cal',
    'projects.class2cal.description': 'Class2Cal automatiza a criação de calendários acadêmicos integrando CSV e JSON para o formato iCalendar (.ics).',
    'projects.class2cal.type': 'Projeto Pessoal',
    'projects.genius.title': 'Genius TinkerCad',
    'projects.genius.description': 'Implementação funcional do popular jogo de memória "Genius" usando Tinkercad Circuits para a disciplina de LIP.',
    'projects.unicaronas.title': 'UniCaronas',
    'projects.unicaronas.description': 'Projeto de TI-1 para facilitar a combinação de caronas entre estudantes universitários, promovendo um meio de transporte mais organizado, seguro e sustentável.',

    // Toolbar
    'toolbar.print': 'Imprimir Currículo',
    'toolbar.scrollTop': 'Voltar ao Topo',
    'toolbar.language': 'Mudar Idioma',
    'toolbar.contact': 'Entrar em Contato',

    // Footer
    'footer.updated': 'Atualizado em',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
