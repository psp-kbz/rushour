import { Loader, Select, SelectProps } from "@mantine/core";
import { getProjectSelect } from "@services/select.service";

import { useQuery } from "@tanstack/react-query";

const useSelectQuery = () =>
  useQuery({
    queryKey: ["project"],
    queryFn: () => getProjectSelect(),
  });

export function ProjectSelect({ ...props }: SelectProps) {
  const { data, isPending } = useSelectQuery();
  const options = data?.map((value: SelectType) => ({
    value: value.name.toString() ?? "",
    label: value.name,
  }));
  return (
    <Select
      {...props}
      value={props.value?.toString()}
      placeholder="Select Project"
      data={options ?? []}
      label="Projects"
      searchable
      clearable
      rightSection={isPending && <Loader size="xs" />}
      checkIconPosition="right"
    />
  );
}
