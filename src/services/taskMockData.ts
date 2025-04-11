
import { Employee } from "@/types";
import { Task, TaskBoard, TaskComment, TaskColumn, TaskPriority, TaskStatus } from "@/types/task";
import { employees } from "./mockData";

// Helper function to get random employee ID
const getRandomEmployeeId = (): string => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  return employees[randomIndex].id;
};

// Mock task labels
export const taskLabels = [
  'bug', 'feature', 'enhancement', 'documentation', 'design', 
  'frontend', 'backend', 'testing', 'infrastructure', 'refactor'
];

// Mock task data
export const tasks: Task[] = [
  {
    id: "TASK-1",
    title: "Implement user authentication",
    description: "Create login and registration functionality with JWT authentication",
    status: "todo",
    priority: "high",
    assigneeId: getRandomEmployeeId(),
    reporterId: getRandomEmployeeId(),
    createdAt: "2025-03-15T10:00:00Z",
    updatedAt: "2025-03-15T10:00:00Z",
    dueDate: "2025-04-25T17:00:00Z",
    estimatedHours: 8,
    labels: ["backend", "feature"],
    comments: [
      {
        id: "comment-1",
        taskId: "TASK-1",
        authorId: getRandomEmployeeId(),
        content: "We should use OAuth for social login integration as well",
        createdAt: "2025-03-16T14:30:00Z"
      }
    ]
  },
  {
    id: "TASK-2",
    title: "Design dashboard UI",
    description: "Create wireframes and mockups for the main dashboard",
    status: "done",
    priority: "medium",
    assigneeId: getRandomEmployeeId(),
    reporterId: getRandomEmployeeId(),
    createdAt: "2025-03-10T09:30:00Z",
    updatedAt: "2025-03-15T16:45:00Z",
    dueDate: "2025-03-17T17:00:00Z",
    estimatedHours: 6,
    labels: ["design", "frontend"],
    comments: []
  },
  {
    id: "TASK-3",
    title: "Implement Kanban drag and drop",
    description: "Add drag and drop functionality to the Kanban board for task status updates",
    status: "in-progress",
    priority: "high",
    assigneeId: getRandomEmployeeId(),
    reporterId: getRandomEmployeeId(),
    createdAt: "2025-03-12T11:20:00Z",
    updatedAt: "2025-03-14T13:15:00Z",
    dueDate: "2025-04-20T17:00:00Z",
    estimatedHours: 12,
    labels: ["frontend", "feature"],
    comments: []
  },
  {
    id: "TASK-4",
    title: "Fix navigation menu responsive layout",
    description: "The navigation menu breaks on mobile devices. Fix the responsive layout.",
    status: "todo",
    priority: "medium",
    assigneeId: getRandomEmployeeId(),
    reporterId: getRandomEmployeeId(),
    createdAt: "2025-03-16T08:45:00Z",
    updatedAt: "2025-03-16T08:45:00Z",
    dueDate: "2025-04-18T17:00:00Z",
    estimatedHours: 3,
    labels: ["bug", "frontend"],
    comments: []
  },
  {
    id: "TASK-5",
    title: "Implement data visualization for reports",
    description: "Add charts and graphs to the reporting dashboard",
    status: "backlog",
    priority: "low",
    assigneeId: getRandomEmployeeId(),
    reporterId: getRandomEmployeeId(),
    createdAt: "2025-03-08T14:30:00Z",
    updatedAt: "2025-03-08T14:30:00Z",
    dueDate: "2025-05-01T17:00:00Z",
    estimatedHours: 16,
    labels: ["frontend", "feature", "enhancement"],
    comments: []
  },
  {
    id: "TASK-6",
    title: "Set up CI/CD pipeline",
    description: "Configure CI/CD pipeline for automated testing and deployment",
    status: "review",
    priority: "high",
    assigneeId: getRandomEmployeeId(),
    reporterId: getRandomEmployeeId(),
    createdAt: "2025-03-05T10:15:00Z",
    updatedAt: "2025-03-14T09:20:00Z",
    dueDate: "2025-03-19T17:00:00Z",
    estimatedHours: 8,
    labels: ["infrastructure", "testing"],
    comments: []
  },
  {
    id: "TASK-7",
    title: "Implement task commenting system",
    description: "Add functionality for users to comment on tasks",
    status: "in-progress",
    priority: "medium",
    assigneeId: getRandomEmployeeId(),
    reporterId: getRandomEmployeeId(),
    createdAt: "2025-03-13T11:00:00Z",
    updatedAt: "2025-03-15T16:30:00Z",
    dueDate: "2025-04-22T17:00:00Z",
    estimatedHours: 5,
    labels: ["backend", "frontend", "feature"],
    comments: []
  },
  {
    id: "TASK-8",
    title: "Write API documentation",
    description: "Document all API endpoints using Swagger",
    status: "todo",
    priority: "low",
    assigneeId: getRandomEmployeeId(),
    reporterId: getRandomEmployeeId(),
    createdAt: "2025-03-15T13:45:00Z",
    updatedAt: "2025-03-15T13:45:00Z",
    dueDate: "2025-04-30T17:00:00Z",
    estimatedHours: 6,
    labels: ["documentation", "backend"],
    comments: []
  },
  {
    id: "TASK-9",
    title: "Optimize database queries",
    description: "Improve database performance by optimizing slow queries",
    status: "backlog",
    priority: "medium",
    assigneeId: getRandomEmployeeId(),
    reporterId: getRandomEmployeeId(),
    createdAt: "2025-03-10T09:00:00Z",
    updatedAt: "2025-03-10T09:00:00Z",
    dueDate: "2025-05-05T17:00:00Z",
    estimatedHours: 8,
    labels: ["backend", "enhancement", "refactor"],
    comments: []
  },
  {
    id: "TASK-10",
    title: "Implement dark mode",
    description: "Add dark mode support to the application",
    status: "done",
    priority: "low",
    assigneeId: getRandomEmployeeId(),
    reporterId: getRandomEmployeeId(),
    createdAt: "2025-03-02T10:30:00Z",
    updatedAt: "2025-03-12T15:45:00Z",
    dueDate: "2025-03-15T17:00:00Z",
    estimatedHours: 4,
    labels: ["frontend", "enhancement"],
    comments: []
  }
];

