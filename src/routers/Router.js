import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminLoginPage from '../pages/AdminLoginPage';
import ApplicationPage from '../pages/ApplicationPage';
import ApplicationStatusPage from '../pages/ApplicationStatusPage';
import AdminPage from '../pages/AdminPage';
import ApplicationStatePage from '../pages/ApplicationStatePage';
import AdminViewUserPage from '../pages/AdminViewUserPage';
import { useApp } from "../context/appContext";
import HomePage from '../pages/HomePage';

function Router() {
    const { appId } = useApp();
    return (
        <>
            <Routes>
                <Route path={`/admin/basvuru/${appId}`} element={<AdminViewUserPage />} />
                <Route path="basvuru-olumlu" element={<ApplicationStatePage />} />
                <Route path="admin/basvuru-listesi" element={<AdminPage />} />
                <Route path="admin" element={<AdminLoginPage />} />
                <Route path="basvuru-olustur" element={<ApplicationPage />} />
                <Route path="basvuru-sorgula" element={<ApplicationStatusPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    )
}

export default Router
