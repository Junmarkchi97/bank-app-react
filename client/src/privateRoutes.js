import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const login = JSON.parse(localStorage.getItem("isLoggedIn"));
  return login ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
