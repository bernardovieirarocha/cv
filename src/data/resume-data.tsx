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
      nameCertification: "Algorithms and Oriented Object Programming with Swift",
      link: "https://lms.hackatruck.com.br/mod/simplecertificate/verify.php",
      badges: [],
      logo: "",
      start: "2024",
      end: "2025",
      description:
        "Completion of the Algorithms and Oriented Object Programming with Swift course.",
    },
    {
      nameCertification: "Red Hat System Administration I (RH124)",
      link: "https://www.linkedin.com/in/bernardovrocha/details/certifications/1723726445548/single-media-viewer?type=DOCUMENT&profileId=ACoAAEtsdd4Bid3JT3WnHLrstc7yY9ct1Ij0dXY&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2POQ8szuTNOaUdQuXm%2B%2ByA%3D%3D",
      badges: [],
      logo: "",
      start: "2024",
      end: "2025",
      description:
        "Completion of the Red Hat System Administration I (RH124) course.",
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
      company: "Fórmula CEFAST",
      link: "",
      badges: ["On-site"],
      title: "Electronic Designer",
      logo: "",
      start: "2024",
      end: "present",
      description:
        "Designing electronic circuits and PCBs using Altium Designer, assisting the team in the development of our car project.",
    },
    {
      company: "PUC MINAS",
      link: "",
      badges: ["On-site"],
      title: "Computer Science Tutor (AEDs I)",
      logo: "",
      start: "2024",
      end: "2025",
      description:
        "Tutor of Algorithms and Data Structures I at PUC Minas, assisting students in understanding concepts and solving exercises, developing skills in communication and leadership.",
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
        "FlixMate: A movie streaming platform with user authentication, movie search, and movie details.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/rubensbkl/Flixmate",
      },
      image: "",
    },

    {
      title: "Class2Cal",
      techStack: ["Side Project", "Python", "Data Science", "Interface Gráfica"],
      description:
        "Class2Cal: A tool to convert class schedules from CSV and JSON to iCal format.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/Class2Cal",
      },
      image: "",
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
      image: "",
    },
  ],
} as const;
