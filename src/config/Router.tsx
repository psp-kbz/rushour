import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { LoginPage } from "../pages/auth/LoginPage";
import { DashboardLayout } from "../layouts/DashboardLayout";

const router = createBrowserRouter([
  { path: "/", element: <RootLayout /> },
  { path: "/login", element: <LoginPage /> },
  {
    path: "/d",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
