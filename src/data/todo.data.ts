import type { Task } from "~/features/dashboard/types";

export const todos: Task[] = [
  {
    id: "1",
    title: "Design new UI presentation",
    subtitle: "Dribbble marketing",
    progress: 7,
    total: 10,
    isDone: false,
    date: new Date(2023, 7, 16, 14, 5).getTime(), // 14:05 16/08/2023
    comments: [{ id: 1 }, { id: 2 }, { id: 3 }],
    attachments: [{ id: 1 }],
    status: "todo"
  },
  {
    id: "2",
    title: "Build dashboard layout",
    subtitle: "Admin panel",
    progress: 10,
    total: 10,
    isDone: true,
    date: new Date(2023, 7, 10, 9, 0).getTime(),
    comments: [{ id: 1 }],
    attachments: [{ id: 1 }, { id: 2 }],
    status: "done"
  },
  {
    id: "3",
    title: "Fix login bug",
    subtitle: "Authentication",
    progress: 2,
    total: 5,
    isDone: false,
    date: new Date(2023, 7, 20, 18, 30).getTime(),
    comments: [],
    attachments: [],
    status: "in_progress"
  },
  {
    id: "4",
    title: "Write API documentation",
    subtitle: "Backend team",
    progress: 5,
    total: 5,
    isDone: true,
    date: new Date(2023, 7, 12, 12, 0).getTime(),
    comments: [{ id: 1 }, { id: 2 }],
    attachments: [],
    status: "done"
  },
  {
    id: "5",
    title: "Create onboarding flow",
    subtitle: "UX improvement",
    progress: 1,
    total: 8,
    isDone: false,
    date: new Date(2026, 7, 25, 10, 15).getTime(),
    comments: [{ id: 1 }],
    attachments: [{ id: 1 }, { id: 2 }, { id: 3 }],
    status: "todo"
  }
];
