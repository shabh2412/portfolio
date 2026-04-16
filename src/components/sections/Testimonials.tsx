import { Box, Grid, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { Icon } from "../ui/Icon";
import { testimonials } from "../../data/testimonials";

const Avatar = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <Box
      w={12}
      h={12}
      rounded="full"
      display="grid"
      placeItems="center"
      background="var(--gradient)"
      color="#0a0b12"
      fontWeight={700}
      fontSize="md"
      className="rp-font-display"
      letterSpacing="-0.04em"
      flexShrink={0}
      boxShadow="0 6px 20px -8px rgba(94, 234, 212, 0.5)"
    >
      {initials}
    </Box>
  );
};

const Testimonials = () => {
  return (
    <Section
      id="testimonials"
      eyebrow="recommendations"
      title="What peers and collaborators have said."
      description="Endorsements from engineers I've studied, shipped, and grown alongside. Pulled straight from LinkedIn."
    >
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap={5}>
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.04}>
            <Box
              className="rp-card"
              p={{ base: 6, md: 7 }}
              h="full"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              position="relative"
            >
              <Box color="accent" opacity={0.4} mb={4} display="inline-flex">
                <Icon icon={RiDoubleQuotesL} size={30} />
              </Box>
              <Text color="text" fontSize={{ base: "sm", md: "md" }} lineHeight="1.75" mb={6}>
                {t.quote}
              </Text>
              <HStack spacing={3} align="center">
                <Avatar name={t.name} />
                <VStack align="start" spacing={0} minW={0}>
                  {t.linkedin ? (
                    <Link
                      href={t.linkedin}
                      isExternal
                      color="text"
                      fontWeight={600}
                      fontSize="sm"
                      _hover={{ color: "accent", textDecoration: "none" }}
                      noOfLines={1}
                    >
                      {t.name}
                    </Link>
                  ) : (
                    <Text color="text" fontWeight={600} fontSize="sm" noOfLines={1}>
                      {t.name}
                    </Text>
                  )}
                  <Text color="text.muted" fontSize="xs" noOfLines={1}>
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
};

export default Testimonials;
