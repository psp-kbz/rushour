import { Loader, Select, SelectProps } from "@mantine/core";
import { getTaskName } from "@services/task.service";
import { useQuery } from "@tanstack/react-query";

const useTaskNameSelectQuery = () =>
  useQuery({
    queryKey: ["task-names"],
    queryFn: () => getTaskName(),
  });

export function TaskNameSelect({ ...props }: SelectProps) {
  const { data, isPending } = useTaskNameSelectQuery();
  const options = data?.map((task: TaskName) => ({
    value: task.id.toString() ?? "",
    label: task.taskName,
  }));
  return (
    <Select
      {...props}
      value={props.value?.toString()}
      placeholder="Select task type"
      data={options ?? []}
      label="Task Type"
      searchable
      clearable
      rightSection={isPending && <Loader size="xs" />}
      checkIconPosition="right"
    />
  );
}
