import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import TechTag from "../ui/TechTag";
import { caseStudies } from "../../data/caseStudies";

const CaseStudies = () => {
  return (
    <Section
      id="work"
      eyebrow="selected work"
      title="Enterprise & AI products I've shipped."
      description="A few surfaces I've owned recently. From Faradworks' founding-team pilots to Ripik's industrial AI platform, to my current work at Miraei AI."
    >
      <VStack spacing={{ base: 8, md: 12 }} align="stretch">
        {caseStudies.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <Grid
              templateColumns={{ base: "1fr", lg: "0.9fr 1.1fr" }}
              gap={{ base: 6, md: 10 }}
              className="rp-card"
              p={{ base: 6, md: 10 }}
              position="relative"
              overflow="hidden"
              sx={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: "-30%",
                  background: `radial-gradient(40% 40% at 15% 15%, ${c.accentFrom}22, transparent 70%), radial-gradient(40% 40% at 85% 85%, ${c.accentTo}22, transparent 70%)`,
                  filter: "blur(40px)",
                  pointerEvents: "none",
                },
              }}
            >
              <Box position="relative">
                <HStack spacing={3} mb={3}>
                  <Text
                    className="rp-font-mono"
                    fontSize="xs"
                    letterSpacing="0.14em"
                    textTransform="uppercase"
                    color="accent"
                  >
                    {c.period}
                  </Text>
                </HStack>
                <Heading as="h3" fontSize={{ base: "2xl", md: "4xl" }} color="text" mb={3} lineHeight="1.05">
                  {c.title}
                </Heading>
                <Text fontSize="sm" color="text.muted" mb={5} className="rp-font-mono">
                  {c.company}
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="text"
                  fontWeight={500}
                  mb={4}
                  bgGradient={`linear(to-r, ${c.accentFrom}, ${c.accentTo})`}
                  bgClip="text"
                >
                  {c.tagline}
                </Text>
                <Text color="text.muted" mb={5} lineHeight="1.75">
                  {c.description}
                </Text>
                {c.link && (
                  <Link
                    href={c.link}
                    isExternal
                    color="text"
                    fontWeight={600}
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    _hover={{ color: "accent", textDecoration: "none" }}
                  >
                    Visit company <ExternalLinkIcon />
                  </Link>
                )}
              </Box>

              <Box position="relative">
                <Text
                  fontSize="xs"
                  className="rp-font-mono"
                  color="text.dim"
                  textTransform="uppercase"
                  letterSpacing="0.14em"
                  mb={4}
                >
                  Impact
                </Text>
                <VStack align="stretch" spacing={3} mb={6}>
                  {c.impact.map((imp) => (
                    <Flex key={imp} align="start" gap={3}>
                      <Box
                        w={2}
                        h={2}
                        rounded="full"
                        mt={2.5}
                        flexShrink={0}
                        background={`linear-gradient(135deg, ${c.accentFrom}, ${c.accentTo})`}
                      />
                      <Text color="text" fontSize={{ base: "sm", md: "md" }}>
                        {imp}
                      </Text>
                    </Flex>
                  ))}
                </VStack>
                <Text
                  fontSize="xs"
                  className="rp-font-mono"
                  color="text.dim"
                  textTransform="uppercase"
                  letterSpacing="0.14em"
                  mb={3}
                >
                  Stack
                </Text>
                <Wrap spacing={2}>
                  {c.tech.map((t) => (
                    <WrapItem key={t}>
                      <TechTag>{t}</TechTag>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            </Grid>
          </Reveal>
        ))}
      </VStack>
    </Section>
  );
};

export default CaseStudies;
