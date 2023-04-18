import React from "react";
import SignIn from "../pages/SignIn";
import { Routes, Route } from 'react-router-dom';
import Dashboard from "../pages/dashboard";
import ExpensesList from "../pages/ExpensesList";
import SignUp from "../pages/SignUp";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn/>} exact/>
            <Route path="/signup" element={<SignUp/>} exact/>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/expensesList" element={<ExpensesList/>} />
        </Routes>
    )
}

export default AppRoutes;