import type { Task } from "../types/task";

export const initialTasks: Task[] = [
  {
    id: 1,
    title: "Presentation",
    description: "Prepare and deliver the course presentation.",
    status: "Done",
    priority: "High",
    dueDate: "2026-03-24",
    createdAt: "2026-03-20",
  },
  {
    id: 2,
    title: "Bonus Task",
    description: "Complete the bonus task for extra marks.",
    status: "Done",
    priority: "Medium",
    dueDate: "2026-03-25",
    createdAt: "2026-03-20",
  },
  {
    id: 3,
    title: "Assignment 1",
    description: "Complete and submit Assignment 1.",
    status: "In Progress",
    priority: "High",
    dueDate: "2026-03-26",
    createdAt: "2026-03-21",
  },
  {
    id: 4,
    title: "Quiz 1",
    description: "Prepare and attempt Quiz 1.",
    status: "Todo",
    priority: "Medium",
    dueDate: "2026-03-26",
    createdAt: "2026-03-21",
  },
  {
    id: 5,
    title: "Final Project",
    description: "Start working on the final project.",
    status: "Todo",
    priority: "High",
    dueDate: "2026-03-26",
    createdAt: "2026-03-22",
  },
];