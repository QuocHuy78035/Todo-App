import { EllipsisOutlined } from "@ant-design/icons";
import { IconButton } from "~/components/Buttons";
import { cn, timeStampToDateTime } from "~/utils";
import ProgressIcon from "~/assets/icons/progress.png";
import MessageIcon from "~/assets/icons/message.png";
import AttackIcon from "~/assets/icons/attack.png";
import { ProgressBar } from "~/components/Progress";

interface TaskCardProps {
  taskTitle: string;
  taskSubTitle: string;
  numberOfProgressDone: number;
  date: number;
  numberOfCmt: number;
  numberOfAttach: number;
  isDone?: boolean;
  isExpired?: boolean;
  totalProgress: number;
}

export const TaskCard = ({
  taskTitle,
  taskSubTitle,
  numberOfProgressDone,
  date,
  numberOfAttach,
  numberOfCmt,
  isDone = false,
  totalProgress,
  isExpired = false
}: TaskCardProps) => {
  return (
    <div className={cn("p-4 border border-borderSecondary rounded-lg")}>
      <div className={cn("flex justify-between items-center")}>
        <div>
          <p className={cn("font-bold")}>{taskTitle}</p>
          <p className={cn("text-[14px] text-textSecondary ")}>{taskSubTitle}</p>
        </div>
        <IconButton size="small" icon={<EllipsisOutlined />} />
      </div>
      <div className="flex justify-between mt-4 mb-2">
        <div className="flex items-center">
          <img src={ProgressIcon} className="w-4 h-4" />
          <p className="ml-1 text-[14px] font-medium text-textSecondary">Progress</p>
        </div>
        <p className="font-medium text-[14px]">
          {numberOfProgressDone}/{totalProgress}
        </p>
      </div>
      <ProgressBar isDone={isDone} isExpired={isExpired} progress={(numberOfProgressDone * 100) / totalProgress} />
      <div className="flex justify-between mt-5">
        <div className="px-4 py-2 bg-borderSecondary rounded-4xl text-[12px] text-textSecondary font-[450]">
          {timeStampToDateTime(date)}
        </div>
        <div className="flex gap-2">
          <div className="flex items-center">
            <img src={MessageIcon} className="w-4 h-4 mr-1" />
            <p className="text-[12px] font-[450] text-textSecondary">{numberOfCmt}</p>
          </div>
          <div className="flex items-center">
            <img src={AttackIcon} className="w-4 h-4 mr-1" />
            <p className="text-[12px] font-[450] text-textSecondary">{numberOfAttach}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
