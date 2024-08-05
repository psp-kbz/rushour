import {
  Group,
  AppShellHeader,
  Burger,
  Menu,
  ActionIcon,
  rem,
} from "@mantine/core";
import {
  IconHelicopter,
  IconLogout,
  IconMail,
  IconUser,
  IconUserCircle,
} from "@tabler/icons-react";
import { useDrawer } from "../../../hooks/useDrawer";

export function RightSection() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon size="md" variant="subtle" radius="xl">
          <IconUserCircle size={30} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>User Info</Menu.Label>
        <Menu.Item
          leftSection={<IconUser style={{ width: rem(14), height: rem(14) }} />}
        >
          User Name
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMail style={{ width: rem(14), height: rem(14) }} />}
        >
          Email
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={
            <IconLogout style={{ width: rem(14), height: rem(14) }} />
          }
          onClick={() => null}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export function Header() {
  const opened = useDrawer((state) => state.opened);
  const toggle = useDrawer((state) => state.toggle);

  return (
    <AppShellHeader p="md">
      <Group h="100%" justify="space-between">
        <Group h="100%">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <IconHelicopter size={30} />
        </Group>
        <RightSection />
      </Group>
    </AppShellHeader>
  );
}
