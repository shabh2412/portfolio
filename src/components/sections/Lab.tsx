import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import TechTag from "../ui/TechTag";
import { projects } from "../../data/projects";

const Lab = () => {
  return (
    <Section
      id="lab"
      eyebrow="lab"
      title="Open-source experiments."
      description="A handful of small, public things I built while learning patterns or internalising ideas. The enterprise work above is where I spend my weekdays; this is where I spend the curiosity budget."
    >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
        gap={5}
      >
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 6) * 0.04}>
            <Link
              href={p.projectLink}
              isExternal
              _hover={{ textDecoration: "none" }}
              className="rp-card"
              p={0}
              display="block"
              overflow="hidden"
              h="full"
            >
              <Box overflow="hidden" borderBottom="1px solid" borderColor="border">
                <Image
                  src={p.image}
                  alt={`${p.title}. ${p.tagline}`}
                  w="full"
                  h={{ base: "150px", md: "180px" }}
                  objectFit="cover"
                  objectPosition="top"
                  transition="transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
                  _hover={{ transform: "scale(1.04)" }}
                  loading="lazy"
                />
              </Box>
              <Box p={5}>
                <HStack justify="space-between" mb={3}>
                  <Text
                    className="rp-font-mono"
                    fontSize="xs"
                    color="accent"
                    letterSpacing="0.14em"
                  >
                    {p.category.toUpperCase()} · {p.year}
                  </Text>
                  <ExternalLinkIcon color="text.dim" />
                </HStack>
                <Heading as="h4" fontSize="lg" color="text" mb={2} lineHeight="1.25">
                  {p.title}
                </Heading>
                <Text color="text.muted" fontSize="sm" mb={4} noOfLines={2}>
                  {p.tagline}
                </Text>
                <Wrap spacing={2}>
                  {p.techStack.slice(0, 4).map((t) => (
                    <WrapItem key={t}>
                      <TechTag>{t}</TechTag>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            </Link>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
};

export default Lab;
