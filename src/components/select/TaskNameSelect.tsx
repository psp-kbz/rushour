import { Loader, Select, SelectProps } from "@mantine/core";
import { getTaskSelect } from "@services/select.service";

import { useQuery } from "@tanstack/react-query";

const useTaskNameSelectQuery = () =>
  useQuery({
    queryKey: ["task"],
    queryFn: () => getTaskSelect(),
  });

export function TaskNameSelect({ ...props }: SelectProps) {
  const { data, isPending } = useTaskNameSelectQuery();
  const options = data?.map((task: TaskName) => ({
    value: task.name ?? "",
    label: task.name,
  }));
  return (
    <Select
      {...props}
      value={props.value?.toString()}
      placeholder="Select Task"
      data={options ?? []}
      label="Task"
      searchable
      clearable
      rightSection={isPending && <Loader size="xs" />}
      checkIconPosition="right"
    />
  );
}
