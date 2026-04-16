import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { profile } from "../../data/profile";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box as="footer" borderTop="1px solid" borderColor="border" bg="bg.elev">
      <Container maxW="7xl" px={{ base: 5, md: 8 }} py={10}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap={4}
        >
          <Box>
            <Text className="rp-font-display" fontWeight={700} color="text">
              Rishabh Panesar
            </Text>
            <Text fontSize="sm" color="text.muted" mt={1}>
              {profile.location}
            </Text>
          </Box>
          <HStack spacing={2} fontSize="sm" flexWrap="wrap" rowGap={1}>
            <Link
              href={profile.socials.linkedin}
              isExternal
              color="text.muted"
              _hover={{ color: "accent" }}
              px={2}
              py={2}
              minH="40px"
              display="inline-flex"
              alignItems="center"
            >
              LinkedIn
            </Link>
            <Link
              href={profile.socials.github}
              isExternal
              color="text.muted"
              _hover={{ color: "accent" }}
              px={2}
              py={2}
              minH="40px"
              display="inline-flex"
              alignItems="center"
            >
              GitHub
            </Link>
            <Link
              href={profile.socials.twitter}
              isExternal
              color="text.muted"
              _hover={{ color: "accent" }}
              px={2}
              py={2}
              minH="40px"
              display="inline-flex"
              alignItems="center"
            >
              Twitter
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              color="text.muted"
              _hover={{ color: "accent" }}
              px={2}
              py={2}
              minH="40px"
              display="inline-flex"
              alignItems="center"
            >
              Email
            </Link>
          </HStack>
          <Text fontSize="xs" color="text.dim" className="rp-font-mono">
            © {year} · Built with React, TS & care.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
