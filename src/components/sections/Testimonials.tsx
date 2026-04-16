import { Box, Grid, HStack, Link, Text, VStack } from "@chakra-ui/react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { testimonials } from "../../data/testimonials";

const Quote = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M9.58 8.34c.36-.1.68-.15.97-.15 1 0 1.72.58 2.18 1.74.47 1.16.7 2.52.7 4.08 0 1.56-.43 2.84-1.28 3.84-.86 1-2 1.5-3.44 1.5-1.44 0-2.58-.5-3.44-1.5C4.43 16.84 4 15.56 4 14c0-1.56.43-2.84 1.28-3.84.52-.6 1.14-1.02 1.86-1.26l2.44-.56zm11 0c.36-.1.68-.15.97-.15 1 0 1.72.58 2.18 1.74.47 1.16.7 2.52.7 4.08 0 1.56-.43 2.84-1.28 3.84-.86 1-2 1.5-3.44 1.5-1.44 0-2.58-.5-3.44-1.5-.86-1-1.29-2.28-1.29-3.84 0-1.56.43-2.84 1.28-3.84.52-.6 1.14-1.02 1.86-1.26l2.46-.56z"
      fill="currentColor"
      opacity="0.4"
    />
  </svg>
);

const Initials = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <Box
      w={11}
      h={11}
      rounded="full"
      display="grid"
      placeItems="center"
      background="var(--gradient)"
      color="#0a0b12"
      fontWeight={700}
      fontSize="sm"
      className="rp-font-display"
      flexShrink={0}
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
              p={{ base: 5, md: 7 }}
              h="full"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box color="accent" mb={3}>
                <Quote />
              </Box>
              <Text color="text" fontSize={{ base: "sm", md: "md" }} lineHeight="1.75" mb={6}>
                "{t.quote}"
              </Text>
              <HStack spacing={3} align="center">
                <Initials name={t.name} />
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
