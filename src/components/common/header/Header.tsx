import {
  Group,
  AppShellHeader,
  Burger,
  Menu,
  ActionIcon,
  rem,
} from "@mantine/core";
import {
  IconBuilding,
  IconLogout,
  IconUser,
  IconUserCircle,
} from "@tabler/icons-react";
import { useDrawer } from "../../../hooks/useDrawer";
import { Logo } from "../Logo";
import useLogout from "@hooks/useLogout";
import { useUserStore } from "@store/useUser";

export function RightSection() {
  const logOut = useLogout();
  const userInfo = useUserStore((state) => state.user);

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
          {userInfo?.userName}
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconBuilding style={{ width: rem(14), height: rem(14) }} />
          }
        >
          {userInfo?.branchCode}
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={
            <IconLogout style={{ width: rem(14), height: rem(14) }} />
          }
          onClick={logOut}
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
          <Logo height={35} />
        </Group>
        <RightSection />
      </Group>
    </AppShellHeader>
  );
}
