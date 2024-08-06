import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { SERVICE_ID } from "@config/const";
import { encryptStorage } from "@utils/encrypt-store";

export interface UserState {
  user: User | undefined;
  setUser: (user: UserResponse) => void;
  removeUser: () => void;
}

function getRoleName(roles: Record<string, string>[]) {
  let role = "";
  (roles || []).forEach((r) => {
    if (r?.service_id === SERVICE_ID) role = r?.role_code;
  });
  return role;
}

export const useUserStore = create<UserState, [["zustand/persist", unknown]]>(
  persist(
    (set) => ({
      user: undefined,
      setUser: (usr) => {
        set({
          user: {
            email: usr?.email,
            loginID: usr?.login_id,
            userName: usr?.user_name,
            branchID: usr?.branch_id,
            branchCode: usr?.branch_code,
            branchName: usr?.branch_name,
            role: getRoleName(usr?.role_info) as string,
          },
        });
      },
      removeUser: () => set({ user: undefined }),
    }),
    {
      name: "storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => encryptStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
