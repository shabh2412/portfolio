import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import TechTag from "../ui/TechTag";
import { projects } from "../../data/projects";

const MotionBox = motion(Box);

const Work = () => {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <Section
      id="work"
      eyebrow="selected work"
      title="Products, clones, and case studies I'm proud to show."
      description="A sample of what I've shipped — enterprise surfaces, production clones of live products, and small tools that happened to stick."
    >
      <VStack spacing={{ base: 10, md: 16 }} align="stretch">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <Grid
              templateColumns={{ base: "1fr", lg: i % 2 === 0 ? "1.1fr 1fr" : "1fr 1.1fr" }}
              gap={{ base: 6, md: 10 }}
              className="rp-card"
              p={{ base: 5, md: 10 }}
              alignItems="center"
            >
              <Box
                order={{ base: 1, lg: i % 2 === 0 ? 1 : 2 }}
                position="relative"
                overflow="hidden"
                rounded="xl"
                border="1px solid"
                borderColor="border"
              >
                <Link href={p.projectLink} isExternal display="block">
                  <MotionBox
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={p.image}
                      alt={`${p.title} — ${p.tagline}`}
                      w="full"
                      h={{ base: "220px", md: "360px" }}
                      objectFit="cover"
                      objectPosition="top"
                    />
                  </MotionBox>
                </Link>
                <Box
                  position="absolute"
                  inset={0}
                  pointerEvents="none"
                  bgGradient="linear(to-t, rgba(10,11,18,0.4), transparent 50%)"
                />
              </Box>

              <Box order={{ base: 2, lg: i % 2 === 0 ? 2 : 1 }}>
                <HStack spacing={3} mb={3}>
                  <Text className="rp-font-mono" fontSize="xs" color="accent" letterSpacing="0.14em">
                    {p.category.toUpperCase()}
                  </Text>
                  <Box w={1} h={1} rounded="full" bg="text.dim" />
                  <Text className="rp-font-mono" fontSize="xs" color="text.dim">
                    {p.year}
                  </Text>
                </HStack>

                <Heading as="h3" fontSize={{ base: "2xl", md: "3xl" }} color="text" mb={2}>
                  {p.title}
                </Heading>
                <Text color="text" opacity={0.9} fontSize="lg" mb={4}>
                  {p.tagline}
                </Text>
                <Text color="text.muted" mb={5}>
                  {p.description}
                </Text>

                {p.impact && p.impact.length > 0 && (
                  <VStack align="stretch" spacing={2} mb={5}>
                    {p.impact.map((i2) => (
                      <Flex key={i2} align="start" gap={3}>
                        <Box w={1.5} h={1.5} rounded="full" bg="accent" mt={2} flexShrink={0} />
                        <Text color="text" fontSize="sm">
                          {i2}
                        </Text>
                      </Flex>
                    ))}
                  </VStack>
                )}

                <Wrap spacing={2} mb={6}>
                  {p.techStack.map((t) => (
                    <WrapItem key={t}>
                      <TechTag>{t}</TechTag>
                    </WrapItem>
                  ))}
                </Wrap>

                <HStack spacing={4}>
                  <Link
                    href={p.projectLink}
                    isExternal
                    color="text"
                    fontWeight={600}
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    _hover={{ color: "accent", textDecoration: "none" }}
                  >
                    Live demo <ExternalLinkIcon />
                  </Link>
                  {p.githubLink && (
                    <Link
                      href={p.githubLink}
                      isExternal
                      color="text.muted"
                      display="inline-flex"
                      alignItems="center"
                      gap={2}
                      _hover={{ color: "accent", textDecoration: "none" }}
                    >
                      Source <ArrowForwardIcon />
                    </Link>
                  )}
                </HStack>
              </Box>
            </Grid>
          </Reveal>
        ))}

        <Reveal>
          <Box pt={4}>
            <Heading as="h3" fontSize="xl" color="text.muted" mb={6} className="rp-font-display">
              More experiments
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap={5}>
              {more.map((p) => (
                <Link
                  key={p.title}
                  href={p.projectLink}
                  isExternal
                  _hover={{ textDecoration: "none" }}
                  className="rp-card"
                  p={5}
                  display="block"
                >
                  <HStack justify="space-between" mb={3}>
                    <Text className="rp-font-mono" fontSize="xs" color="accent" letterSpacing="0.14em">
                      {p.category.toUpperCase()}
                    </Text>
                    <ExternalLinkIcon color="text.dim" />
                  </HStack>
                  <Heading as="h4" fontSize="lg" color="text" mb={2}>
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
                </Link>
              ))}
            </Grid>
          </Box>
        </Reveal>
      </VStack>
    </Section>
  );
};

export default Work;
