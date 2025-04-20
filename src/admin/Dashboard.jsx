import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div className="container py-5">
      <h2>Welcome, Admin!</h2>
      <p>You are logged in to the dashboard.</p>
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    </div>
  );
};

export default Dashboard;
