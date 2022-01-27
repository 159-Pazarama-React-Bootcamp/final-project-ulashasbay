import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// react router private page için gerekli fonksiyon
function PrivateRoute() {
  const isLoggedInValue = useSelector((state) => state.isLoggedIn.value);
  return isLoggedInValue ? <Outlet /> : <Navigate to="/admin" />;
}

export default PrivateRoute;
