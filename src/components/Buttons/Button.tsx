import { cn } from "~/utils";

type ButtonSize = "large" | "medium" | "small";
type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const baseStyle = "";

const variantStyle: Record<ButtonVariant, string> = {
  primary: "bg-[#4B69FF] text-white",
  secondary: "",
  tertiary: "",
  destructive: ""
};

export const Button = ({
  children,
  disabled = false,
  className = "",
  size = "medium",
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        baseStyle,
        {
          small: "p-0.5",
          medium: "px-6 py-2 text-[14px] rounded-4xl",
          large: "p-1.5"
        }[size],
        variantStyle[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
