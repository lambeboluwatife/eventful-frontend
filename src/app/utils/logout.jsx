import { useRouter } from "next/router";

export const logout = () => {
  document.cookie = "token=; Max-Age=0; path=/";
  const router = useRouter();
  router.push("/login");
};
