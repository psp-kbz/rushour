import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { LoginPage } from "../pages/auth/LoginPage";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { HomePage } from "../pages/dashboard/Home/HomePage";
import { HistoryPage } from "../pages/dashboard/History/HistoryPage";
import { SettingsPage } from "../pages/dashboard/Settings/SettingsPage";
import { TaskDetailPage } from "@pages/dashboard/Task/TaskDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
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
            path: "history",
            children: [
              {
                index: true,
                element: <HistoryPage />,
              },
              {
                path: ":id",
                element: <TaskDetailPage />,
              },
            ],
          },
          {
            path: "/d/settings",
            element: <SettingsPage />,
          },
        ],
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
