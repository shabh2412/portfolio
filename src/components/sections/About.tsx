import { Box, Grid, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { stats } from "../../data/profile";

const opinions = [
  {
    title: "Config-driven UI beats one-off branches.",
    body: "If every new customer costs you an engineer, the architecture is wrong. I spent two years at Ripik making the opposite true.",
    from: "#5eead4",
    to: "#8b5cf6",
  },
  {
    title: "Performance is a product feature.",
    body: "Core Web Vitals as acceptance criteria. Measured, not felt.",
    from: "#8b5cf6",
    to: "#f472b6",
  },
  {
    title: "AI-native is not a shortcut to being lazy.",
    body: "I use Windsurf, Claude, Gemini, and Vercel AI SDK every day because they give me more decisions to make, not fewer.",
    from: "#f472b6",
    to: "#5eead4",
  },
];

const Strong = ({ children }: { children: React.ReactNode }) => (
  <Box as="span" color="text" fontWeight={600}>
    {children}
  </Box>
);

const About = () => {
  return (
    <Section
      id="about"
      eyebrow="about"
      title="Frontend engineer with a product brain and a designer's eye."
      description="Four years in, I care about the tiny details that add up to a product that feels fast, trustworthy, and obvious to use."
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
            lineHeight="1.75"
          >
            <Text>
              I think{" "}
              <Box as="span" color="text" fontWeight={600}>
                the best frontends are the ones you don't notice.
              </Box>{" "}
              Fast when they need to be, predictable when they shouldn't surprise you, out of the
              way when the real work is happening.
            </Text>

            <Text>
              I came to this belief the long way around. My first programming job was teaching
              eight-year-olds on Scratch and Code.org at <Strong>BrightChamps</Strong>, which
              taught me more about what "clear" means than any blog post.
            </Text>

            <Text>
              Before that: <Strong>ML intern</Strong> building toxicity-predictor models for
              chemical compounds. The web clicked for me at <Strong>Masai School</Strong> in 2022,
              and I haven't looked at anything else since.
            </Text>

            <Text>
              Four years later, I'm at{" "}
              <Link
                href="https://www.linkedin.com/company/miraei-ai/"
                isExternal
                color="accent"
                fontWeight={600}
              >
                Miraei AI
              </Link>
              , where "frontend engineer" is a polite way of saying I also write the backend, ship
              the infra, and rig the CI.
            </Text>

            <Text>
              Before this: seven months as founding engineer at <Strong>Faradworks</Strong> (NYC,
              remote), and two years at <Strong>Ripik.AI</Strong> building the frontend for an
              industrial AI platform that plant operators have to trust on a shop floor.
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

      <Reveal delay={0.15}>
        <Box mt={{ base: 14, md: 20 }}>
          <Text
            className="rp-font-mono"
            fontSize="xs"
            color="text.dim"
            textTransform="uppercase"
            letterSpacing="0.18em"
            mb={5}
          >
            Three things I hold opinions about
          </Text>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={5}>
            {opinions.map((o) => (
              <Box
                key={o.title}
                className="rp-card"
                p={{ base: 5, md: 7 }}
                position="relative"
                overflow="hidden"
                sx={{
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "3px",
                    background: `linear-gradient(180deg, ${o.from}, ${o.to})`,
                  },
                }}
              >
                <Box
                  w={2.5}
                  h={2.5}
                  rounded="full"
                  mb={4}
                  background={`linear-gradient(135deg, ${o.from}, ${o.to})`}
                />
                <Heading
                  as="h3"
                  fontSize={{ base: "md", md: "lg" }}
                  color="text"
                  mb={3}
                  lineHeight="1.3"
                >
                  {o.title}
                </Heading>
                <Text color="text.muted" fontSize="sm" lineHeight="1.7">
                  {o.body}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Reveal>

      <Reveal delay={0.2}>
        <Text
          mt={{ base: 10, md: 14 }}
          color="text.muted"
          fontSize={{ base: "md", md: "lg" }}
        >
          Offline: table tennis, football, and the gym.
        </Text>
      </Reveal>
    </Section>
  );
};

export default About;
