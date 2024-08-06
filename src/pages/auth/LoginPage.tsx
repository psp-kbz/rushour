import {
  Center,
  TextInput,
  PasswordInput,
  Button,
  Box,
  Paper,
  Text,
} from "@mantine/core";

import logo from "../../assets/images/logo/logo-no-slogan.webp";
import BgBlue from "./components/BgBlue";
import BgRed from "./components/BgRed";
import { useAuthRoute } from "@hooks/useAuth";
import { useLogin } from "./queries";
import { useForm, zodResolver } from "@mantine/form";
import { loginSchema } from "@utils/schema";

export function LoginPage() {
  useAuthRoute();
  const { mutate, isPending } = useLogin();
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
      <Paper
        withBorder
        p={30}
        py={50}
        mb={50}
        miw={400}
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
      </Paper>

      <Text style={{ position: "absolute", bottom: 20, color: "dimgray" }}>
        Copyright © 2020 KBZ Bank. All rights reserved.
      </Text>

      <BgBlue />
      <BgRed />
    </Center>
  );
}
