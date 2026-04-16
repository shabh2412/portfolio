import { lazy, Suspense } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/sections/Marquee";
import "./App.css";

const About = lazy(() => import("./components/sections/About"));
const CaseStudies = lazy(() => import("./components/sections/CaseStudies"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Testimonials = lazy(() => import("./components/sections/Testimonials"));
const Lab = lazy(() => import("./components/sections/Lab"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/sections/Footer"));

const App = () => {
  return (
    <Box className="rp-app">
      <Box className="rp-noise" aria-hidden />
      <Navbar />
      <Box as="main" position="relative" zIndex={1}>
        <Hero />
        <Marquee />
        <Suspense fallback={null}>
          <About />
          <CaseStudies />
          <Experience />
          <Skills />
          <Testimonials />
          <Lab />
          <Contact />
        </Suspense>
      </Box>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </Box>
  );
};

export default App;
