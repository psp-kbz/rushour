import { useForm, zodResolver } from "@mantine/form";
import { taskSchema } from "@utils/schema";
import { Box, Button, Group, Stack, TextInput } from "@mantine/core";
type FormProps = {
  isLoading?: boolean;
  onSubmit: (values: Partial<Task>) => void;
  close: () => void;
  values?: Task;
};

export function TaskForm({
  isLoading = false,
  onSubmit,
  close,
  values,
}: FormProps) {
  const form = useForm<Task>({
    initialValues: values ?? {
      id: "",
      taskName: "Meeting",
      subTaskName: "New",
      status: "planned",
      complexity: "Low",
      createdAt: new Date(),
      updatedAt: new Date(),
      fromTime: new Date(),
      toTime: new Date(),
      projectName: "",
      remark: "",
      projectManagerName: "",
      businessAnalystName: "",
      departmentName: "",
      category: "",
      staffId: "",
      staffName: "",
    },
    validate: zodResolver(taskSchema),
  });
  return (
    <Box component="form" onSubmit={form.onSubmit(onSubmit)}>
      <Stack>
        <TextInput
          label="Vehicle Number"
          placeholder="Enter Vehicle Number here ..."
          {...form.getInputProps("vehicleNo")}
        />
        <TextInput
          label="Model"
          placeholder="Enter Vehicle Model here ..."
          {...form.getInputProps("model")}
        />
        <Group style={{ alignSelf: "end" }}>
          <Button onClick={close} variant="outline" size="sm">
            Cancel
          </Button>
          <Button loading={isLoading} type="submit" size="sm">
            Create Vehicle
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
