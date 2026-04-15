import { cn } from "~/utils";

type AvatarSize = "large" | "medium" | "small";

const baseStyle = "rounded-full";
const sizeStyle: Record<AvatarSize, string> = {
  large: "w-8 h-8 ",
  medium: "w-9 h-9 ",
  small: "w-10 h-10 "
};

interface AvatarProps {
  src: string;
  size?: AvatarSize;
  className?: string;
}

export const Avatar = ({ src, size = "medium", className = "", ...props }: AvatarProps) => {
  return <img className={cn(baseStyle, sizeStyle[size], className)} src={src} {...props} />;
};
