import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLoginPage from "../pages/AdminLoginPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import AdminPage from "../pages/AdminPage";
import ApplicationStatusPage from "../pages/ApplicationStatusPage";
import AdminViewUserPage from "../pages/AdminViewUserPage";
import { useApp } from "../context/appContext";
import HomePage from "../pages/HomePage";
import ApplicationCheckPage from "../pages/ApplicationCheckPage";

function Router() {
  const { appId } = useApp();
  return (
    <>
      <Routes>
        <Route
          path={`/admin/basvuru/${appId}`}
          element={<AdminViewUserPage />}
        />
        <Route path="basvuru-olumlu" element={<ApplicationStatusPage />} />
        <Route path={`/basvuru/${appId}`} element={<ApplicationStatusPage />} />
        <Route path="admin/basvuru-listesi" element={<AdminPage />} />
        <Route path="admin" element={<AdminLoginPage />} />
        <Route path="basvuru-olustur" element={<ApplicationFormPage />} />
        <Route path="basvuru-sorgula" element={<ApplicationCheckPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default Router;
