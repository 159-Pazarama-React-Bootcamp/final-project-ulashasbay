import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminLoginPage from '../pages/AdminLoginPage';
import ApplicationPage from '../pages/ApplicationPage';

function Router() {
    return (
        <>
            <Routes>
                <Route path="admin" element={<AdminLoginPage />} />
                <Route path="basvuru-olustur" element={<ApplicationPage />} />
            </Routes>
        </>
    )
}

export default Router
