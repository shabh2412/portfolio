import type { ComponentType } from "react";
import type { IconType } from "react-icons";

type Props = {
  icon: IconType;
  size?: number | string;
  color?: string;
  className?: string;
};

/**
 * Thin wrapper around react-icons to dodge a known TS4/React18 type mismatch
 * where IconType resolves to ReactNode instead of ReactElement. Render path
 * is unchanged; this is purely a type cast at the call site.
 */
export const Icon = ({ icon, size = 18, color, className }: Props) => {
  const Component = icon as unknown as ComponentType<{
    size?: number | string;
    color?: string;
    className?: string;
  }>;
  return <Component size={size} color={color} className={className} />;
};

export default Icon;
