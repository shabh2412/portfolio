import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import TechTag from "../ui/TechTag";
import { experience } from "../../data/experience";

const Bullet = () => (
  <Box
    display="inline-block"
    w={2.5}
    h={2.5}
    rounded="full"
    mt={2}
    mr={2}
    background="var(--gradient)"
    flexShrink={0}
  />
);

const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="experience"
      title="Where I've been shipping."
      description="A short timeline of the teams I've built with, what I owned, and the outcomes we drove."
    >
      <Box position="relative" pl={{ base: 0, md: 6 }}>
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          left={0}
          top={0}
          bottom={0}
          w="1px"
          bg="border"
        />
        <VStack spacing={{ base: 10, md: 14 }} align="stretch">
          {experience.map((exp, i) => (
            <Reveal key={exp.company + exp.role} delay={i * 0.05}>
              <Flex position="relative" direction={{ base: "column", md: "row" }} gap={{ base: 4, md: 10 }}>
                <Box
                  display={{ base: "none", md: "block" }}
                  position="absolute"
                  left="-6"
                  top={2}
                  w={3}
                  h={3}
                  rounded="full"
                  background="var(--gradient)"
                  boxShadow="0 0 0 4px rgba(94, 234, 212, 0.1)"
                />
                <Box minW={{ md: "150px" }} pt={1}>
                  <Text className="rp-font-mono" fontSize="sm" color="accent">
                    {exp.period}
                  </Text>
                  {exp.location && (
                    <Text fontSize="xs" color="text.dim" mt={1} className="rp-font-mono">
                      {exp.location}
                    </Text>
                  )}
                </Box>

                <Box className="rp-card" p={{ base: 5, md: 8 }} flex={1}>
                  <Flex
                    justify="space-between"
                    align={{ base: "flex-start", md: "center" }}
                    direction={{ base: "column", md: "row" }}
                    gap={2}
                    mb={3}
                  >
                    <Box>
                      <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} color="text">
                        {exp.role}
                      </Heading>
                      <HStack spacing={2} mt={1}>
                        {exp.url ? (
                          <Link href={exp.url} isExternal color="accent" fontWeight={600}>
                            {exp.company} <ExternalLinkIcon mx="2px" />
                          </Link>
                        ) : (
                          <Text color="text" fontWeight={600}>
                            {exp.company}
                          </Text>
                        )}
                      </HStack>
                    </Box>
                  </Flex>

                  <Text color="text.muted" mb={4}>
                    {exp.summary}
                  </Text>

                  <List spacing={2} mb={5}>
                    {exp.highlights.map((h, k) => (
                      <ListItem key={k} display="flex" color="text.muted">
                        <ListIcon as={Bullet} />
                        <span>{h}</span>
                      </ListItem>
                    ))}
                  </List>

                  <Wrap spacing={2}>
                    {exp.stack.map((s) => (
                      <WrapItem key={s}>
                        <TechTag>{s}</TechTag>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Box>
              </Flex>
            </Reveal>
          ))}
        </VStack>
      </Box>
    </Section>
  );
};

export default Experience;
