export const task = {
  all: ["task"] as const,
  lists: (param?: Record<string, string>) =>
    [...task.all, "list", param || {}] as const,
  list: (filters: string | Record<string, unknown>) =>
    [...task.lists(), { filters }] as const,
  details: () => [...task.all, "detail"] as const,
  detail: (id: string | undefined) => [...task.details(), id] as const,
};

export const taskName = {
  all: ["taskName"] as const,
  lists: (param?: Record<string, string>) =>
    [...taskName.all, "list", param || {}] as const,
  list: (filters: string | Record<string, unknown>) =>
    [...taskName.lists(), { filters }] as const,
  details: () => [...taskName.all, "detail"] as const,
  detail: (id: string | undefined) => [...taskName.details(), id] as const,
};

export const subTask = {
  all: ["subTask"] as const,
  lists: (param?: Record<string, string>) =>
    [...subTask.all, "list", param || {}] as const,
  list: (filters: string | Record<string, unknown>) =>
    [...subTask.lists(), { filters }] as const,
  details: () => [...subTask.all, "detail"] as const,
  detail: (id: string | undefined) => [...subTask.details(), id] as const,
};

export const taskStatus = {
  all: ["taskStatus"] as const,
  lists: (param?: Record<string, string>) =>
    [...taskStatus.all, "list", param || {}] as const,
  list: (filters: string | Record<string, unknown>) =>
    [...taskStatus.lists(), { filters }] as const,
  details: () => [...taskStatus.all, "detail"] as const,
  detail: (id: string | undefined) => [...taskStatus.details(), id] as const,
};

export const taskComplexity = {
  all: ["taskComplexity"] as const,
  lists: (param?: Record<string, string>) =>
    [...taskComplexity.all, "list", param || {}] as const,
  list: (filters: string | Record<string, unknown>) =>
    [...taskComplexity.lists(), { filters }] as const,
  details: () => [...taskComplexity.all, "detail"] as const,
  detail: (id: string | undefined) =>
    [...taskComplexity.details(), id] as const,
};

export const project = {
  all: ["project"] as const,
  lists: (param?: Record<string, string>) =>
    [...project.all, "list", param || {}] as const,
  list: (filters: string | Record<string, unknown>) =>
    [...project.lists(), { filters }] as const,
  details: () => [...project.all, "detail"] as const,
  detail: (id: string | undefined) => [...project.details(), id] as const,
};

export const department = {
  all: ["department"] as const,
  lists: (param?: Record<string, string>) =>
    [...department.all, "list", param || {}] as const,
  list: (filters: string | Record<string, unknown>) =>
    [...department.lists(), { filters }] as const,
  details: () => [...department.all, "detail"] as const,
  detail: (id: string | undefined) => [...department.details(), id] as const,
};
