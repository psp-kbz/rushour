import { useForm, zodResolver } from "@mantine/form";
import { taskSchema } from "@utils/schema";
import { Box, Button, Grid, Group, Stack, Textarea } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { TimePickerInput } from "@components/inputs/TimePickerInput";
import { TaskNameSelect } from "@components/select/TaskNameSelect";
import { SubTaskNameSelect } from "@components/select/SubTaskNameSelect";
import { ProjectSelect } from "@components/select/ProjectSelect";
import { ComplexitySelect } from "@components/select/ComplexitySelect";
import { DepartmentSelect } from "@components/select/DepartmentSelect";
import { StatusSelect } from "@components/select/StatusSelect";
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
      subTaskName: "",
      status: "",
      complexity: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      fromTime: "9:00AM",
      toTime: "10:00AM",
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
            <ProjectSelect {...form.getInputProps("projectName")} />
          </Grid.Col>
          <Grid.Col span={6}>
            <ComplexitySelect {...form.getInputProps("complexity")} />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={6}>
            <StatusSelect {...form.getInputProps("status")} />
          </Grid.Col>
        </Grid>

        <DepartmentSelect {...form.getInputProps("departmentName")} />
        <Textarea
          placeholder="Enter Remark"
          {...form.getInputProps("remark")}
          label="Remark"
          name="Remark"
        />
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

export function EditTaskForm({
  isLoading = false,
  onSubmit,
  close,
  values,
}: FormProps) {
  const form = useForm<Task>({
    initialValues: values ?? {
      id: "",
      taskName: "",
      subTaskName: "",
      status: "",
      complexity: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      fromTime: "9:00AM",
      toTime: "10:00AM",
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
              defaultValue={form.values.fromTime}
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
            <ProjectSelect {...form.getInputProps("projectName")} />
          </Grid.Col>
          <Grid.Col span={6}>
            <ComplexitySelect {...form.getInputProps("complexity")} />
          </Grid.Col>
        </Grid>

        <DepartmentSelect {...form.getInputProps("departmentName")} />
        <Textarea
          placeholder="Enter Remark"
          {...form.getInputProps("remark")}
          label="Remark"
          name="Remark"
        />
        <Group style={{ alignSelf: "end" }}>
          <Button onClick={close} variant="outline" size="sm">
            Cancel
          </Button>
          <Button loading={isLoading} type="submit" size="sm">
            Save Changes
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
