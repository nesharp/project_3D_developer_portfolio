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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  arixess,
  realtrade,
  nextjs,
  discodo,
  riamoderate,
  sharpblog,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Javascript developer",
    company_name: "RealTRADE",
    icon: realtrade,
    iconBg: "#383E56",
    date: "Jun 2020 - Present",
    points: [
      "Developed and maintained web applications using React.js and other frontend technologies.",
      "Collaborated with cross-functional teams (designers, product managers, developers) to create high-quality user experiences.",
      "Implemented responsive design principles for optimal cross-browser compatibility.",
      "Contributed to code reviews and provided constructive feedback to teammates.",
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
    name: "Discodo",
    description:
      "A designer copy of Discord, but written using technologies that allow you to create a web application using template design methods",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "shadsn/ui",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "yellow-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: discodo,
    source_code_link: "https://github.com/nesharp/discord-clone",
    project_link: "https://discodo.vercel.app/",
  },
  {
    name: "RiaModerate",
    description:
      "A software product that allows you to validate the entered data about the car that is being sold with the help of artificial intelligence by comparing the entered data with the description.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "chatgpt-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: riamoderate,
    source_code_link: "https://github.com/nesharp/ria-moderate",
    project_link: "https://ria-moderate.vercel.app/",
  },
  {
    name: "SharpBlog",
    description:
      "Own blog, which aims to teach how to develop web applications on one of the most popular MERN stacks. This project is made for educational purposes and is closed to new users.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: sharpblog,
    source_code_link: "https://github.com/nesharp/front-end-blog-mern",
    project_link: "https://sharp-blog.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
