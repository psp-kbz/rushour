import { IconHistory, IconHome, IconSettings } from "@tabler/icons-react";
import { SCOPES } from "./permissions";

export const MENUS = [
  {
    label: "Home",
    icon: IconHome,
    to: "/d",
    scopes: [SCOPES.canView],
  },
  {
    label: "History",
    icon: IconHistory,
    to: "/d/history",
    scopes: [SCOPES.canView],
  },
  {
    label: "Settings",
    icon: IconSettings,
    to: "/d/settings",
    scopes: [SCOPES.canView],
  },
];
