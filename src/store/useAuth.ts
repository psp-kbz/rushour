import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { encryptStorage } from "@utils/encrypt-store";

interface AuthState {
  logout: () => void;
  expired: () => void;
  setAuth: (token: Token) => void;
  sessionExpired: boolean;
  accessToken: string | undefined;
  refreshToken: string | undefined;
}

type Token = {
  access_token: string;
  refresh_token: string;
};

export const useAuth = create<AuthState, [["zustand/persist", unknown]]>(
  persist(
    (set) => ({
      sessionExpired: false,
      accessToken: undefined,
      refreshToken: undefined,
      expired: () => set((state) => ({ ...state, sessionExpired: true })),
      setAuth: (token: Token) =>
        set(() => ({
          sessionExpired: false,
          accessToken: token?.access_token,
          refreshToken: token?.refresh_token,
        })),
      logout: () =>
        set(() => ({
          accessToken: undefined,
          refreshToken: undefined,
          sessionExpired: false,
        })),
    }),
    {
      name: "ars",
      storage: createJSONStorage(() => encryptStorage),
    }
  )
);

export const dispatchLogout = (state: AuthState) => state.logout;
