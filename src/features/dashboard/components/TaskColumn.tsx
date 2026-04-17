/* eslint-disable react-hooks/purity */
import { cn } from "~/utils";
import type { TaskColumnType, Task } from "../types";
// import { TaskCard } from "./TaskCard";
import { DragCard } from "./DragCard";
import type React from "react";
import { useDroppable } from "@dnd-kit/react";
import { CollisionPriority } from "@dnd-kit/abstract";
import { useEffect } from "react";

interface TaskColumnProps {
  taskType: TaskColumnType;
  tasks: Task[];
  children: React.ReactNode;
  id?: string;
}

export const TaskColumn = ({ taskType, tasks, children, id }: TaskColumnProps) => {
  // const now = Date.now();

  const { isDropTarget, ref } = useDroppable({
    id,
    type: "column",
    accept: "item",
    collisionPriority: CollisionPriority.High
  });

  // useEffect(() => {
  //   console.log("isDropTarget", isDropTarget, ref);
  // }, [ref, isDropTarget]);

  const style = isDropTarget ? { background: "#00000030" } : undefined;
  return (
    <div ref={ref} className={cn(style, "border border-dashed border-borderSecondary rounded-lg p-4 w-[33%]")}>
      <p className={cn("text-[14px] mb-3 text-textSecondary font-medium")}>
        {taskType} ({tasks.length})
      </p>
      <div className="flex flex-col gap-4">
        {children}
        {taskType === "Done" && <DragCard />}
      </div>
    </div>
  );
};
