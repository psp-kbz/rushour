import { PageLoading } from "@components/loading";
import { useAppSetup } from "@hooks/useAppSetup";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  const init = useAppSetup();

  if (!init) return <PageLoading />;
  return <Outlet />;
}
