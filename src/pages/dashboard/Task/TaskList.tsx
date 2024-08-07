import { Box, Grid, Group, Title } from "@mantine/core";
import { useTasks } from "@pages/dashboard/Task/hooks";

import { CreateTaskModal } from "./components/FormModal";
import { TaskListItem } from "./components/TaskListItem";

export function TaskList() {
  const { data } = useTasks();

  return (
    <Box p="md">
      <Group justify="space-between">
        <Title order={2} mb="md">
          Tasks for Today
        </Title>
        <Box mb="sm">
          <CreateTaskModal />
        </Box>
      </Group>
      {data?.length === 0 && <p> Empty Tasks</p>}
      <Grid>
        {data?.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </Grid>
    </Box>
  );
}
