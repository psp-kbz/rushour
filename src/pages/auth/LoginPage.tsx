import {
  Center,
  TextInput,
  PasswordInput,
  Button,
  Box,
  Paper,
  Text,
  Container,
} from "@mantine/core";

import logo from "../../assets/images/logo/logo-no-slogan.webp";
import BgBlue from "./components/BgBlue";
import BgRed from "./components/BgRed";
import { useAuthRoute } from "@hooks/useAuth";
import { useLogin } from "./queries";
import { useForm, zodResolver } from "@mantine/form";
import { loginSchema } from "@utils/schema";
import { useScreen } from "@hooks/useScreen";

export function LoginPage() {
  useAuthRoute();
  const { mutate, isPending } = useLogin();
  const screen = useScreen();
  const mw = screen.isMobile ? 200 : 400;
  const p = screen.isMobile ? 20 : 30;
  const py = screen.isMobile ? 20 : 50;
  const mb = screen.isMobile ? 20 : 50;

  const form = useForm({
    initialValues: {
      loginId: "",
      password: "",
    },
    validate: zodResolver(loginSchema),
  });
  return (
    <Center
      w="100%"
      h="100vh"
      style={{
        position: "relative",
      }}
    >
      <BgBlue />
      <BgRed />
      <Container>
        <Paper
          withBorder
          p={p}
          py={py}
          mb={mb}
          miw={mw}
          radius="md"
          shadow="md"
          component="form"
          onSubmit={form.onSubmit((values) => mutate(values))}
        >
          <Box component="img" alt="logo" src={logo} height={50} />
          <TextInput
            mt={20}
            withAsterisk
            label="Employee ID"
            {...form.getInputProps("loginId")}
          />
          <PasswordInput
            withAsterisk
            mt="md"
            label="Password"
            {...form.getInputProps("password")}
          />

          <Button fullWidth loading={isPending} mt="xl" type="submit">
            Login
          </Button>
          <Box p="sm">
            <Text style={{ color: "dimgray", position: "relative", top: 20 }}>
              Copyright © 2024 KBZ Bank. All rights reserved.
            </Text>
          </Box>
        </Paper>
      </Container>
    </Center>
  );
}
