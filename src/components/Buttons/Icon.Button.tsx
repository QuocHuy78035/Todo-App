import { cn } from "~/utils";

type IconButtonSize = "large" | "medium" | "small";
type IconButtonVariant = "primary" | "secondary";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  className?: string;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  disabled?: boolean;
}

const baseStyle = "rounded-full border-2 border-[#E8E8E9] flex items-center justify-center";

const variantStyle: Record<IconButtonVariant, string> = {
  primary: "bg-white",
  secondary: "bg-black"
};

const sizeStyle: Record<IconButtonSize, string> = {
  small: "w-6 h-6",
  medium: "w-8 h-8",
  large: "w-10 h-10"
};

export const IconButton = ({
  icon,
  className = "",
  size = "medium",
  variant = "primary",
  disabled = false,
  ...props
}: IconButtonProps) => {
  return (
    <button disabled={disabled} className={cn(baseStyle, variantStyle[variant], sizeStyle[size], className)} {...props}>
      {icon}
    </button>
  );
};
