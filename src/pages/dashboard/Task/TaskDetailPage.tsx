import { Flex, Paper, Box, Button, Text, Container } from "@mantine/core";
import { Details, DetailsItem } from "./components/DetailsItem";
import { useParams } from "react-router-dom";
import { EditTaskModal } from "./components/FormModal";

export function TaskDetailPage() {
  const { id } = useParams();
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
          </Flex>
          <Details>
            <DetailsItem label="Task" value={id?.toString()} />
            <DetailsItem label="SubTask" value="" />
            <DetailsItem label="Project" value="" />
          </Details>
        </Paper>
        <Paper bg="white" shadow="xs">
          <Flex
            p="md"
            align="center"
            justify="space-between"
            style={{ borderBottom: "1px solid #D9DBE9" }}
          >
            <Text fw={600} fz={18}>
              Additional Information
            </Text>
            <EditTaskModal />
            {/* <EditVehicleModal initialValues={vehicle?.data} /> */}
          </Flex>
          <Details>
            <DetailsItem label="Status" value="Completed" />
            <DetailsItem label="Complexity" value="" />
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
                <Button color="red.5" variant="subtle" onClick={() => null}>
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
