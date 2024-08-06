import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { encryptStorage } from "@utils/encrypt-store";

export interface PermissionState {
  permission: Permission[];
  setPermission: (Permission: Permission[]) => void;
  removePermission: () => void;
}

export const usePermissionStore = create<
  PermissionState,
  [["zustand/persist", unknown]]
>(
  persist(
    (set) => ({
      permission: [],
      setPermission: (permission) => set({ permission }),
      removePermission: () => set({ permission: [] }),
    }),
    {
      name: "permission", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => encryptStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
