import axios from "axios";

export async function getTasksList() {
  return axios.get<ApiListResponse<Task>>("/DailyTasks/GetPaging");
}

export async function getTaskDetail({ id }: { id: string | undefined }) {
  return axios.get<Task>(`/DailyTasks/${id}`);
}

export async function crateTask(values: Partial<Task>) {
  return axios.post<Task>("/DailyTasks/post", values);
}
export async function deleteTask({ id }: Partial<Task>) {
  return axios.delete<Task>(`/DailyTasks/${id}`);
}
export async function editTask(values: Partial<Task>) {
  return axios.put<Task>(`/DailyTasks/${values.id}`, values);
}
