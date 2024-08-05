import { cloneElement, ReactElement } from "react";
import { PERMISSIONS } from "../../config/permissions";

interface PageProps {
  children: ReactElement;
  scopes?: string[];
  page?: string;
  errorProps?: unknown;
  RenderError?: () => JSX.Element;
}

export function PermissionsGate({
  children,
  scopes = [],
  page = "tasks",
  errorProps = null,
  RenderError = () => <></>,
}: PageProps) {
  const role = "user";
  const rolePermissions =
    PERMISSIONS[role] && PERMISSIONS[role][page] ? PERMISSIONS[role][page] : [];
  const permissionGranted = scopes.every((permission) =>
    rolePermissions.includes(permission)
  );

  if (!permissionGranted && !errorProps) return <RenderError />;

  if (!permissionGranted && errorProps)
    return cloneElement(children, { ...errorProps });

  return <>{children}</>;
}
