// import cookies from "next-cookies";
// import jwtDecode from "jwt-decode";

// export const isUserLoggedIn = (ctx) => {
//   const { token } = cookies(ctx);
//   console.log(token);

//   if (!token) return false;

//   try {
//     const decodedToken = jwtDecode(token);
//     const currentTime = Date.now() / 1000;
//     if (decodedToken.exp < currentTime) {
//       return false;
//     }
//     console.log(decodedToken);
//     return true;
//   } catch (error) {
//     return false;
//   }
// };
