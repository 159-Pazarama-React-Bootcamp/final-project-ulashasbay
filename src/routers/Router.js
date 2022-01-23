import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLoginPage from "../pages/AdminLoginPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import AdminPage from "../pages/AdminPage";
import ApplicationInfoPage from "../pages/ApplicationInfoPage";
import AdminUserInfoPage from "../pages/AdminUserInfoPage";
import HomePage from "../pages/HomePage";
import ApplicationNoCheckPage from "../pages/ApplicationNoCheckPage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";

function Router() {
  const appIdValue = useSelector((state) => state.appId.value);

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route
            path={`/admin/basvuru/${appIdValue}`}
            element={<AdminUserInfoPage />}
          />
        </Route>
        <Route path="basvuru-basarili" element={<ApplicationInfoPage />} />
        <Route
          path={`/basvuru/${appIdValue}`}
          element={<ApplicationInfoPage />}
        />
        <Route element={<PrivateRoute />}>
          <Route path="admin/basvuru-listesi" element={<AdminPage />} />
        </Route>
        <Route path="admin" element={<AdminLoginPage />} />
        <Route path="basvuru-olustur" element={<ApplicationFormPage />} />
        <Route path="basvuru-sorgula" element={<ApplicationNoCheckPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default Router;
