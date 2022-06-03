import { Routes, Route, Navigate } from "react-router-dom";
import { RegisterPage, Home } from "../pages";
import Mockman from "mockman-js";
export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mock" element={<Mockman />} />
    </Routes>
  );
};
