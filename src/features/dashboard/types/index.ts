type TaskStatus = "in_progress" | "done" | "todo";
export type TaskColumnType = "To do" | "In progress" | "Done";

export interface Task {
  id: string;
  title: string;
  subtitle: string;
  progress: number;
  isDone: boolean;
  total: number;
  date: number;
  comments: unknown[];
  attachments: unknown[];
  status: TaskStatus;
}
