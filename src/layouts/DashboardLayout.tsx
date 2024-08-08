import { AppShell } from "@mantine/core";
import { Sidebar } from "../components/sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "../components/common/header/Header";
import { useAuthedRoute } from "@hooks/useAuth";

export function DashboardLayout() {
  useAuthedRoute();
  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 250, breakpoint: "sm" }}>
      <Header />
      <Sidebar />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
