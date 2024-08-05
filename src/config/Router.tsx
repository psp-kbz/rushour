import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { LoginPage } from "../pages/auth/LoginPage";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { HomePage } from "../pages/dashboard/Home/HomePage";
import { HistoryPage } from "../pages/dashboard/History/HistoryPage";
import { SettingsPage } from "../pages/dashboard/Settings/SettingsPage";

const router = createBrowserRouter([
  { path: "/", element: <RootLayout /> },
  { path: "/login", element: <LoginPage /> },
  {
    path: "/d",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/d/history",
        element: <HistoryPage />,
      },
      {
        path: "/d/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
