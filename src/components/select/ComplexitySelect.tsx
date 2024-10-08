import { Loader, Select, SelectProps } from "@mantine/core";
import { getComplexitySelect } from "@services/select.service";

import { useQuery } from "@tanstack/react-query";

const useSelectQuery = () =>
  useQuery({
    queryKey: ["taskComplexity"],
    queryFn: () => getComplexitySelect(),
  });

export function ComplexitySelect({ ...props }: SelectProps) {
  const { data, isPending } = useSelectQuery();
  const options = data?.map((value: SelectType) => ({
    value: value.name.toString() ?? "",
    label: value.name,
  }));
  return (
    <Select
      {...props}
      value={props.value?.toString()}
      placeholder="Select Complexity"
      data={options ?? []}
      label="Complexity"
      searchable
      clearable
      rightSection={isPending && <Loader size="xs" />}
      checkIconPosition="right"
    />
  );
}
