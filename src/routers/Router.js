import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminLoginPage from '../pages/AdminLoginPage';
import ApplicationPage from '../pages/ApplicationPage';
import ApplicationStatusPage from '../pages/ApplicationStatusPage';

function Router() {
    return (
        <>
            <Routes>
                <Route path="admin" element={<AdminLoginPage />} />
                <Route path="basvuru-olustur" element={<ApplicationPage />} />
                <Route path="basvuru-sorgula" element={<ApplicationStatusPage />} />
            </Routes>
        </>
    )
}

export default Router
