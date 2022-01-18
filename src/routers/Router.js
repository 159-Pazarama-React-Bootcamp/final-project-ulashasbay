import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminLoginPage from '../pages/AdminLoginPage';

function Router() {
    return (
        <>
            <Routes>
                <Route path="admin" element={<AdminLoginPage />} />
            </Routes>
        </>
    )
}

export default Router
