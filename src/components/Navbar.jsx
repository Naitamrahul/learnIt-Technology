import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



const Navbar = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isAdminLoggedIn") === "true";
    setIsAdminLoggedIn(loginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    setIsAdminLoggedIn(false);
    navigate("/admin/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <Link className="navbar-brand" to="/">RN Technology</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testimonials">Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            {!isAdminLoggedIn ? (
              <li className="nav-item">
                <Link className="btn btn-outline-light" to="/admin/login">Login</Link>
              </li>
            ) : (
              <>
                <li className="nav-item me-2">
                  <Link className="btn btn-outline-light" to="/admin/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
