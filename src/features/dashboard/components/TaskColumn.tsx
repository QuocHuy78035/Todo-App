/* eslint-disable react-hooks/purity */
import { cn } from "~/utils";
import type { TaskColumnType, Task } from "../types";
import { TaskCard } from "./TaskCard";
import { DragCard } from "./DragCard";

interface TaskColumnProps {
  taskType: TaskColumnType;
  tasks: Task[];
}

export const TaskColumn = ({ taskType, tasks }: TaskColumnProps) => {
  const now = Date.now();
  return (
    <div className={cn("border border-dashed border-borderSecondary rounded-lg p-4 w-[33%]")}>
      <p className={cn("text-[14px] mb-3 text-textSecondary font-medium")}>
        {taskType} ({tasks.length})
      </p>
      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard
            date={task.date}
            numberOfAttach={task.attachments.length}
            numberOfCmt={task.comments.length}
            numberOfProgressDone={task.progress}
            taskSubTitle={task.subtitle}
            taskTitle={task.title}
            isDone={task.isDone}
            isExpired={now > task.date}
            key={task.id}
            totalProgress={task.total}
          />
        ))}
        {taskType === "Done" && <DragCard />}
      </div>
    </div>
  );
};
