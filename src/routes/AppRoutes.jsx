import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Products from "../Pages/Products";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route
      path="/products"
      element={
        <ProtectedRoute>
          <Products />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
