// src/components/TaskList.tsx
import { Badge, Box, Card, Grid, Group, Text, Title } from "@mantine/core";
import { useTasks } from "@pages/dashboard/Home/hooks";
import { getStatusColor } from "@components/common/StatusSection";
import { CreateTaskModal } from "./FormModal";

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
          <Grid.Col span={{ xs: 12, sm: 6, md: 4 }} key={task.id}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group justify="space-between">
                <Box mb="sm">
                  <Text size="md" style={{ fontWeight: 700 }}>
                    {task.taskName}
                  </Text>
                  <Text size="sm" style={{ color: "dimgray" }}>
                    {task.subTaskName}
                  </Text>
                </Box>
                <Box mb="sm">
                  <Text
                    size="sm"
                    style={{
                      color: "blue",
                      fontWeight: 700,
                      alignItems: "end",
                    }}
                  >
                    {task.projectName}
                  </Text>
                </Box>
              </Group>

              <Box mb="sm">
                <Text size="sm" style={{ color: "dimgray" }}>
                  {task.createdAt.toDateString()}
                </Text>
              </Box>
              <Box mb="sm">
                <Group justify="space-between">
                  <Text size="sm" style={{ color: "black" }}>
                    {task.fromTime?.toLocaleTimeString()} -{" "}
                    {task.toTime?.toLocaleTimeString()}
                  </Text>
                  <Badge color={getStatusColor(task.status)}>
                    {task.status}
                  </Badge>
                </Group>
              </Box>

              <Box>
                <Text size="sm" style={{ color: "dimgray" }}>
                  Remark: {task.remark}
                </Text>
              </Box>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
