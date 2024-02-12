import { GitHubIcon, LinkedInIcon } from "@/components/icons";
// import {
//   Logo
// } from "@/images/logos";

export const RESUME_DATA = {
  name: "Bernardo Rocha",
  initials: "BVR",
  location: "Belo Horizonte, Brazil, MG",
  locationLink: "https://www.google.com/maps/place/BeloHorizonte",
  about:
    "Passionate Computer Science Graduate | Full-Stack Developer | Lifelong Learner ",
  summary:
    "Passionate CS graduate, started coding at 13. Proficient in Python, JavaScript, with a focus on Django, React. Complemented studies at Pontifical Catholic University with Udemy courses in full-stack dev, incl. PostgreSQL, DjangoRestFramework, Next.js. Eager to innovate!",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/64905090?s=400&u=38aeca0edb2c6c8ccd97e96726c6ab622026c39f&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "b.vieira.rocha@gmail.com",
    tel: "",
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
      degree: "Bachelor's Degree in Computer Science",
      start: "2023",
      end: "2028",
    },
  ],
  // work: [
  //   {
  //     company: "",
  //     link: "",
  //     badges: [],
  //     title: "",
  //     logo: "",
  //     start: "",
  //     end: "",
  //     description:
  //       "",
  //   },
  // ],
  skills: [
    "JavaScript",
    "Python",
    "React/Next.js",
    "Node.js",
    "Django",
    "DjangoRestFramework",
    "Flutter/Dart",
  ],
  projects: [
    {
      title: "Datetimewidget",
      techStack: ["Side Project", "Python", "CSS", "Django", "Javascript"],
      description:
        "Enhanced Django Date & Time dropdown widget, simplifying form integration",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/upwardweb/datetimewidget",
      },
    },
    {
      title: "Schoolsys",
      techStack: [
        "Django",
        "DjangoRest",
        "PostgreSQL",
        "Javascript",
        "icalendar",
      ],
      description:
        " A responsive platform aiding students in organizing study routines effectively.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/upwardweb/schoolsys",
      },
    },
    {
      title: "Respect Above Violence",
      techStack: ["Side Project", "Node.js", "Express", "EJS"],
      description:
        "NGO School Project: Combatting cyberbullying with educational resources, including animation video and fake history documentation.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/upwardweb/respectaboveviolence",
      },
    },
    {
      title: "Redjango",
      techStack: ["Side Project", "Django", "React", "DjangoRest"],
      description:
        "RedDjango: Practical integration of Django and React based on Udemy course.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/upwardweb/redjango",
      },
    },
    {
      title: "Sorteio de Clientes Feira",
      techStack: ["Side Project", "Django", "Google Charts", "CRUD"],
      description:
        "Sorteio de Clientes Feira: Projeto para sorteio de prêmios personalizado em eventos, com CRUD e dashboard.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/upwardweb/sorteioclientesfeira",
      },
    },
    {
      title: "Password Manager",
      techStack: [
        "Side Project",
        "HandleBars",
        "NeDB",
        "Express.js",
        "Sqlite3",
      ],
      description:
        "Educational project exploring cryptography and database management.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/upwardweb/password_manager",
      },
    },
  ],
} as const;
