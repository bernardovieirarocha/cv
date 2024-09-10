import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { PucMinas } from "@/images/logos";

// This is the data for the resume in English

export const RESUME_DATA = {
  name: "Bernardo Vieira Rocha",
  initials: "BVR",
  location: "Belo Horizonte, Brazil, MG",
  locationLink: "https://www.google.com/maps/place/BeloHorizonte",
  about:
    "Undergraduate in Computer Science and Computer Engineering.",
  summary:
  "I am an Undergraduate Student 🎓 pursuing degrees in Computer Science at the Pontifical Catholic University of Minas Gerais and in Computer Engineering at the Federal Center for Technological Education of Minas Gerais. I am a 💻 😃 Tech Enthusiast passionate about learning and utilizing new technologies. I love building interesting projects and products that also serve a purpose.",
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
      school: "Federal Center for Technological Education of Minas Gerais",
      degree: "Bachelor in Computer Engineering",
      start: "2024",
      end: "2029",
    },
    {
      school: "Pontifical Catholic University of Minas Gerais",
      degree: "Bachelor in Computer Science",
      start: "2024",
      end: "2028",
    },
    {
      school: "Magnum Agostiniano Cidade Nova School",
      degree: "High School Diploma",
      start: "2019",
      end: "2023",
    }
  ],
  certification: [
    {
      nameCertification: "Ctrl Play+Young Course",
      link: "https://ctrlplay.com.br/cursos-regulares/ctrl-young/",
      badges: [],
      logo: "",
      start: "2020",
      end: "2021",
      description:
        "Completion of the Ctrl-Play+Young course with a focus on programming and web development.",
    },
    {
      nameCertification: "Complete Python 3",
      link: "https://www.udemy.com/certificate/UC-21V2Q9RM/",
      badges: ["Udemy"],
      logo: PucMinas,
      start: "2018",
      end: "",
      description:
        "Certificate of completion of the Complete Python 3 course.",
    },
    {
      nameCertification: "Web Development with Django and React",
      link: "https://www.udemy.com/certificate/UC-2dcdc62c-fde4-48fa-99e3-9bd8eeb77a49/",
      badges: ["Udemy"],
      logo: "",
      start: "2024",
      end: "",
      description:
        "Certificate of completion of the Udemy course on Web Development with Django.",
    },
    {
      nameCertification: "International Olympiad of Mathématiques sans frontières",
      link: "https://www.matematicasemfronteiras.org/OIMSF_2023_NACIONAL_OURO.pdf",
      badges: [],
      logo: "",
      start: "2023",
      end: "",
      description:
        "Gold Medalist in the International Olympiad of Mathématiques sans frontières.",
    },
    {
      nameCertification: "Brazilian Astronomy and Astronautics Olympiad",
      link: "http://www.oba.org.br/site/",
      badges: [],
      logo: "",
      start: "2023",
      end: "",
      description:
        "Silver Medalist in the 2023 Brazilian Astronomy and Astronautics Olympiad.",
    }
  ],
  work: [
    {
      company: "PUC MINAS",
      link: "",
      badges: ["On-site"],
      title: "Computer Science Tutor (AEDs I)",
      logo: "",
      start: "2024",
      end: "Present",
      description:
        "Tutor of Algorithms and Data Structures I at PUC Minas, assisting students in understanding concepts and solving exercises, developing skills in communication and leadership.",
    },
  ],
  skills: [
    "Python",
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
      title: "AEDs I",
      techStack: ["C", "C++",],
      description:
        "Materials and solutions for exercises in the Algorithms and Data Structures I course, Computer Science, PUC-Minas.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/aeds1",
      },
    },
    {
      title: "C/C++ Tester",
      techStack: [
        "C++",
        "C",
        "Linux",
        "Python",
      ],
      description:
        "Project that provides an automation script to test C/C++ code, checking if the outputs are correct.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/TestadorC",
      },
    },
    {
      title: "TinkerCad Alarm",
      techStack: ["Tinkercad", "Arduino", "C++"],
      description:
        "Alarm Device Project with Arduino.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/LIP-FinalProject-ArduinoAlarm",
      },
    },
    {
      title: "Redjango",
      techStack: ["Side Project", "Django", "React", "DjangoRest"],
      description:
        "RedDjango: Practical integration between Django and React.",
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
        "Functional implementation of the popular memory game 'Genius' using Tinkercad Circuits for the LIP course.",
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
        "Interdisciplinary project to facilitate carpooling among university students, promoting a more organized, safe, and sustainable means of transportation.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/UniCaronas",
      },
    },
  ],
} as const;
