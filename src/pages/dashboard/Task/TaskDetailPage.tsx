import { Flex, Paper, Box, Button, Text, Container } from "@mantine/core";
import { Details, DetailsItem } from "./components/DetailsItem";
import { useParams } from "react-router-dom";
import { EditTaskModal } from "./components/FormModal";
import { useDeleteTask, useTaskDetails } from "./hooks";

export function TaskDetailPage() {
  const { id } = useParams();
  const { data: task, isLoading } = useTaskDetails(id);
  const { mutateAsync } = useDeleteTask();

  const handleDelete = async ({ taskId }: { taskId: string }) => {
    await mutateAsync({ id: taskId });
  };
  if (isLoading) return <>Loading</>;
  return (
    <Container style={{ marginTop: 20 }}>
      <Flex direction="column" gap="md">
        <Paper bg="white" shadow="xs">
          <Flex
            p="md"
            align="center"
            justify="space-between"
            style={{ borderBottom: "1px solid #D9DBE9" }}
          >
            <Text fw={600} fz={18}>
              Detail Information
            </Text>
            <EditTaskModal initialValues={task} />
          </Flex>
          <Details>
            <DetailsItem label="Task" value={task?.taskName} />
            <DetailsItem label="SubTask" value={task?.subTaskName} />
            <DetailsItem label="Project" value={task?.projectName} />
            <DetailsItem label="Status" value={task?.status} />
            <DetailsItem label="Department" value={task?.departmentName} />
          </Details>
        </Paper>

        <Paper bg="white" shadow="xs">
          <Box p="md" style={{ borderBottom: "1px solid #D9DBE9" }}>
            <Text fw={600} fz={18}>
              Delete Task
            </Text>
          </Box>
          <Details>
            <DetailsItem
              label="Delete Permanently?"
              value={
                <Button
                  color="red.5"
                  variant="subtle"
                  onClick={() => handleDelete({ taskId: id || "" })}
                >
                  Delete this Task
                </Button>
              }
            />
          </Details>
        </Paper>
      </Flex>
    </Container>
  );
}
