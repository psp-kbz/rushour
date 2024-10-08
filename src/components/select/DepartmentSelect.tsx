import { Loader, Select, SelectProps } from "@mantine/core";
import { getDepartmentSelect } from "@services/select.service";

import { useQuery } from "@tanstack/react-query";

const useSelectQuery = () =>
  useQuery({
    queryKey: ["department"],
    queryFn: () => getDepartmentSelect(),
  });

export function DepartmentSelect({ ...props }: SelectProps) {
  const { data, isPending } = useSelectQuery();
  const options = data?.map((value: SelectType) => ({
    value: value.name.toString() ?? "",
    label: value.name,
  }));
  return (
    <Select
      {...props}
      value={props.value?.toString()}
      placeholder="Select Department"
      data={options ?? []}
      label="Department"
      searchable
      clearable
      rightSection={isPending && <Loader size="xs" />}
      checkIconPosition="right"
    />
  );
}
