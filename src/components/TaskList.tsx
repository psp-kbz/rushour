// src/components/TaskList.tsx
import React from "react";
import { Badge, Box, Card, Grid, Group, Text, Title } from "@mantine/core";
import { Task } from "../types/Types";

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "green";
      case "In Progress":
        return "blue";
      case "Pending":
        return "yellow";
      case "Blocked":
        return "red";
      default:
        return "gray";
    }
  };
  return (
    <Box p="md">
      <Title order={2} mb="md">
        Tasks for Today
      </Title>
      {tasks.length === 0 && <p> Empty Tasks</p>}
      <Grid>
        {tasks.map((task) => (
          <Grid.Col span={{ xs: 12, sm: 6, md: 4 }} key={task.TaskNumber}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Box mb="sm">
                <Text size="md" style={{ fontWeight: 700 }}>
                  {task.Task}
                </Text>
                <Text size="sm" style={{ color: "dimgray" }}>
                  {task.SubTask}
                </Text>
              </Box>

              <Box mb="sm">
                <Group grow wrap="nowrap">
                  <Text size="sm" style={{ color: "dimgray" }}>
                    {task.Date.toDateString()}
                  </Text>
                  <Text size="sm" style={{ color: "black" }}>
                    {task.FromTime} - {task.ToTime}
                  </Text>
                </Group>
              </Box>
              <Box mb="sm">
                <Badge color={getStatusColor(task.Status)}>{task.Status}</Badge>
              </Box>
              <Box mb="sm">
                <Text size="sm" style={{ color: "dimgray" }}>
                  Project: {task.Project}
                </Text>
              </Box>
              <Box>
                <Text size="sm" style={{ color: "dimgray" }}>
                  Remark: {task.Remark}
                </Text>
              </Box>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default TaskList;
