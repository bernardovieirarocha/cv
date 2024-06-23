import { GitHubIcon, LinkedInIcon } from "@/components/icons";
// import {
//   Logo
// } from "@/images/logos";

export const RESUME_DATA = {
  name: "Bernardo Vieira Rocha",
  initials: "BVR",
  location: "Belo Horizonte, Brazil, MG",
  locationLink: "https://www.google.com/maps/place/BeloHorizonte",
  about:
    "Graduando em Ciência da Computação",
  summary:
    "Eu sou um Estudante de Graduação 🎓 @Pontifícia Universidade Católica de Minas Gerais cursando Ciência da Computação. Eu sou um Enthusiasta 💻 😃 apaixonado por aprender e utilizar novas tecnologias. Eu adoro construir projetos e produtos interessantes, que também sirvam um propósito.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/64905090?s=400&u=38aeca0edb2c6c8ccd97e96726c6ab622026c39f&v=4",
  personalWebsiteUrl: "https://bernardorocha.com",
  contact: {
    email: "b.vieira.rocha@gmail.com",
    tel: "++55 31 993679089",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/upwardweb",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bernardovrocha/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Pontifical Catholic University of Minas Gerais",
      degree: "Bacharelado em Ciência da Computação",
      start: "2024",
      end: "2028",
    },
    {
      school: "Colégio Magnum Agostiniano Cidade Nova",
      degree: "Ensino Médio Completo",
      start: "2019",
      end: "2023",
    }
  ],
  work: [
    {
      company: "Curso Ctrl Play+Young",
      link: "https://ctrlplay.com.br/cursos-regulares/ctrl-young/",
      badges: ["CtrlPlay"],
      title: "",
      logo: "",
      start: "2020",
      end: "2021",
      description:
        "Conclusão do curso Ctrl-Play+Young com enfâse em programação e desenvolvimento web.",
    },
    {
      company: "Python 3 COMPLETO.",
      link: "https://www.udemy.com/certificate/UC-21V2Q9RM/",
      badges: ["Udemy"],
      title: "",
      logo: "",
      start: "2018",
      end: "",
      description:
        "Certificado de conclusão do curso de Python 3 COMPLETO.",
    },
    {
      company: "Desenvolvimento web com Django, React e deploy AWS e Linux",
      link: "https://www.udemy.com/certificate/UC-2dcdc62c-fde4-48fa-99e3-9bd8eeb77a49/",
      badges: ["Udemy"],
      title: "",
      logo: "",
      start: "2024",
      end: "",
      description:
        "Certificado de conclusão do curso da Udemy de Desenvolvimento web com Django.",
    },
    {
      company: "Olimpíada Internacional Mathématiques sans frontières",
      link: "https://www.matematicasemfronteiras.org/OIMSF_2023_NACIONAL_OURO.pdf",
      badges: ["Nacional", "Ouro"],
      title: "",
      logo: "",
      start: "2023",
      end: "",
      description:
        "Medalhalista de Ouro na OMISF.",
    },
    {
      company: "Olimpíada Brasileira de Astronomia e Astronáutica",
      link: "http://www.oba.org.br/site/",
      badges: ["Nacional", "Prata"],
      title: "",
      logo: "",
      start: "2023",
      end: "",
      description:
        "Medalhalista de Prata na OBA 2023.",
    }
    
  ],
  skills: [
    "Python",
    "C",
    "C++",
    "Django",
    "DjangoRestFramework",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
  ],
  projects: [
    {
      title: "AEDs I",
      techStack: ["C", "C++",],
      description:
        "Materiais e soluções de exercícios da disciplina de Algoritmos e Estruturas de Dados I, Ciência da Computação, PUC-Minas.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/aeds1",
      },
    },
    {
      title: "Testador C/C++",
      techStack: [
        "C++",
        "C",
        "Linux",
        "Python",
      ],
      description:
        "Projeto que fornece um script de automaçaõ para testar códigos em C/C++, verificando se as saídas estão corretas.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/TestadorC",
      },
    },
    {
      title: "Alarme TinkerCad",
      techStack: ["Tinkercad", "Arduino", "C++"],
      description:
        "Projeto de Dispositivo de Alarme com Arduino.",
      logo: "",
      link: {
        label: "github.com",
        href:  "https://github.com/bernardovieirarocha/LIP-FinalProject-ArduinoAlarm",
      },
    },
    {
      title: "Redjango",
      techStack: ["Side Project", "Django", "React", "DjangoRest"],
      description:
        "RedDjango: Integração na prática entre Django and React.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/upwardweb/redjango",
      },
    },
    {
      title: "Genius TinkerCad",
      techStack: ["Arduino", "C++", "Tinkercad"],
      description:
        "Implementação funcional do popular jogo de memória 'Genius' usando Tinkercad Circuits para a disciplina de LIP ",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/GeniusTinkerCadLIP",
      },
    },
    {
      title: "UniCaronas",
      techStack: [
        "JavaScript",
        "jQuery",
        "HTML5",
        "CSS3",
        "Node.js",
      ],
      description:
        "Projeto de TI-1 para facilitar a combinação de caronas entre estudantes universitários, promovendo um meio de transporte mais organizado, seguro e sustentável.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/UniCaronas",
      },
    },
  ],
} as const;
