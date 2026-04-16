import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/sections/Marquee";
import About from "./components/sections/About";
import CaseStudies from "./components/sections/CaseStudies";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Principles from "./components/sections/Principles";
import Testimonials from "./components/sections/Testimonials";
import Lab from "./components/sections/Lab";
import GitHubActivity from "./components/sections/GitHubActivity";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import "./App.css";

const App = () => {
  return (
    <Box className="rp-app">
      <Box className="rp-noise" aria-hidden />
      <Navbar />
      <Box as="main" position="relative" zIndex={1}>
        <Hero />
        <Marquee />
        <About />
        <CaseStudies />
        <Experience />
        <Skills />
        <Principles />
        <Testimonials />
        <Lab />
        <GitHubActivity />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
