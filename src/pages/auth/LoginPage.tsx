import {
  Center,
  Card,
  Title,
  Stack,
  TextInput,
  PasswordInput,
  Button,
} from "@mantine/core";

export function LoginPage() {
  return (
    <Center h="100vh" bg="gray.2">
      <Card radius="md" style={{ width: "400px" }} withBorder p="xl">
        <Card.Section>
          <Title order={2} mb="lg">
            Daily Tracker
          </Title>
        </Card.Section>
        <Card.Section>
          <form onSubmit={() => null}>
            <Stack>
              <TextInput
                withAsterisk
                label="Employee ID"
                placeholder="Employee ID"
              />
              <PasswordInput
                withAsterisk
                label="Password"
                placeholder="Password"
                type="password"
              />
              <Button type="submit">Login</Button>
            </Stack>
          </form>
        </Card.Section>
      </Card>
    </Center>
  );
}
