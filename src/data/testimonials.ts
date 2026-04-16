export type Testimonial = {
  name: string;
  role: string;
  company?: string;
  relation: string;
  quote: string;
  linkedin?: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Pawan Kolhe",
    role: "Senior Frontend Engineer",
    company: "Galileo",
    relation: "Studied together",
    quote:
      "Rishabh is passionate about learning new skills and is not afraid of tackling challenging problems. He is very dedicated and has a lot of potential to grow.",
    linkedin: "https://www.linkedin.com/in/kolhepawan/",
  },
  {
    name: "Sagarika Sahoo",
    role: "Frontend Engineer · SDE",
    company: "IIT Bombay",
    relation: "Studied together",
    quote:
      "Rishabh is one of those rare people that you might be fortunate to meet along the way. He is very diligent and passionate about his work. His knowledge about the programming languages is invaluable.",
    linkedin: "https://www.linkedin.com/in/sagarika2412/",
  },
  {
    name: "Shashwat Tripathi",
    role: "Frontend Developer",
    company: "Crafting scalable, user-centric digital solutions",
    relation: "Studied together",
    quote:
      "Rishabh is a programming enthusiast and he is very fond of learning new technologies. He's a quick learner and really good at implementing thoughts into something tangible and productive.",
    linkedin: "https://www.linkedin.com/in/shashwa7/",
  },
  {
    name: "Shubham Rajpurohit",
    role: "Full-Stack × React Native · Freelancer",
    company: "AI & LLM Experiments",
    relation: "Studied together",
    quote:
      "Rishabh is a very hardworking guy. Desperate of learning new technologies. He loves to be updated with modern technologies. I have also seen him working across different domains — strong in cooperation and leadership.",
    linkedin: "https://www.linkedin.com/in/shubhamrajpurohit/",
  },
  {
    name: "Nitish Devadiga",
    role: "Software Engineer",
    company: "Betterworks",
    relation: "Studied together",
    quote:
      "Rishabh is a bright person, very intrigued to learn new technology. He is really good in Java and web development.",
    linkedin: "https://www.linkedin.com/in/nitish-devadiga/",
  },
  {
    name: "Rashmi Maurya",
    role: "Research Scientist",
    company: "Machine Learning & Statistical Genomics",
    relation: "Studied together",
    quote:
      "A very hardworking person — gives his 100% effort in whatever he takes up. Always ready to learn something new and take up new challenges.",
    linkedin: "https://www.linkedin.com/in/rashmi-maurya/",
  },
];
