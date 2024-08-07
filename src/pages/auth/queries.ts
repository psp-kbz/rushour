/* eslint-disable @typescript-eslint/no-explicit-any */
import { showNotification } from "@mantine/notifications";
import { useAuth } from "@store/useAuth";
import { usePermissionStore } from "@store/usePermission";
import { useUserStore } from "@store/useUser";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authedRoute } from "@config/const";
import { login } from "@services/auth";
import { getPermission } from "@utils/auth";

export function useLogin() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const { setUser } = useUserStore();
  const { setPermission } = usePermissionStore();

  return useMutation({
    mutationFn: (data: Record<string, unknown>) =>
      login({
        login_id: data.loginId,
        password: data.password,
        service_id: import.meta.env.VITE_SERVICE_ID,
      }),
    onSuccess: (data) => {
      console.log("Success");
      const result = data.data?.Data;
      const permissions = getPermission(result?.role_info);
      // if (result?.branch_id) {
      if (result?.access_token && result?.user_name) {
        setAuth(result);
        setUser(result);
        setPermission(permissions);
        navigate(authedRoute);
      } else {
        showNotification({
          id: "login-fail",
          color: "red",
          message: data.data?.Error?.Message || "Login fail",
        });
      }
      // } else {
      //   showNotification({
      //     id: 'incomplete-setup',
      //     color: 'red',
      //     title: 'Incomplete Setup!',
      //     message: 'Reach out to admin for setup completion.',
      //   });
      // }
    },
    onError: (error: any) => {
      let message = "";
      try {
        message = error?.response?.data?.Error?.Details[0]?.ErrorDescription;
      } catch (e) {
        message = "Login Fail";
      }
      if (error?.response?.status === 409) {
        showNotification({
          id: "already-login",
          color: "red",
          title: "Already login into another device!",
          message: "Please log out from there to log in here.",
        });
      } else {
        showNotification({
          id: "auth-fail",
          message,
          color: "red",
          title: "Authorization fail",
        });
      }
    },
  });
}
