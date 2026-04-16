import { Box, Grid, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { stats } from "../../data/profile";

const About = () => {
  return (
    <Section
      id="about"
      eyebrow="about"
      title="Full-stack engineer. Frontend-heavy. Founder-friendly."
      description="Four years in, across AI, industrial, and enterprise domains — with a bias toward clean architecture, shipping fast, and keeping the product honest."
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "1.2fr 1fr" }}
        gap={{ base: 10, lg: 16 }}
        alignItems="start"
      >
        <Reveal>
          <VStack
            spacing={5}
            align="stretch"
            color="text.muted"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.8"
          >
            <Text>
              I'm a full-stack engineer with 4+ years shipping scalable, high-performance web apps
              across AI, industrial, and enterprise domains. I focus on clean architecture,
              performance-driven engineering, and shipping reliable products that solve real
              problems.
            </Text>
            <Text>
              Currently I'm a{" "}
              <Box as="span" color="text" fontWeight={600}>
                Frontend Engineer at{" "}
                <Link href="https://www.linkedin.com/company/miraei-ai/" isExternal color="accent">
                  Miraei AI
                </Link>
              </Box>
              , leading the end-to-end frontend for our product. My work spans frontend, backend,
              infra, CI/CD, and architectural decision-making — I collaborate directly with founders
              to turn requirements into logic, architect systems, execute rapid MVPs, and build
              scalable foundations.
            </Text>
            <Text>
              Before this I was Founding Engineer at{" "}
              <Box as="span" color="text" fontWeight={600}>
                Faradworks
              </Box>{" "}
              building PinScope.AI, an SDE at{" "}
              <Box as="span" color="text" fontWeight={600}>
                SYMX.AI
              </Box>
              , and led major frontend initiatives at{" "}
              <Box as="span" color="text" fontWeight={600}>
                Ripik.AI
              </Box>{" "}
              — including the in-house component library and the frontend for Ripik Optimus, one of
              the company's flagship products.
            </Text>
            <Text>
              My strengths: designing scalable, config-driven systems · performance optimisation
              across frontend and backend · building intuitive UI frameworks and reusable
              abstractions · strong AI-augmented development workflows. I use{" "}
              <Box as="span" color="text" fontWeight={600}>
                Windsurf, Claude, Gemini, and Vercel AI SDK
              </Box>{" "}
              to accelerate shipping, and I've built production-grade agent experiences on Vertex
              AI, LangChain, and pgvector-backed PostgreSQL.
            </Text>
            <Text>
              If you're building something exciting in AI, developer tooling, or web platforms —
              I'd love to connect.
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
