import { useQuery } from "@tanstack/react-query";
import { useParamsHelper } from "../../../hooks/useParamshelper";
import { getTasks } from "../../../services/task";
import { task } from "../../../config/query-keys";

export function useTasks() {
  const { getParams } = useParamsHelper();
  const params = getParams();

  return useQuery({
    queryKey: task.list(params),
    queryFn: () => getTasks(),
    select: (response) => response,
  });
}
