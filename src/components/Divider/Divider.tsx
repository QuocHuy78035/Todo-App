import { cn } from "~/utils";

interface DividerProps {
  height?: number;
  width?: number;
  bg?: "borderPrimary" | "borderSecondary";
}

export const Divider = ({ width, height = 2, bg }: DividerProps) => {
  const bgClass = bg ? `bg-${bg}` : "";
  return (
    <div
      style={{
        height: `${height}px`,
        width: width ? `${width}px` : "100%"
      }}
      className={cn(bgClass, `mt-2`)}
    />
  );
};
