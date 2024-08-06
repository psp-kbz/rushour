import { useEffect } from "react";
import { useAuth } from "@store/useAuth";
import { useNavigate } from "react-router-dom";
import { authedRoute } from "@config/const";

export function useAuthedRoute() {
  const navigate = useNavigate();
  const { accessToken } = useAuth();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);
}

export function useAuthRoute() {
  const navigate = useNavigate();
  const { accessToken } = useAuth();

  useEffect(() => {
    if (accessToken) {
      navigate(authedRoute);
    }
  }, [accessToken, navigate]);
}
