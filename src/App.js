import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";
import Testimonial from "./pages/Testimonial";
import SubmitTestimonial from "./pages/SubmitTestimonial";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/submit-testimonial" element={<SubmitTestimonial />} />
          <Route path="/contact" element={<Contact />} />


          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>

      </main>
      <Footer />
    </Router>
  );
}

export default App;
