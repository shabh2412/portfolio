import { Box, Text } from "@chakra-ui/react";

const items = [
  "React",
  "TypeScript",
  "Next.js",
  "Redux Toolkit",
  "React Query",
  "Node.js",
  "Tailwind CSS",
  "Chakra UI",
  "Framer Motion",
  "Vite",
  "Playwright",
  "WebSockets",
  "Design Systems",
  "Performance",
  "Accessibility",
];

const Row = () => (
  <Box display="flex" gap={10} pr={10}>
    {items.map((it, i) => (
      <Box key={i} display="flex" alignItems="center" gap={10} whiteSpace="nowrap">
        <Text
          className="rp-font-display"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight={600}
          color="text.dim"
          _hover={{ color: "accent" }}
          transition="color 0.2s"
        >
          {it}
        </Text>
        <Text color="text.dim" fontSize={{ base: "2xl", md: "4xl" }}>
          ✦
        </Text>
      </Box>
    ))}
  </Box>
);

export const Marquee = () => {
  return (
    <Box
      py={{ base: 8, md: 12 }}
      borderY="1px solid"
      borderColor="border"
      overflow="hidden"
      bg="bg.elev"
      position="relative"
      zIndex={1}
    >
      <Box
        display="flex"
        width="max-content"
        style={{ animation: "rp-marquee 40s linear infinite" }}
      >
        <Row />
        <Row />
      </Box>
    </Box>
  );
};

export default Marquee;
