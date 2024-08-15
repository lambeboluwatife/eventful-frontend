"use client";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

export function useDecodedToken() {
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          setDecodedToken(decoded);
        } catch (error) {
          console.error("Failed to decode token:", error);
        }
      }
    }
  }, []);

  return decodedToken;
}
