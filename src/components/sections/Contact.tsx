import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Icon } from "../ui/Icon";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { profile } from "../../data/profile";

const channels = [
  { icon: FaEnvelope, label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { icon: FaLinkedinIn, label: "LinkedIn", href: profile.socials.linkedin, value: "rishabh-panesar" },
  { icon: FaGithub, label: "GitHub", href: profile.socials.github, value: "@shabh2412" },
  { icon: FaWhatsapp, label: "WhatsApp", href: profile.socials.whatsapp, value: profile.phone },
  { icon: FaTwitter, label: "Twitter", href: profile.socials.twitter, value: "@PanesarRishabh" },
  { icon: FaInstagram, label: "Instagram", href: profile.socials.instagram, value: "@rishabhpanesar" },
];

const Contact = () => {
  return (
    <Section id="contact" eyebrow="contact">
      <Box
        className="rp-card"
        p={{ base: 8, md: 14 }}
        position="relative"
        overflow="hidden"
        sx={{
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "-40%",
            background:
              "radial-gradient(40% 50% at 20% 20%, rgba(94, 234, 212, 0.25), transparent 70%), radial-gradient(40% 40% at 80% 10%, rgba(139, 92, 246, 0.3), transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          },
        }}
      >
        <Box position="relative">
          <Grid templateColumns={{ base: "1fr", lg: "1.2fr 1fr" }} gap={{ base: 10, lg: 16 }}>
            <Reveal>
              <VStack align="start" spacing={5}>
                <Text
                  className="rp-font-mono"
                  fontSize="sm"
                  color="accent"
                  textTransform="uppercase"
                  letterSpacing="0.18em"
                >
                  Say hi
                </Text>
                <Heading
                  as="h2"
                  fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                  lineHeight="1.05"
                  color="text"
                >
                  Working on something{" "}
                  <Box as="span" className="rp-gradient-text">
                    interesting
                  </Box>
                  ?
                </Heading>
                <Text color="text.muted" fontSize={{ base: "md", md: "lg" }} maxW="xl">
                  If you're building something interesting, I'd love to hear about it. Say hi.
                </Text>

                <HStack spacing={3} pt={2} flexWrap="wrap">
                  <Button
                    as="a"
                    href={`mailto:${profile.email}`}
                    size="lg"
                    color="#0a0b12"
                    background="var(--gradient)"
                    _hover={{ transform: "translateY(-2px)", opacity: 0.95 }}
                    fontWeight={700}
                  >
                    Email me →
                  </Button>
                  <Button
                    as="a"
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    size="lg"
                    variant="outline"
                    borderColor="border.strong"
                    color="text"
                    _hover={{ borderColor: "accent", color: "accent", bg: "transparent" }}
                  >
                    Message on LinkedIn
                  </Button>
                </HStack>
              </VStack>
            </Reveal>

            <Reveal delay={0.1}>
              <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }} gap={3}>
                {channels.map((c) => (
                  <Link
                    key={c.label}
                    href={c.href}
                    isExternal={c.href.startsWith("http")}
                    _hover={{ textDecoration: "none" }}
                  >
                    <HStack
                      className="rp-card"
                      p={4}
                      spacing={4}
                      _hover={{ borderColor: "accent" }}
                    >
                      <Box
                        w={10}
                        h={10}
                        rounded="lg"
                        bg="whiteAlpha.100"
                        color="accent"
                        display="grid"
                        placeItems="center"
                      >
                        <Icon icon={c.icon} />
                      </Box>
                      <Box flex={1} minW={0}>
                        <Text fontSize="xs" color="text.dim" className="rp-font-mono">
                          {c.label}
                        </Text>
                        <Text fontSize="sm" color="text" noOfLines={1}>
                          {c.value}
                        </Text>
                      </Box>
                    </HStack>
                  </Link>
                ))}
              </Grid>
            </Reveal>
          </Grid>
        </Box>
      </Box>
    </Section>
  );
};

export default Contact;
