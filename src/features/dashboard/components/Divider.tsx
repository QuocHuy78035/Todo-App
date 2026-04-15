import { cn } from "~/utils";

export const Divider = () => {
  return (
    <div className="flex">
      <div className={cn("w-36 bg-[#1C1D22] h-0.5 mt-2")} />
      <div className={cn("w-full bg-[#EDEDED] h-0.5 mt-2")} />
    </div>
  );
};
