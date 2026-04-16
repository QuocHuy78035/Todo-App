import { cn } from "~/utils";

export const DragCard = () => {
  return (
    <div
      className={cn(
        "w-full border border-dashed h-45.5 flex items-center justify-center border-borderSecondary rounded-lg"
      )}
    >
      <p className={cn("text-textSecondary font-medium")}>Drag your task here</p>
    </div>
  );
};
