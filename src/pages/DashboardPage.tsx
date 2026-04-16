import { todos } from "~/data/todo.data";
import { DashboardHeader, DashboardToolbar } from "~/features/dashboard/components";
import { TaskColumn } from "~/features/dashboard/components/TaskColumn";
import type { TaskColumnType, Task } from "~/features/dashboard/types";
import { cn } from "~/utils";

export const DashboardPage = () => {
  const columns: {
    key: string;
    title: TaskColumnType;
  }[] = [
    { key: "todo", title: "To do" },
    { key: "in_progress", title: "In progress" },
    { key: "done", title: "Done" }
  ];

  const groupTask: Record<string, Task[]> = {
    todo: todos.filter((todo) => todo.status === "todo"),
    in_progress: todos.filter((todo) => todo.status === "in_progress"),
    done: todos.filter((todo) => todo.status === "done")
  };
  return (
    <div className={cn("p-4")}>
      {/* Nav */}
      <DashboardHeader />

      {/* Toolbar */}
      <DashboardToolbar />

      {/*Body (Task) */}
      <div className={cn("flex justify-between w-full mt-4")}>
        {columns.map((col, index) => (
          <TaskColumn key={col.key + index} tasks={groupTask[col.key]} taskType={col.title} />
        ))}
      </div>
    </div>
  );
};
