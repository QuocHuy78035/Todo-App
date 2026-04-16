import { cn } from "~/utils";

type ProgressBarBgColor = "bgInProgress" | "bgExpired" | "bgDone";

interface ProgressBarProps {
  bgColor: ProgressBarBgColor;
  progress: number;
  isHavePercent?: boolean;
}

export const ProgressBar = ({ bgColor, progress, isHavePercent = false }: ProgressBarProps) => {
  const bgClasses = bgColor ? `bg-${bgColor}` : "";
  return (
    <div className={cn("h-1 w-full rounded-[40px] bg-borderSecondary relative")}>
      <div
        style={{
          width: `${progress}%`
        }}
        className={cn(bgClasses, `h-1 rounded-[40px] relative flex justify-center`)}
      >
        {isHavePercent && <span className="absolute text-[4px] text-white">{`${progress}%`}</span>}
      </div>
    </div>
  );
};
