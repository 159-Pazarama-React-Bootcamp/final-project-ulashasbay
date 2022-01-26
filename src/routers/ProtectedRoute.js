import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// react router protected page için gerekli fonksiyon
function ProtectedRoute() {
  const appIdValue = useSelector((state) => state.appId.value);
  return appIdValue ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
