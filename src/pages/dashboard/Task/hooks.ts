import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { task } from "../../../config/query-keys";
import { useParamsHelper } from "@hooks/useParamshelper";
import {
  getTasksList,
  crateTask,
  getTaskDetail,
  deleteTask,
  editTask,
} from "@services/task/task.service";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

export function useTasks() {
  const { getParams } = useParamsHelper();
  const params = getParams();

  return useQuery({
    queryKey: task.list(params),
    queryFn: () => getTasksList(),
    select: (response) => response,
  });
}

export function useCreateTask() {
  const query = useQueryClient();
  return useMutation({
    mutationFn: (values: Partial<Task>) => crateTask(values),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: task.all });
      notifications.show({ message: "Success", id: "task-create" });
    },
    onError: () => {
      console.log("Error");
      notifications.show({ message: "Failed", id: "task-create" });
    },
    onMutate: () => {
      notifications.show({ message: "Mutate", id: "task-create" });
    },
  });
}

export function useTaskDetails(id: string | undefined) {
  return useQuery({
    queryKey: task.detail(id),
    queryFn: () => getTaskDetail({ id }),
    select: (response) => response.data,
  });
}

export function useDeleteTask() {
  const query = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (values: Partial<Task>) => deleteTask(values),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: task.lists() });
      notifications.show({ message: "Success", id: "task-delete" });
      navigate("/d/history");
    },
    onMutate: () => {
      console.log("Mutated");
    },
    onError: () => {
      console.log("Error");
    },
  });
}

export function useEditTask() {
  const query = useQueryClient();
  return useMutation({
    mutationFn: (values: Partial<Task>) => editTask(values),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: task.lists() });
      notifications.show({ message: "Success", id: "task-edit" });
    },
  });
}
