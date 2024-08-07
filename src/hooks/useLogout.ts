import { dispatchLogout, useAuth } from "@store/useAuth";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const logout = useAuth(dispatchLogout);
  const navigate = useNavigate();

  return () => {
    logout();
    navigate(
      {
        pathname: "/login",
      },
      {
        replace: true,
      }
    );
  };
}
