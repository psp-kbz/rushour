import axios from "axios";

export function login(value: Record<string, unknown>) {
  return axios.post("/login/accountlogin", value);
}

export function logout(value: Record<string, unknown>) {
  return axios.post("/user/logout", value);
}

export function getNewToken(value: Record<string, unknown>) {
  return axios.post("/login/refreshtoken", value);
}
