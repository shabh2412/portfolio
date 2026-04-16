import { Box, BoxProps, Container, Heading, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = BoxProps & {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
};

const MotionBox = motion(Box);

export const Section = ({
  id,
  eyebrow,
  title,
  description,
  children,
  ...rest
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <Box
      as="section"
      id={id}
      position="relative"
      py={{ base: 24, md: 32 }}
      {...rest}
    >
      <Container maxW="7xl" px={{ base: 5, md: 8 }}>
        {(eyebrow || title || description) && (
          <MotionBox
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            mb={{ base: 10, md: 16 }}
          >
            {eyebrow && (
              <Text
                className="rp-font-mono"
                fontSize="sm"
                color="accent"
                textTransform="uppercase"
                letterSpacing="0.18em"
                mb={3}
              >
                {eyebrow}
              </Text>
            )}
            {title && (
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "5xl" }}
                lineHeight="1.05"
                mb={4}
                maxW="3xl"
              >
                {title}
              </Heading>
            )}
            {description && (
              <Text
                color="text.muted"
                fontSize={{ base: "md", md: "lg" }}
                maxW="2xl"
              >
                {description}
              </Text>
            )}
          </MotionBox>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default Section;
