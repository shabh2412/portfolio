import { HStack, StackProps, Text } from "@chakra-ui/react";

type Props = StackProps & {
  label: string;
  dotColor?: string;
  pulse?: boolean;
};

export const Pill = ({ label, dotColor = "#34d399", pulse, ...rest }: Props) => {
  return (
    <HStack
      spacing={2.5}
      px={3}
      py={1.5}
      border="1px solid"
      borderColor="border"
      rounded="full"
      bg="whiteAlpha.50"
      backdropFilter="blur(6px)"
      {...rest}
    >
      <span
        style={{
          position: "relative",
          width: 8,
          height: 8,
          borderRadius: "9999px",
          background: dotColor,
          boxShadow: `0 0 12px ${dotColor}`,
        }}
      >
        {pulse && (
          <span
            className="rp-blink"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "9999px",
              background: dotColor,
              opacity: 0.6,
              animation: "rp-pulse 1.8s ease-out infinite",
            }}
          />
        )}
      </span>
      <Text fontSize="sm" color="text" className="rp-font-mono">
        {label}
      </Text>
    </HStack>
  );
};

export default Pill;
