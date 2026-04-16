import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { principles } from "../../data/skills";

const iconSvg: Record<string, JSX.Element> = {
  sparkles: (
    <path d="M12 3l1.8 4.6L18.4 9.4 13.8 11.2 12 15.8 10.2 11.2 5.6 9.4l4.6-1.8zM18 15l1 2.4L21.4 18.4 19 19.4 18 21.8 17 19.4l-2.4-1 2.4-1zM6 16l.8 2.2L9 19l-2.2.8L6 22l-.8-2.2L3 19l2.2-.8z" />
  ),
  zap: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
  braces: (
    <path d="M8 3a4 4 0 0 0-4 4v2a2 2 0 0 1-2 2v2a2 2 0 0 1 2 2v2a4 4 0 0 0 4 4h1v-2H8a2 2 0 0 1-2-2v-2a4 4 0 0 0-1.5-3.1A4 4 0 0 0 6 9V7a2 2 0 0 1 2-2h1V3H8zM16 3a4 4 0 0 1 4 4v2a2 2 0 0 0 2 2v2a2 2 0 0 0-2 2v2a4 4 0 0 1-4 4h-1v-2h1a2 2 0 0 0 2-2v-2a4 4 0 0 1 1.5-3.1A4 4 0 0 1 18 9V7a2 2 0 0 0-2-2h-1V3h1z" />
  ),
  git: <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5L18.5 12 12 18.5 5.5 12 12 5.5z" />,
  access: (
    <path d="M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-7 6.5a.5.5 0 0 1 .6-.5l5.4 1V20a1 1 0 1 0 2 0v-5h2v5a1 1 0 1 0 2 0v-9l5.4-1a.5.5 0 0 1 .1 1l-5.5 1v2h-8v-2l-5.5-1a.5.5 0 0 1-.5-.5z" />
  ),
  target: <path d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />,
};

const Icon = ({ name }: { name: string }) => (
  <Box
    w={12}
    h={12}
    rounded="xl"
    display="grid"
    placeItems="center"
    border="1px solid"
    borderColor="border"
    bg="whiteAlpha.50"
    color="accent"
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      {iconSvg[name] ?? iconSvg.sparkles}
    </svg>
  </Box>
);

const Principles = () => {
  return (
    <Section
      id="principles"
      eyebrow="how i work"
      title="Engineering principles I ship by."
      description="Six things I come back to when I'm designing a component, reviewing a PR, or arguing for how a feature should work."
    >
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={5}>
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.04}>
            <Box className="rp-card" p={{ base: 5, md: 7 }} h="full">
              <Icon name={p.icon} />
              <Heading as="h3" fontSize="lg" color="text" mt={5} mb={2}>
                {p.title}
              </Heading>
              <Text color="text.muted" fontSize="sm" lineHeight="1.7">
                {p.body}
              </Text>
            </Box>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
};

export default Principles;
