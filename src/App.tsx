import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/sections/Marquee";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Work from "./components/sections/Work";
import Skills from "./components/sections/Skills";
import Principles from "./components/sections/Principles";
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
        <Work />
        <Experience />
        <Skills />
        <Principles />
        <GitHubActivity />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
