import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angular,
  bootstrap,
  chakra,
  ionic,
  git,
  figma,
  blender,
  delphi,
  finance,
  hidr8,
  threejs,
  sna,
  step,
  dbImage,
  nodejs,
  mongodb,
  weatherApp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },

  {
    title: "Backend Development",
    icon: backend,
  },

  {
    title: "Mongo DB",
    icon: creator,
  },

  {
    title: "SQL",
    icon: dbImage,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 5",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "SNA Sistec",
    icon: sna,
    iconBg: "#fff",
    date: "Sept 2023 - Nov 2023",
    points: [
      "Developing and maintaining web applications using Html, css, Bootstrap and Javascript",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to maintain web apps",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Next Step Veterian Pvt Ltd",
    icon: step,
    iconBg: "#fff",
    date: "July 2023 - Aug 2023",
    points: [
      "Creating and optimizing web applications using HTML, CSS, Bootstrap, and JavaScript.",
      "Working closely with designers, product managers, and development teams to enhance and support web applications.",
      "Ensuring mobile-friendly and responsive designs, while maintaining cross-browser compatibility.",
      "Engaging in peer code reviews and offering valuable feedback for continuous improvement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Delphi Hotel",
    description:
      "A premium hotel offering exceptional stays and world-class services for a luxurious experience.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: delphi,
    source_code_link:
      "https://github.com/pragatisharma21/delphi-hotel-frontend",
  },
  {
    name: "Finance App",
    description:
      "An intuitive app designed to streamline personal finance management with ease and efficiency.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: finance,
    source_code_link: "https://github.com/pragatisharma21/finance-app",
  },
  {
    name: "Weather Mate",
    description:
      "A modern weather app delivering real-time forecasts, including temperature, wind, and humidity.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: weatherApp,
    source_code_link: "https://github.com/pragatisharma21/Weather-App",
  },
];


export { services, technologies, experiences, testimonials, projects };
