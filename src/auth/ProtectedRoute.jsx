import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAdminLoggedIn") === "true";
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
