import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { skillGroups } from "../../data/skills";

const Skills = () => {
  return (
    <Section
      id="skills"
      eyebrow="toolbox"
      title="The stack I reach for."
      description="I stay opinionated about the tools I use. They reward care, compound well, and stay out of the user's way."
    >
      <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={6}>
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05}>
            <Box className="rp-card" p={{ base: 6, md: 8 }} h="full">
              <HStack justify="space-between" align="baseline" mb={2}>
                <Heading as="h3" fontSize="xl" color="text">
                  {g.title}
                </Heading>
                <Text fontSize="xs" className="rp-font-mono" color="text.dim">
                  0{i + 1}
                </Text>
              </HStack>
              <Text color="text.muted" mb={6} fontSize="sm">
                {g.caption}
              </Text>
              <Wrap spacing={3}>
                {g.items.map((it) => (
                  <WrapItem key={it.name}>
                    <Tooltip label={it.name} hasArrow bg="bg.elev2" color="text">
                      <HStack
                        spacing={2}
                        px={3}
                        py={2}
                        border="1px solid"
                        borderColor="border"
                        rounded="md"
                        bg="whiteAlpha.50"
                        transition="all 0.2s"
                        _hover={{ borderColor: "accent", bg: "whiteAlpha.100", transform: "translateY(-2px)" }}
                      >
                        <Image src={it.icon} alt={it.name} w={5} h={5} />
                        <Text fontSize="sm" color="text">
                          {it.name}
                        </Text>
                      </HStack>
                    </Tooltip>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
};

export default Skills;
