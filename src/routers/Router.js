import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLoginPage from "../pages/AdminLoginPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import AdminPage from "../pages/AdminPage";
import ApplicationStatusPage from "../pages/ApplicationStatusPage";
import AdminViewUserPage from "../pages/AdminViewUserPage";
import HomePage from "../pages/HomePage";
import ApplicationCheckPage from "../pages/ApplicationCheckPage";
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
            element={<AdminViewUserPage />}
          />
        </Route>
        <Route path="basvuru-olumlu" element={<ApplicationStatusPage />} />
        <Route
          path={`/basvuru/${appIdValue}`}
          element={<ApplicationStatusPage />}
        />
        <Route element={<PrivateRoute />}>
          <Route path="admin/basvuru-listesi" element={<AdminPage />} />
        </Route>
        <Route path="admin" element={<AdminLoginPage />} />
        <Route path="basvuru-olustur" element={<ApplicationFormPage />} />
        <Route path="basvuru-sorgula" element={<ApplicationCheckPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default Router;
