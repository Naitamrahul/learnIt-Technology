import React, { useState } from "react";

const SubmitTestimonial = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    feedback: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Testimonial:", formData);
    alert("Thank you for your feedback!");
    setFormData({ name: "", title: "", feedback: "", image: "" });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Submit Your Testimonial</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Your Title/Role</label>
          <input className="form-control" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Feedback</label>
          <textarea className="form-control" name="feedback" rows="4" value={formData.feedback} onChange={handleChange} required></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Profile Image URL (optional)</label>
          <input className="form-control" name="image" value={formData.image} onChange={handleChange} />
        </div>

        <button className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
};

export default SubmitTestimonial;
