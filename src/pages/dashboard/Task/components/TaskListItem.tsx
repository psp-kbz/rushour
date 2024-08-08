import { getStatusColor } from "@components/common/StatusSection";
import { Grid, Card, Group, Box, Badge, Text } from "@mantine/core";

type ListItemProps = {
  task?: Task;
};

export function TaskListItem({ task }: ListItemProps) {
  return (
    <Grid.Col span={{ xs: 12, sm: 6, md: 4 }} key={task?.id}>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        onClick={() => null}
      >
        <Group justify="space-between">
          <Box mb="sm">
            <Text size="md" style={{ fontWeight: 700 }}>
              {task?.taskName}
            </Text>
            <Text size="sm" style={{ color: "dimgray" }}>
              {task?.subTaskName}
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
              {task?.projectName}
            </Text>
          </Box>
        </Group>

        <Box mb="sm">
          <Text size="sm" style={{ color: "dimgray" }}>
            {task?.createdAt.toString()}
          </Text>
        </Box>
        <Box mb="sm">
          <Group justify="space-between">
            <Text size="sm" style={{ color: "black" }}>
              {task?.fromTime?.toString()} - {task?.toTime?.toString()}
            </Text>
            <Badge color={getStatusColor(task?.status || "")}>
              {task?.status}
            </Badge>
          </Group>
        </Box>

        <Box>
          <Text size="sm" style={{ color: "dimgray" }}>
            Remark: {task?.remark}
          </Text>
        </Box>
      </Card>
    </Grid.Col>
  );
}
