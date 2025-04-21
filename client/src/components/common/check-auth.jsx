// import { Navigate, useLocation } from "react-router-dom";

// function CheckAuth({ isAuthenticated, user, children }) {
//   const location = useLocation();

//   console.log(location.pathname, isAuthenticated);

//   if (location.pathname === "/") {
//     if (!isAuthenticated) {
//       return <Navigate to="/auth/login" />;
//     } else {
//       if (user?.role === "admin") {
//         return <Navigate to="/admin/dashboard" />;
//       } else {
//         return <Navigate to="/shop/home" />;
//       }
//     }
//   }

//   if (
//     !isAuthenticated &&
//     !(
//       location.pathname.includes("/login") ||
//       location.pathname.includes("/register")
//     )
//   ) {
//     return <Navigate to="/auth/login" />;
//   }

//   if (
//     isAuthenticated &&
//     (location.pathname.includes("/login") ||
//       location.pathname.includes("/register"))
//   ) {
//     if (user?.role === "admin") {
//       return <Navigate to="/admin/dashboard" />;
//     } else {
//       return <Navigate to="/shop/home" />;
//     }
//   }

//   if (
//     isAuthenticated &&
//     user?.role !== "admin" &&
//     location.pathname.includes("admin")
//   ) {
//     return <Navigate to="/unauth-page" />;
//   }

//   if (
//     isAuthenticated &&
//     user?.role === "admin" &&
//     location.pathname.includes("shop")
//   ) {
//     return <Navigate to="/admin/dashboard" />;
//   }

//   return <>{children}</>;
// }

// export default CheckAuth;



import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  const authRoutes = ["/auth/login", "/auth/register"];
  const publicShopRoutes = [
    "/shop/home",
    "/shop/listing",
    "/shop/search",
  ];
  const protectedShopRoutes = [
    "/shop/checkout",
    "/shop/account",
    "/shop/paypal-return",
    "/shop/payment-success",
  ];

  // Root route "/"
  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/shop/home" />;
    } else {
      return user?.role === "admin" ? (
        <Navigate to="/admin/dashboard" />
      ) : (
        <Navigate to="/shop/home" />
      );
    }
  }

  // If user tries to access a protected shop route without login
  if (!isAuthenticated && protectedShopRoutes.includes(location.pathname)) {
    return <Navigate to="/auth/login" state={{ from: location.pathname }} />;
  }

  // If already logged in and trying to access /auth pages
  if (
    isAuthenticated &&
    authRoutes.some((route) => location.pathname.includes(route))
  ) {
    return user?.role === "admin" ? (
      <Navigate to="/admin/dashboard" />
    ) : (
      <Navigate to="/shop/home" />
    );
  }

  // Prevent users who are not admins from accessing admin routes
  if (isAuthenticated && user?.role !== "admin" && location.pathname.startsWith("/admin")) {
    return <Navigate to="/unauth-page" />;
  }

  // Redirect non-authenticated users trying to access /admin routes
  if (!isAuthenticated && location.pathname.startsWith("/admin")) {
    return <Navigate to="/auth/login" state={{ from: location.pathname }} />;
  }

  // If the user is an admin and tries to access shopping routes, redirect them to the admin dashboard
  if (isAuthenticated && user?.role === "admin" && location.pathname.startsWith("/shop")) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;



// import { Navigate, useLocation } from "react-router-dom";

// function CheckAuth({ user, children }) {
//   const location = useLocation();

//   // Retrieve authentication status and user role from localStorage
//   const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const currentUser = user || storedUser; // Use prop user if available, otherwise use storedUser

//   const authRoutes = ["/auth/login", "/auth/register"];
//   const publicShopRoutes = [
//     "/shop/home",
//     "/shop/listing",
//     "/shop/search",
//   ];
//   const protectedShopRoutes = [
//     "/shop/checkout",
//     "/shop/account",
//     "/shop/paypal-return",
//     "/shop/payment-success",
//   ];

//   // Root route "/"
//   if (location.pathname === "/") {
//     if (!isAuthenticated) {
//       return <Navigate to="/shop/home" />;
//     } else {
//       return currentUser?.role === "admin" ? (
//         <Navigate to="/admin/dashboard" />
//       ) : (
//         <Navigate to="/shop/home" />
//       );
//     }
//   }

//   // If user tries to access a protected shop route without login
//   if (!isAuthenticated && protectedShopRoutes.includes(location.pathname)) {
//     return <Navigate to="/auth/login" state={{ from: location.pathname }} />;
//   }

//   // If already logged in and trying to access /auth pages
//   if (
//     isAuthenticated &&
//     authRoutes.some((route) => location.pathname.includes(route))
//   ) {
//     return currentUser?.role === "admin" ? (
//       <Navigate to="/admin/dashboard" />
//     ) : (
//       <Navigate to="/shop/home" />
//     );
//   }

//   // Prevent users who are not admins from accessing admin routes
//   if (isAuthenticated && currentUser?.role !== "admin" && location.pathname.startsWith("/admin")) {
//     return <Navigate to="/unauth-page" />;
//   }

//   // Redirect non-authenticated users trying to access /admin routes
//   if (!isAuthenticated && location.pathname.startsWith("/admin")) {
//     return <Navigate to="/auth/login" state={{ from: location.pathname }} />;
//   }

//   // If the user is an admin and tries to access shopping routes, redirect them to the admin dashboard
//   if (isAuthenticated && currentUser?.role === "admin" && location.pathname.startsWith("/shop")) {
//     return <Navigate to="/admin/dashboard" />;
//   }

//   return <>{children}</>;
// }

// export default CheckAuth;
