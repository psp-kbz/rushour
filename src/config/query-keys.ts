export const task = {
  all: ["task"] as const,
  lists: (param?: Record<string, string>) =>
    [...task.all, "list", param || {}] as const,
  list: (filters: string | Record<string, unknown>) =>
    [...task.lists(), { filters }] as const,
  details: () => [...task.all, "detail"] as const,
  detail: (id: string | undefined) => [...task.details(), id] as const,
};
