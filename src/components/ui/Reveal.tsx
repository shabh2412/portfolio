import { Box, BoxProps } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

type Props = BoxProps & {
  delay?: number;
  y?: number;
  children: React.ReactNode;
};

export const Reveal = ({ delay = 0, y = 20, children, ...rest }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};

export default Reveal;
