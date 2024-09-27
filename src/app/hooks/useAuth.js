// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   getToken,
//   getDecodedToken,
//   isTokenValid,
//   clearToken,
// } from "@/utils/tokenUtils";

// export default function useAuth(redirectOnFail = "/sign-in") {
//   const router = useRouter();
//   const [decodedToken, setDecodedToken] = useState(null);

//   useEffect(() => {
//     const token = getToken();
//     if (!token || !isTokenValid()) {
//       clearToken();
//       router.push(redirectOnFail);
//     } else {
//       setDecodedToken(getDecodedToken());
//     }
//   }, [router, redirectOnFail]);

//   return decodedToken;
// }

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getToken,
  getDecodedToken,
  isTokenValid,
  clearToken,
} from "@/utils/tokenUtils";

export default function useAuth(redirectOnFail = false) {
  const router = useRouter();
  const [decodedToken, setDecodedToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const token = getToken();
    if (!token || !isTokenValid()) {
      clearToken();
      setDecodedToken(null);
      if (redirectOnFail) {
        router.push("/sign-in");
      }
    } else {
      setDecodedToken(getDecodedToken());
    }
    setIsLoading(false);
  }, [router, redirectOnFail]);

  return { decodedToken, isLoading };
}
