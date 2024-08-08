import { Container, Flex, Paper, Button, Text } from "@mantine/core";

import { Details, DetailsItem } from "./components/DetailsItem";
import useLogout from "@hooks/useLogout";
import { useUserStore } from "@store/useUser";

export function SettingsPage() {
  const logOut = useLogout();
  const userInfo = useUserStore((state) => state.user);
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
              User Information
            </Text>
          </Flex>
          <Details>
            <DetailsItem label="Name" value={userInfo?.userName} />
            <DetailsItem label="Role" value={userInfo?.role} />
            <DetailsItem label="Department" value={userInfo?.branchCode} />
          </Details>
        </Paper>

        <Paper bg="white" shadow="xs" style={{ alignSelf: "center" }}>
          <Button color="red.5" variant="subtle" onClick={logOut}>
            Logout
          </Button>
        </Paper>
      </Flex>
    </Container>
  );
}
