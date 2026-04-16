import indiamart from "../assets/indiamart-landing-page.png";
import fraazoClone from "../assets/fraazoClone.png";
import weatherApp from "../assets/weatherApp.png";
import arrayApp from "../assets/arrayApp.png";
import starwarsApp from "../assets/starwarsApp.png";
import todoTsx from "../assets/todoTsx.png";
import myHours from "../assets/myHoursLandingPage.png";
import chattingApp from "../assets/chattingApp.png";

export type Project = {
  image: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  category: "Product" | "Case Study" | "Tool" | "Learning";
  impact?: string[];
  projectLink: string;
  githubLink?: string;
  techStack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    image: myHours,
    title: "My Hours · Collaborative Time Tracking",
    tagline: "Track teams, clients, projects, and billable hours in one place.",
    description:
      "A production-grade clone of the My Hours time-tracking platform. I owned the frontend architecture (routing, auth, role-based dashboards, and the redux-thunk data layer) and shipped the end-to-end billing and reports flow.",
    role: "Frontend Lead, 5-person team",
    year: "2022",
    category: "Product",
    impact: [
      "Typed state tree with redux-thunk eliminated a full class of race-condition bugs",
      "Shipped all 12 user flows on schedule in a one-week sprint",
      "Reusable dashboard primitives adopted across three internal side-projects",
    ],
    projectLink: "https://my-hourss.netlify.app/",
    githubLink: "https://github.com/shabh2412/myhours-clone",
    techStack: [
      "TypeScript",
      "React",
      "Redux",
      "Redux Thunk",
      "Node.js",
      "Express",
      "MongoDB",
      "Chakra UI",
    ],
    featured: true,
  },
  {
    image: chattingApp,
    title: "Realtime Chat · Socket.io + TypeScript",
    tagline: "Zero-latency group chat with persistent history.",
    description:
      "A broadcast chat built on Socket.io with a typed Node + Express backend. Presence, delivery, and history survive reloads and reconnects. I modeled the event contract as a shared TypeScript package between client and server.",
    role: "Solo engineer",
    year: "2022",
    category: "Tool",
    impact: [
      "Single source of truth for socket events via shared types",
      "Graceful reconnect with state hydration on refresh",
    ],
    projectLink: "https://basic-chatting-app.herokuapp.com/",
    githubLink: "https://github.com/shabh2412/basic-chatting-app",
    techStack: ["Socket.io", "Express", "TypeScript", "HTML", "CSS", "Bootstrap"],
    featured: true,
  },
  {
    image: indiamart,
    title: "IndiaMART · B2B Marketplace Clone",
    tagline: "Search, browse, and request products across thousands of SKUs.",
    description:
      "A functional clone of India's largest B2B marketplace, built in a one-week sprint. I focused on the product discovery experience: faceted search, product detail, and the request-quote flow.",
    role: "Frontend, 4-person team",
    year: "2021",
    category: "Case Study",
    projectLink: "https://indiamart-clone-masai.netlify.app/",
    githubLink: "https://github.com/shabh2412/Indiamart-Clone",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    featured: true,
  },
  {
    image: fraazoClone,
    title: "Fraazo · Hyperlocal Grocery",
    tagline: "End-to-end e-commerce: browse, cart, checkout, payment.",
    description:
      "A fully-functional clone of Fraazo, covering the complete shopping journey. I built the product listing, details, and deal-of-the-day modules, including a randomised-inventory engine.",
    role: "Frontend, team project",
    year: "2021",
    category: "Case Study",
    projectLink: "https://fraazo-clone.netlify.app/",
    githubLink: "https://github.com/shabh2412/Fraazo-Clone",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    image: todoTsx,
    title: "Typed Todos · Redux + TypeScript",
    tagline: "A reference CRUD app with a rigorously typed store.",
    description:
      "A small but careful reference implementation: fully typed actions, selectors, and thunks against a JSON-server backend, with Chakra UI primitives and an accessible keyboard-first UX.",
    role: "Solo",
    year: "2022",
    category: "Tool",
    projectLink: "https://todo-tsx.vercel.app/",
    githubLink: "https://github.com/shabh2412/Todo-app-using-TypeScript",
    techStack: ["React", "TypeScript", "Redux", "Redux Thunk", "JSON Server", "Chakra UI"],
  },
  {
    image: weatherApp,
    title: "Weather · Geolocation + Debounced Search",
    tagline: "Your weather, wherever you are, with 300ms debounced search.",
    description:
      "A small app used to teach debouncing, geolocation, and network-efficient UX. Uses the browser Geolocation API and OpenWeatherMap, with request cancellation on quick typing.",
    role: "Solo",
    year: "2021",
    category: "Learning",
    projectLink: "https://shabh2412.github.io/Weather-APP-JS/",
    githubLink: "https://github.com/shabh2412/Weather-APP-JS",
    techStack: ["JavaScript", "HTML", "CSS", "Bootstrap", "ES6"],
  },
  {
    image: starwarsApp,
    title: "Star Wars Character Search",
    tagline: "Debounced search against the SWAPI, with detail views.",
    description:
      "A simple interface over the SWAPI: typeahead search with debouncing, detail fetch on selection, and a small pedagogical codebase I still point newer devs at.",
    role: "Solo",
    year: "2021",
    category: "Learning",
    projectLink: "https://star-wars-search-characters.netlify.app/",
    githubLink: "https://github.com/shabh2412/star-wars-character-search",
    techStack: ["JavaScript", "HTML", "CSS"],
  },
  {
    image: arrayApp,
    title: "Array / Stack Visualiser",
    tagline: "See the data structure, not just the code.",
    description:
      "A teaching tool I built while internalising JavaScript prototypes and stacks: push, pop, peek, size, reverse, rendered as live visual state.",
    role: "Solo",
    year: "2021",
    category: "Learning",
    projectLink: "https://stack-custom.netlify.app/",
    githubLink: "https://github.com/shabh2412/custom-array-visualizer",
    techStack: ["JavaScript", "HTML", "CSS", "Bootstrap"],
  },
];
