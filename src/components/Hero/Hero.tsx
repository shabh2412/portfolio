import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import Pill from "../ui/Pill";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const command = `$ hire --role "Senior Frontend Engineer" --name "Rishabh Panesar"`;

const Hero = () => {
  return (
    <Box as="section" id="top" position="relative" overflow="hidden">
      <Box className="rp-aurora" />
      <Box className="rp-grid" />

      <Container
        maxW="7xl"
        px={{ base: 5, md: 8 }}
        pt={{ base: 32, md: 44 }}
        pb={{ base: 20, md: 32 }}
        position="relative"
        zIndex={1}
      >
        <VStack
          align={{ base: "center", md: "flex-start" }}
          spacing={8}
          textAlign={{ base: "center", md: "left" }}
        >
          <MotionBox {...fadeUp(0)}>
            <Pill label="Available for senior frontend roles" pulse dotColor="#34d399" />
          </MotionBox>

          <MotionHeading
            as="h1"
            fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
            lineHeight="0.95"
            letterSpacing="-0.035em"
            {...fadeUp(0.08)}
          >
            <Box as="span" color="text">
              I build the web
            </Box>
            <br />
            <Box as="span" className="rp-gradient-text">
              people actually enjoy.
            </Box>
          </MotionHeading>

          <MotionBox {...fadeUp(0.16)} maxW="2xl">
            <Text fontSize={{ base: "lg", md: "xl" }} color="text.muted">
              I'm{" "}
              <Box as="span" color="text" fontWeight={600}>
                Rishabh
              </Box>{" "}
              — a senior frontend engineer who turns ambiguous product ideas into polished,
              performant, accessible React and TypeScript apps. Currently helping{" "}
              <Link href="https://ripik.ai" isExternal color="accent">
                Ripik.AI
              </Link>{" "}
              ship enterprise AI for heavy industry.
            </Text>
          </MotionBox>

          <MotionBox {...fadeUp(0.24)} w="full" maxW="3xl">
            <Box
              className="rp-card rp-font-mono"
              px={5}
              py={4}
              fontSize={{ base: "xs", md: "sm" }}
              textAlign="left"
            >
              <HStack spacing={2} mb={3} opacity={0.6}>
                <Box w={3} h={3} rounded="full" bg="#ff5f57" />
                <Box w={3} h={3} rounded="full" bg="#febc2e" />
                <Box w={3} h={3} rounded="full" bg="#28c840" />
                <Text ml={2} color="text.muted">
                  rishabh@portfolio ~
                </Text>
              </HStack>
              <Text color="text.muted" overflow="auto" whiteSpace="nowrap">
                <Box as="span" color="accent">
                  →
                </Box>{" "}
                {command}
                <Box as="span" className="rp-blink" ml={1}>
                  ▌
                </Box>
              </Text>
            </Box>
          </MotionBox>

          <MotionBox {...fadeUp(0.32)}>
            <Wrap spacing={3} justify={{ base: "center", md: "flex-start" }}>
              <WrapItem>
                <Button
                  as="a"
                  href="#work"
                  size="lg"
                  color="#0a0b12"
                  background="var(--gradient)"
                  _hover={{ transform: "translateY(-2px)", opacity: 0.95 }}
                  transition="all 0.25s"
                  fontWeight={700}
                >
                  See my work →
                </Button>
              </WrapItem>
              <WrapItem>
                <Button
                  as="a"
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  size="lg"
                  variant="outline"
                  borderColor="border.strong"
                  color="text"
                  _hover={{ borderColor: "accent", color: "accent", bg: "transparent" }}
                >
                  View résumé
                </Button>
              </WrapItem>
              <WrapItem>
                <Button
                  as="a"
                  href="#contact"
                  size="lg"
                  variant="ghost"
                  color="text.muted"
                  _hover={{ color: "text", bg: "whiteAlpha.50" }}
                >
                  Get in touch ↗
                </Button>
              </WrapItem>
            </Wrap>
          </MotionBox>

          <MotionBox {...fadeUp(0.4)} pt={6}>
            <HStack spacing={6} color="text.dim" fontSize="sm" flexWrap="wrap">
              <Text className="rp-font-mono">{profile.location}</Text>
              <Box w={1} h={1} rounded="full" bg="text.dim" />
              <Link href={profile.socials.linkedin} isExternal _hover={{ color: "accent" }}>
                LinkedIn
              </Link>
              <Link href={profile.socials.github} isExternal _hover={{ color: "accent" }}>
                GitHub
              </Link>
              <Link href={profile.socials.twitter} isExternal _hover={{ color: "accent" }}>
                Twitter
              </Link>
              <Link href={`mailto:${profile.email}`} _hover={{ color: "accent" }}>
                {profile.email}
              </Link>
            </HStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
