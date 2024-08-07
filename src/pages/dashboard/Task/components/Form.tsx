import { useForm, zodResolver } from "@mantine/form";
import { taskSchema } from "@utils/schema";
import { Box, Button, Grid, GridCol, Group, Stack } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { TimePickerInput } from "@components/inputs/TimePickerInput";
import { TaskNameSelect } from "@components/select/TaskNameSelect";
import { SubTaskNameSelect } from "@components/select/SubTaskNameSelect";
import { ProjectSelect } from "@components/select/ProjectSelect";
import { ComplexitySelect } from "@components/select/ComplexitySelect";
import { DepartmentSelect } from "@components/select/DepartmentSelect";
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
    <Box component="form" onSubmit={form.onSubmit(onSubmit)} mb="lg">
      <Stack>
        <DatePickerInput
          withAsterisk
          label="Pick date"
          placeholder="Pick date"
          {...form.getInputProps("date")}
          value={new Date(form.values.createdAt)}
        />
        <Grid>
          <Grid.Col span={6}>
            <TimePickerInput
              withAsterisk
              label="Start time"
              {...form.getInputProps("startTime")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TimePickerInput
              withAsterisk
              label="End time"
              {...form.getInputProps("endTime")}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={6}>
            <TaskNameSelect withAsterisk {...form.getInputProps("taskName")} />
          </Grid.Col>
          <Grid.Col span={6}>
            <SubTaskNameSelect
              withAsterisk
              {...form.getInputProps("subTaskName")}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={6}>
            <ProjectSelect
              withAsterisk
              {...form.getInputProps("projectName")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <ComplexitySelect
              withAsterisk
              {...form.getInputProps("complexity")}
            />
          </Grid.Col>
        </Grid>

        <DepartmentSelect {...form.getInputProps("departmentName")} />
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
