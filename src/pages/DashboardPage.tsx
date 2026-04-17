/* eslint-disable react-hooks/purity */
import { DragDropProvider } from "@dnd-kit/react";
import { useCallback, useMemo, useState } from "react";
import { todos } from "~/data/todo.data";
import { DashboardHeader, DashboardToolbar } from "~/features/dashboard/components";
import { TaskCard } from "~/features/dashboard/components/TaskCard";
import { TaskColumn } from "~/features/dashboard/components/TaskColumn";
import type { TaskColumnType, Task } from "~/features/dashboard/types";
import { cn } from "~/utils";

export const DashboardPage = () => {
  const [tasks, setTasks] = useState<Task[]>(todos);
  const now = Date.now();
  const columns: {
    key: string;
    title: TaskColumnType;
  }[] = [
    { key: "todo", title: "To do" },
    { key: "in_progress", title: "In progress" },
    { key: "done", title: "Done" }
  ];

  const groupTask: Record<string, Task[]> = {
    todo: tasks.filter((todo) => todo.status === "todo"),
    in_progress: tasks.filter((todo) => todo.status === "in_progress"),
    done: tasks.filter((todo) => todo.status === "done")
  };

  const handleDragEnd = ({ operation }) => {
    if (!operation) return;

    const { source, target } = operation;
    if (!target) return;

    const targetId = String(target.id);

    const isColumn = ["in_progress", "done", "todo"].includes(targetId);

    //if (!isColumn) return;

    //setTasks((prev) => prev.map((task) => (task.id === source.id ? { ...task, status: targetId } : task)));
  };

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <div className={cn("p-4")}>
        <DashboardHeader />
        <DashboardToolbar />
        <div className={cn("flex justify-between w-full mt-4")}>
          {columns.map((col) => (
            <TaskColumn key={col.key} id={col.key} tasks={groupTask[col.key]} taskType={col.title}>
              {groupTask[col.key].map((task, index) => (
                <TaskCard
                  id={task.id}
                  index={index}
                  column={col.key}
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
            </TaskColumn>
          ))}
        </div>
      </div>
    </DragDropProvider>
  );
};