// Function to group tasks by status for the Kanban board
export const getTasksByStatus = (): TaskColumn[] => {
  const columns: TaskColumn[] = [
    { id: "backlog", title: "Backlog", tasks: [] },
    { id: "todo", title: "To Do", tasks: [] },
    { id: "in-progress", title: "In Progress", tasks: [] },
    { id: "review", title: "Review", tasks: [] },
    { id: "done", title: "Done", tasks: [] }
  ];

  tasks.forEach(task => {
    const column = columns.find(col => col.id === task.status);
    if (column) {
      column.tasks.push(task);
    }
  });

  return columns;
};

export const getEmployeeById = (id?: string): Employee | undefined => {
  if (!id) return undefined;
  return employees.find(emp => emp.id === id);
};

export const getTasksByAssignee = (): Record<string, Task[]> => {
  const tasksByAssignee: Record<string, Task[]> = {};
  
  tasks.forEach(task => {
    if (task.assigneeId) {
      if (!tasksByAssignee[task.assigneeId]) {
        tasksByAssignee[task.assigneeId] = [];
      }
      tasksByAssignee[task.assigneeId].push(task);
    }
  });
  
  return tasksByAssignee;
};

export const getTasksByPriority = (): Record<TaskPriority, number> => {
  const initial: Record<TaskPriority, number> = {
    low: 0,
    medium: 0, 
    high: 0,
    urgent: 0
  };
  
  return tasks.reduce((acc, task) => {
    acc[task.priority]++;
    return acc;
  }, initial);
};

// Renamed to countTasksByStatus to avoid duplications
export const countTasksByStatus = (): Record<TaskStatus, number> => {
  const initial: Record<TaskStatus, number> = {
    backlog: 0,
    todo: 0,
    "in-progress": 0,
    review: 0,
    done: 0
  };
  
  return tasks.reduce((acc, task) => {
    acc[task.status]++;
    return acc;
  }, initial);
};

// Mock boards
export const boards: TaskBoard[] = [
  {
    id: "board-1",
    name: "Development Board",
    columns: getTasksByStatus()
  }
];

// Add missing functions needed by Dashboard.tsx
export const countReviewsByStatus = (status: string): number => {
  // Since this is a task tracking app, we'll return placeholder data
  const mockData: Record<string, number> = {
    draft: 5,
    pending: 8,
    completed: 12
  };
  return mockData[status] || 0;
};

export const getAverageOverallRating = (): number => {
  // Return placeholder data for now
  return 4.2;
};

export const getUpcomingReviews = (): any[] => {
  // Return empty array for now
  return [];
};

export const getAverageByCategoryId = (categoryId: string): number => {
  // Return placeholder data based on categoryId
  const mockRatings: Record<string, number> = {
    "cat-001": 4.3,
    "cat-002": 3.8,
    "cat-003": 4.0,
    "cat-004": 3.7,
    "cat-005": 4.5
  };
  return mockRatings[categoryId] || 3.9;
};
