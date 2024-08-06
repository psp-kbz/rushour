import { useEffect, useState } from "react";
import { usePermissionStore } from "@store/usePermission";

export function useAuthR(name: string, access: string) {
  const [can, isCan] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { permission } = usePermissionStore();

  useEffect(() => {
    setLoading(true);
    try {
      const index = permission.findIndex(
        (per: Permission) => per?.class_name === name
      );
      if (index === -1) isCan(false);
      const page = permission[index];
      switch (access) {
        case "r":
          isCan(page?.read_access === "1");
          break;
        case "w":
          isCan(page?.read_write_access === "1");
          break;
        default:
          isCan(false);
          break;
      }
    } catch (error) {
      isCan(false);
    }
    setLoading(false);
  }, [name, access, permission]);

  return { can, loading };
}
