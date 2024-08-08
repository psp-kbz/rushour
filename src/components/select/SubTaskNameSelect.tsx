import { subTask } from "@config/query-keys";
import { Loader, Select, SelectProps } from "@mantine/core";
import { getSubTaskSelect } from "@services/select.service";

import { useQuery } from "@tanstack/react-query";

const useSelectQuery = () =>
  useQuery({
    queryKey: subTask.all,
    queryFn: () => getSubTaskSelect(),
  });

export function SubTaskNameSelect({ ...props }: SelectProps) {
  const { data, isPending } = useSelectQuery();
  const options = data?.map((value: SelectType) => ({
    value: value.id.toString() ?? "",
    label: value.name,
  }));
  return (
    <Select
      {...props}
      value={props.value?.toString()}
      placeholder="Select subtask"
      data={options ?? []}
      label="SubTask"
      searchable
      clearable
      rightSection={isPending && <Loader size="xs" />}
      checkIconPosition="right"
    />
  );
}
