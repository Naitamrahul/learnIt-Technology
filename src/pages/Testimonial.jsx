import React from "react";
import { Carousel } from "react-bootstrap";

const testimonials = [
  {
    name: "Aarav Shah",
    title: "Full Stack Developer",
    feedback: "LearnIT was a game-changer for my career!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sanya Patel",
    title: "Data Analyst",
    feedback: "Hands-on learning helped me get job-ready fast.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohit Verma",
    title: "Software Engineer",
    feedback: "Great instructors, real-world projects. Loved it!",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">What Our Students Say</h2>
      <section data-aos="fade-up">

        <Carousel>
          {testimonials.map((t, index) => (
            <Carousel.Item key={index} interval={3000}>
              <div className="d-flex flex-column align-items-center">
                <img
                  className="rounded-circle mb-3"
                  src={t.image}
                  alt={t.name}
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <h5>{t.name}</h5>
                <h6 className="text-muted">{t.title}</h6>
                <p className="mt-3 text-center" style={{ maxWidth: "600px" }}>
                  “{t.feedback}”
                </p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>




      <div className="text-center mt-4">
        <a href="/submit-testimonial" className="btn btn-outline-primary">
          Submit Your Testimonial
        </a>
      </div>
    </div>
  );
};

export default Testimonial;
