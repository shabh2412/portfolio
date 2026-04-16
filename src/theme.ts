import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `"Space Grotesk", "Inter", system-ui, sans-serif`,
    body: `"Inter", "Space Grotesk", system-ui, sans-serif`,
    mono: `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
  },
  colors: {
    brand: {
      50: "#eefffb",
      100: "#c7fff1",
      200: "#92f9e0",
      300: "#5eead4",
      400: "#34d3bd",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
    },
    violet: {
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
    },
    ink: {
      0: "#0a0b12",
      50: "#11131d",
      100: "#181b28",
      200: "#252a3d",
      300: "#353b54",
      400: "#7a8099",
      500: "#8b90a8",
      600: "#b8bcd0",
      700: "#e7e9f2",
      800: "#f5f6fb",
      900: "#ffffff",
    },
  },
  semanticTokens: {
    colors: {
      bg: { default: "ink.0" },
      "bg.elev": { default: "ink.50" },
      "bg.elev2": { default: "ink.100" },
      border: { default: "whiteAlpha.200" },
      "border.strong": { default: "whiteAlpha.300" },
      text: { default: "ink.700" },
      "text.muted": { default: "ink.500" },
      "text.dim": { default: "ink.400" },
      accent: { default: "brand.300" },
      "accent.2": { default: "violet.400" },
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "bg",
        color: "text",
      },
      a: { color: "accent", _hover: { color: "white" } },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 600,
        borderRadius: "full",
        letterSpacing: "0.01em",
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: "-0.02em",
        fontFamily: `"Space Grotesk", "Inter", system-ui, sans-serif`,
      },
    },
  },
});

export default theme;
