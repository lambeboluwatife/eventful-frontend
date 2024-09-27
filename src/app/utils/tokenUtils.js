import { jwtDecode } from "jwt-decode";

export function getToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
}

export function getDecodedToken() {
  if (typeof window !== "undefined") {
    const decodedToken = localStorage.getItem("decodedToken");
    return decodedToken ? JSON.parse(decodedToken) : null;
  }
  return null;
}

export function isTokenValid() {
  const decodedToken = getDecodedToken();
  if (!decodedToken) return false;

  const currentTime = Math.floor(Date.now() / 1000);
  return decodedToken.exp >= currentTime;
}

export function saveToken(token) {
  localStorage.setItem("token", token);
  const decoded = jwtDecode(token);
  localStorage.setItem("decodedToken", JSON.stringify(decoded));
}

export function clearToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("decodedToken");
}
