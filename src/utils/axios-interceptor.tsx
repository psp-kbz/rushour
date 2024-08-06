/* eslint-disable @typescript-eslint/no-explicit-any */
import { notifications } from "@mantine/notifications";
import { useAuth } from "@store/useAuth";
import axios, { AxiosError } from "axios";
import { startsWith } from "lodash-es";

const API_URL = import.meta.env.VITE_API_URL ?? "";

export const setupResponseInterceptor = () => {
  axios.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ApiErrorResponse>) => {
      if (error?.response?.status && error?.response?.status === 401) {
        if (!error?.response?.request?.responseURL.includes("v1/login")) {
          useAuth.getState().expired();
        }
      } else {
        notifications.show({
          title: error?.response?.data?.Error?.Message ?? "Error",
          id: "error-notification",
          message:
            error?.response?.data?.Error?.Details[0]?.ErrorDescription ??
            "something went wrong",
          variant: "outlined",
          color: "red",
          autoClose: 1500,
        });
      }
      return Promise.reject(error);
    }
  );
};

export const setupRequestInterceptor = () => {
  axios.interceptors.request.use(
    (config: any) => {
      const request = { ...config };
      // for pagination and search param re-usable
      request.url += window.location.search ?? "";
      if (!startsWith(request.url, "http")) {
        request.url = `${API_URL}${request.url}`;
      }
      const token = useAuth.getState().accessToken;
      if (token)
        request.headers = {
          ...request.headers,
          Authorization: `Bearer ${token}`,
        };
      return request;
    },
    (error) => Promise.reject(error)
  );
};
