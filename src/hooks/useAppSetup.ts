import { useEffect, useState } from "react";
import { useAuth } from "@store/useAuth";
import axios from "axios";
import {
  setupResponseInterceptor,
  setupRequestInterceptor,
} from "@utils/axios-interceptor";

export function useAppSetup() {
  const [init, setInit] = useState(false);
  const { accessToken } = useAuth();

  useEffect(() => {
    setupRequestInterceptor();
    setupResponseInterceptor();
    setInit(true);
    return () => {
      axios.interceptors.request.clear();
    };
  }, [accessToken]);

  return init;
}
