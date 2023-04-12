import React from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "../Pages/Dashboard/dashboard";
import { LoginPage } from "../Pages/Login/login";
import { RegisterPage } from "../Pages/Register/register";

export const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    );
};
