import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { PucMinas } from "@/images/logos";


// This is the data for the resume in Portuguese

export const RESUME_DATA_PT = {
  name: "Bernardo Vieira Rocha",
  initials: "BVR",
  location: "Belo Horizonte, Brazil, MG",
  locationLink: "https://www.google.com/maps/place/BeloHorizonte",
  about:
    "Graduando em Ciência da Computação e Engenharia de Computação.",
  summary:
    "Eu sou um Estudante de Graduação 🎓 cursando Ciência da Computação na Pontifícia Universidade Católica de Minas Gerais e Engenharia de Computação no Centro Federal de Educação Tecnológica de Minas Gerais. Eu sou um Entusiasta 💻 😃 apaixonado por aprender e utilizar novas tecnologias. Eu adoro construir projetos e produtos interessantes, que também sirvam um propósito.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/64905090?s=400&u=38aeca0edb2c6c8ccd97e96726c6ab622026c39f&v=4",
  personalWebsiteUrl: "https://bernardorocha.com",
  contact: {
    email: "b.vieira.rocha@gmail.com",
    tel: "++55 31 993679089",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/bernardovieirarocha",
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
      school: "Centro Federal de Educação Tecnológica de Minas Gerais",
      degree: "Bacharelado em Engenharia de Computação",
      start: "2024",
      end: "2029",
    },
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
  certification: [
    {
      nameCertification: "Algoritmos e Programação Orientada a Objetos com Swift",
      link: "https://lms.hackatruck.com.br/mod/simplecertificate/verify.php",
      badges: [],
      logo: "",
      start: "2024",
      end: "2025",
      description:
        "Conclusão do curso Algoritmos e Programação Orientada a Objetos com Swift.",
    },
    {
      nameCertification: "Red Hat System Administration I (RH124)",
      link: "https://www.linkedin.com/in/bernardovrocha/details/certifications/1723726445548/single-media-viewer?type=DOCUMENT&profileId=ACoAAEtsdd4Bid3JT3WnHLrstc7yY9ct1Ij0dXY&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2POQ8szuTNOaUdQuXm%2B%2ByA%3D%3D",
      badges: [],
      logo: "",
      start: "2024",
      end: "2025",
      description:
        "Conclusão do curso Red Hat System Administration I (RH124).",
    },
    {
      nameCertification: "Python 3 COMPLETO.",
      link: "https://www.udemy.com/certificate/UC-21V2Q9RM/",
      badges: ["Udemy"],
      logo: PucMinas,
      start: "2018",
      end: "",
      description:
        "Certificado de conclusão do curso de Python 3 COMPLETO.",
    },
    {
      nameCertification: "Desenvolvimento web com Django, React e deploy AWS e Linux",
      link: "https://www.udemy.com/certificate/UC-2dcdc62c-fde4-48fa-99e3-9bd8eeb77a49/",
      badges: ["Udemy"],
      logo: "",
      start: "2024",
      end: "",
      description:
        "Certificado de conclusão do curso da Udemy de Desenvolvimento web com Django.",
    },
    {
      nameCertification: "Olimpíada Internacional Mathématiques sans frontières",
      link: "https://www.matematicasemfronteiras.org/OIMSF_2023_NACIONAL_OURO.pdf",
      badges: [],
      logo: "",
      start: "2023",
      end: "",
      description:
        "Medalhalista de Ouro na OMISF.",
    },
    {
      nameCertification: "Olimpíada Brasileira de Astronomia e Astronáutica",
      link: "http://www.oba.org.br/site/",
      badges: [],
      logo: "",
      start: "2023",
      end: "",
      description:
        "Medalhalista de Prata na OBA 2023.",
    }

  ],
  work: [
    {
      company: "PUC MINAS",
      link: "",
      badges: ["Presencial"],
      title: "Monitor de Computação (AEDs I)",
      logo: "",
      start: "2024",
      end: "2025",
      description:
        "Monitor de Algoritmos e Estrutura de Dados I na PUC Minas, auxilio alunos na compreensão de conceitos e resolução de exercícios, desenvolvendo habilidades em comunicação e liderança.",
    },
    {
      company: "CEFET-MG",
      link: "",
      badges: ["Presencial"],
      title: "Projetista Eletrônico",
      logo: "",
      start: "2024",
      end: "presente",
      description:
        "Projetista de Módulos Eletrônicos usando Altium Designer para a Equipe Fórmula Cefast.",
    },

  ],
  skills: [
    "Python",
    "Altium",
    "C",
    "C++",
    "Java",
    "Linux",
    "Django",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
  ],
  projects: [
    {
      title: "FlixMate",
      techStack: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Figma"],
      description:
        "Uma aplicação web para recomendação e descoberta de filmes.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/rubensbkl/Flixmate",
      },
      image: "",
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
        "Projeto que fornece um script de automação para testar códigos em C/C++, verificando se as saídas estão corretas.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/TestadorC",
      },
    },
    {
      title: "Class2Cal",
      techStack: ["Side Project", "Python", "Data Science", "Interface Gráfica"],
      description: "Class2Cal automatiza a criacao de calendarios acadêmicos integrando CSV e JSON para o formato iCalendar (.ics).",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/Class2Cal",
      },
      image: "",
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
      image: "",
    },
  ],
} as const;
