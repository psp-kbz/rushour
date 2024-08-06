import {
  Divider,
  Drawer,
  NavLink,
  ScrollArea,
  Stack,
  AppShellNavbar,
  AppShellSection,
} from "@mantine/core";
import { IconLogout, IconUserCircle } from "@tabler/icons-react";
import { NavItem } from "./NavItem";
import { useScreen } from "../../hooks/useScreen";
import { useDrawer } from "../../hooks/useDrawer";
import { MENUS } from "../../config/menus";

export interface NavbarWrapperProps {
  children: React.ReactNode;
}

export function NavbarWrapper({ children }: NavbarWrapperProps) {
  const { isMobile } = useScreen();
  const opened = useDrawer((state) => state.opened);
  const close = useDrawer((state) => state.close);

  if (isMobile) {
    return (
      <Drawer
        padding="md"
        opened={opened}
        onClose={close}
        withCloseButton={false}
      >
        {children}
      </Drawer>
    );
  }

  return <AppShellNavbar>{children}</AppShellNavbar>;
}

export function Sidebar() {
  const { isMobile } = useScreen();

  return (
    <NavbarWrapper>
      <ScrollArea type="scroll">
        <AppShellSection p="sm">
          {MENUS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </AppShellSection>
      </ScrollArea>
    </NavbarWrapper>
  );
}
