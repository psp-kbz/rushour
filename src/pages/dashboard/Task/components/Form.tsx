import { useForm, zodResolver } from "@mantine/form";
import { taskSchema } from "@utils/schema";
import { Box, Button, Group, Stack } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { TimePickerInput } from "@components/inputs/TimePickerInput";
import { TaskNameSelect } from "@components/select/TaskNameSelect";
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
      taskName: "",
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
        <DatePickerInput
          withAsterisk
          label="Pick date"
          placeholder="Pick date"
          {...form.getInputProps("date")}
          value={new Date(form.values.createdAt)}
        />
        <TimePickerInput
          withAsterisk
          label="Start time"
          {...form.getInputProps("startTime")}
        />
        <TimePickerInput
          withAsterisk
          label="End time"
          {...form.getInputProps("endTime")}
        />
        <TaskNameSelect {...form.getInputProps("taskName")} />
        <Group style={{ alignSelf: "end" }}>
          <Button onClick={close} variant="outline" size="sm">
            Cancel
          </Button>
          <Button loading={isLoading} type="submit" size="sm">
            Create Task
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
