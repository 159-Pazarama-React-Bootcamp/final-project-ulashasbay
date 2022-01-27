import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../pages/Admin";
import ApplicationForm from "../pages/ApplicationForm";
import AdminApplicationList from "../pages/AdminApplicationList";
import ApplicationInfo from "../pages/ApplicationInfo";
import ApplicationSuccessful from "../pages/ApplicationSuccessful";
import AdminApplicationInfo from "../pages/AdminApplicationInfo";
import Home from "../pages/Home";
import ApplicationQuery from "../pages/ApplicationQuery";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";

function Router() {
  const appIdValue = useSelector((state) => state.appId.value);

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route
            path={`/admin/basvuru/${appIdValue}`}
            element={<AdminApplicationInfo />}
          />
        </Route>
        <Route path={`/basvuru/${appIdValue}`} element={<ApplicationInfo />} />
        <Route element={<PrivateRoute />}>
          <Route
            path="admin/basvuru-listesi"
            element={<AdminApplicationList />}
          />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="basvuru-basarili" element={<ApplicationSuccessful />} />
        </Route>
        <Route path="admin" element={<Admin />} />
        <Route path="basvuru-olustur" element={<ApplicationForm />} />
        <Route path="basvuru-sorgula" element={<ApplicationQuery />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default Router;
