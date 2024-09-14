import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Checkauth = ({ isAuthenticaion, user, children }) => {
  const location = useLocation();
  // console.log(location.pathname, isAuthenticaion, user, children);
  if (location.pathname === "/") {
    if (!isAuthenticaion) {
      return <Navigate to="/auth/login" />;
    } else {
      if (user?.role === "admin") {
        return <Navigate to="/admin/admin_dashboard" />;
      } else {
        return <Navigate to="/shop/shopping_home" />;
      }
    }
  }

  if (
    !isAuthenticaion &&
    !(
      location.pathname.includes("login") ||
      location.pathname.includes("register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  if (
    isAuthenticaion &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/admin_dashboard" />;
    } else {
      return <Navigate to="/shop/shopping_home" />;
    }
  }
  if (
    isAuthenticaion &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }
  if (
    isAuthenticaion &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/admin_dashboard" />;
  }
  return <>{children}</>;
};

export default Checkauth;
