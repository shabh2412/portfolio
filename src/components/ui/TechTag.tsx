import { Text, TextProps } from "@chakra-ui/react";

export const TechTag = ({ children, ...rest }: TextProps) => (
  <Text
    as="span"
    display="inline-flex"
    alignItems="center"
    px={3}
    py={1}
    fontSize="xs"
    className="rp-font-mono"
    color="text.muted"
    border="1px solid"
    borderColor="border"
    rounded="full"
    bg="whiteAlpha.50"
    _hover={{ color: "accent", borderColor: "accent" }}
    transition="color 0.2s, border-color 0.2s"
    {...rest}
  >
    {children}
  </Text>
);

export default TechTag;
