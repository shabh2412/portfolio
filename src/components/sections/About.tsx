import { Box, Grid, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { profile, stats } from "../../data/profile";

const About = () => {
  return (
    <Section
      id="about"
      eyebrow="about"
      title="Frontend engineer with a product brain and a designer's eye."
      description="Five years in, I care about the tiny details that add up to a product that feels fast, trustworthy, and obvious to use."
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "1.2fr 1fr" }}
        gap={{ base: 10, lg: 16 }}
        alignItems="start"
      >
        <Reveal>
          <VStack spacing={5} align="stretch" color="text.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
            <Text>
              I started in 2019, fell for the web during a rigorous full-stack bootcamp at Masai
              School, and haven't stopped since. Today I'm at{" "}
              <Box as="span" color="text" fontWeight={600}>
                Ripik.AI
              </Box>{" "}
              — a deep-tech company putting computer vision and process optimisation on the factory
              floor — where I lead the product's frontend architecture and ship the interface that
              operators, plant managers, and data teams rely on every shift.
            </Text>
            <Text>
              My default stack is{" "}
              <Box as="span" color="text" fontWeight={600}>
                React + TypeScript + Next.js
              </Box>
              , but I stay opinionated about fundamentals: clear component contracts, data-loading
              boundaries, motion that respects the user, accessibility by default, and a relentless
              focus on Core Web Vitals.
            </Text>
            <Text>
              Outside of shipping, I mentor newer engineers, write small public repositories for the
              patterns I learn from, and lift things up and put them down. I'm based in{" "}
              <Box as="span" color="text" fontWeight={600}>
                {profile.location}
              </Box>{" "}
              and comfortable working remotely across time zones.
            </Text>
          </VStack>
        </Reveal>

        <Reveal delay={0.1}>
          <SimpleGrid columns={2} gap={4}>
            {stats.map((s) => (
              <Box
                key={s.label}
                className="rp-card"
                p={5}
                minH="128px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Heading
                  as="span"
                  className="rp-font-display"
                  fontSize={{ base: "3xl", md: "4xl" }}
                  color="text"
                  letterSpacing="-0.04em"
                >
                  {s.value}
                </Heading>
                <Text fontSize="sm" color="text.muted" mt={3}>
                  {s.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Reveal>
      </Grid>
    </Section>
  );
};

export default About;
