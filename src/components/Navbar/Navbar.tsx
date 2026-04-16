import {
  Box,
  Button,
  Container,
  HStack,
  IconButton,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../../data/profile";

const MotionBox = motion(Box);

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onToggle, onClose } = useDisclosure();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      transition="background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease"
      bg={scrolled ? "rgba(10, 11, 18, 0.72)" : "transparent"}
      borderBottom="1px solid"
      borderColor={scrolled ? "border" : "transparent"}
      backdropFilter={scrolled ? "blur(16px) saturate(160%)" : "none"}
    >
      <Container maxW="7xl" px={{ base: 5, md: 8 }}>
        <HStack h={16} justify="space-between">
          <Link
            href="#top"
            _hover={{ textDecoration: "none" }}
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Box
              w={9}
              h={9}
              rounded="lg"
              display="grid"
              placeItems="center"
              background="var(--gradient)"
              fontWeight={800}
              color="#0a0b12"
              fontSize="sm"
              className="rp-font-display"
              letterSpacing="-0.04em"
            >
              rp
            </Box>
            <Box className="rp-font-display" fontWeight={700} color="text">
              Rishabh Panesar
            </Box>
          </Link>

          <HStack spacing={1} display={{ base: "none", md: "flex" }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                px={3}
                py={2}
                fontSize="sm"
                color="text.muted"
                rounded="md"
                _hover={{ color: "text", bg: "whiteAlpha.50", textDecoration: "none" }}
              >
                {l.label}
              </Link>
            ))}
          </HStack>

          <HStack spacing={3}>
            <Button
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              size="sm"
              variant="outline"
              borderColor="border.strong"
              color="text"
              _hover={{ borderColor: "accent", color: "accent", bg: "transparent" }}
              display={{ base: "none", sm: "inline-flex" }}
            >
              Resume
            </Button>
            <Button
              as="a"
              href="#contact"
              size="sm"
              color="#0a0b12"
              background="var(--gradient)"
              _hover={{ opacity: 0.92, transform: "translateY(-1px)" }}
            >
              Let's talk
            </Button>
            <IconButton
              aria-label="Open menu"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              display={{ base: "inline-flex", md: "none" }}
              variant="ghost"
              color="text"
              onClick={onToggle}
            />
          </HStack>
        </HStack>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <MotionBox
            display={{ base: "block", md: "none" }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            borderTop="1px solid"
            borderColor="border"
            bg="rgba(10, 11, 18, 0.96)"
            backdropFilter="blur(16px)"
            px={5}
            py={4}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                display="block"
                py={3}
                color="text"
                onClick={onClose}
                _hover={{ color: "accent", textDecoration: "none" }}
              >
                {l.label}
              </Link>
            ))}
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Navbar;
