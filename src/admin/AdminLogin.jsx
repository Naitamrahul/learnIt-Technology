import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake credentials
    if (email === "admin@learnit.com" && password === "admin123") {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Admin Login</h2>
      <form onSubmit={handleLogin} className="col-md-6 mx-auto">
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Admin Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
