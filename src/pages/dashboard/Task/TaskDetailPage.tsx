import { Flex, Paper, Box, Button, Text, Container } from "@mantine/core";
import { Details, DetailsItem } from "./components/DetailsItem";

export function TaskDetailPage() {
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
            <DetailsItem label="Task" value="" />
            <DetailsItem label="Model" value="" />
            <DetailsItem label="Territory" value="" />
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
            {/* <EditVehicleModal initialValues={vehicle?.data} /> */}
          </Flex>
          <Details>
            <DetailsItem label="Status" value="Available" />
            <DetailsItem label="Currency Center or Hub" value="" />
          </Details>
        </Paper>
        <Paper bg="white" shadow="xs">
          <Box p="md" style={{ borderBottom: "1px solid #D9DBE9" }}>
            <Text fw={600} fz={18}>
              Delete Vehicle
            </Text>
          </Box>
          <Details>
            <DetailsItem
              label="Delete Permanently?"
              value={
                <Button color="red.5" variant="subtle" onClick={() => null}>
                  Delete this Vehicle
                </Button>
              }
            />
          </Details>
        </Paper>
      </Flex>
    </Container>
  );
}
