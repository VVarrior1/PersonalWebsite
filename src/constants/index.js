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
  grad,
  ucal,
  skycafe,
  shirt,
  spotifyTop100,
  billAuto,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },

  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
  },
  {
    id: "github",
    title: "GitHub",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Data Scientist",
    icon: backend,
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
    title: "Highschool Student",
    company_name: "Nelson Mandela",
    icon: grad,
    iconBg: "#383E56",
    date: "Sept 2018 - June 2021",
    points: [
      "Creating basic projects using introductory programming languages.",
      "Working in teams to complete academic challenges.",
      "Applying fundamental design principles in school assignments.",
      "Participating in peer reviews to learn and improve coding skills.",
      "Participating in Sports to maintain a good level of physical fitness",
    ],
  },
  {
    title: "Data Entry Automation",
    company_name: "Skycafe",
    icon: skycafe,
    iconBg: "#FFFFFF",
    date: "April 2021 - Sept 2022",
    points: [
      "Developing a Python automation tool leveraging Pandas for data processing and Selenium for web data entry, reducing manual input from Excel to a website.",
      "Saving hundreds of hours and thousands of dollars by automating repetitive data entry tasks, enhancing both efficiency and data accuracy.",
      "Collaborating with data management teams to refine the tool, ensuring it meets evolving data entry requirements and optimizing performance.",
      "Implementing data security and compliance measures, ensuring the secure and responsible handling of sensitive information during automation.",
    ],
  },
  {
    title: "Bachelors of Computer Science ",
    company_name: "Ucalgary",
    icon: ucal,
    iconBg: "#FFFFFF",
    date: "Sept 2022 - June 2026",
    points: [
      "Developing and maintaining simple applications using basic programming languages and frameworks.",
      "Collaborating with cross-functional teams on academic projects.",
      "Implementing responsive design principles in class assignments.",
      "Engaging in peer code reviews for continuous learning and improvement.",
    ],
  },

  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial: "Abdelrahman IS DADDY",
    name: "Hassan Baig",
    designation: "Student",
    company: "Software Engineer",
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
    name: "3D Shirt Visualizer",
    description:
      "A 3D Shirt visualizer that allows for unlimited customizability",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shirt,
    source_code_link: "https://github.com/VVarrior1/3dShirt",
  },
  {
    name: "SpotifyAPIPlaylistMaker",
    description:
      "Python script that connects to spotify api, and scrapes a website for discovering music, billboard or shahzam (option given), and automatically generates spotify playlists",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "APIS",
        color: "green-text-gradient",
      },
      {
        name: "Webscraping",
        color: "pink-text-gradient",
      },
    ],
    image: spotifyTop100, //bookmark
    source_code_link: "https://github.com/VVarrior1/SpotifyAPIPlaylistMaker",
  },
  {
    name: "Automatic Data entry showcase", //bookmark
    description:
      "A software that takes in excel data and transfers the data automatically to any desired location (google forms or some other website)",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: billAuto,
    source_code_link: "https://github.com/VVarrior1/AutomatingBilling",
  },
];

export { services, technologies, experiences, testimonials, projects };
