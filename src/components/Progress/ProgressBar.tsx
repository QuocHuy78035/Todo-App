import { cn } from "~/utils";

interface ProgressBarProps {
  isDone?: boolean;
  isExpired?: boolean;
  progress: number;
  isHavePercent?: boolean;
}

export const ProgressBar = ({
  isDone = false,
  isExpired = false,
  progress,
  isHavePercent = false
}: ProgressBarProps) => {
  const getBgColor = (isDone: boolean, isExpired: boolean) => {
    if (isDone) return "bg-bgDone";
    if (isExpired) return "bg-bgExpired";
    return "bg-bgInProgress";
  };

  return (
    <div className={cn("h-1 w-full rounded-[40px] bg-borderSecondary relative")}>
      <div
        style={{
          width: `${progress}%`
        }}
        className={cn(getBgColor(isDone, isExpired), `h-1 rounded-[40px] relative flex justify-center`)}
      >
        {isHavePercent && <span className="absolute text-[4px] text-white">{`${progress}%`}</span>}
      </div>
    </div>
  );
};
