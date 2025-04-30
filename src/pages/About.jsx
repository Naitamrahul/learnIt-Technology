import React from 'react';
import './AboutUs.css';
import directorImg from "../assests/gallary/t2.jpeg"; // Adjust the path as necessary
import team1 from "../assests/gallary/t1.jpeg";
import team2 from "../assests/gallary/t1.jpeg";
import team3 from "../assests/gallary/t1.jpeg";
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5 aboutus-page">
      <h1 className="text-center mb-4">About RN Technology</h1>

      <section className="mb-5">
        <p>
          RN Technology is a forward-thinking IT training and development company focused on bridging the gap between education and industry. Our training modules are built to equip individuals and organizations with future-ready technology skills in areas like full-stack development, AI, data analytics, cloud, and cybersecurity.
        </p>
      </section>

      <Row className="vision-mission mb-5">
        <Col md={6}>
          <h3>Our Vision</h3>
          <p>To be the global leader in tech skill development and drive innovation through quality education and mentorship.</p>
        </Col>
        <Col md={6}>
          <h3>Our Mission</h3>
          <p>To empower learners with modern IT tools and real-world knowledge, nurturing a skilled workforce that contributes to technological advancement.</p>
        </Col>
      </Row>

      <section className="director-section mb-5">
        <h2 className="text-center mb-4">Meet Our Director</h2>
        <Row className="align-items-center">
          <Col md={4}>
            <img src={directorImg} alt="Director" className="img-fluid rounded shadow" />
          </Col>
          <Col md={8}>
            <h4>Mr. Rahul Naitam</h4>
            <p>Mr. Rahul Naitam, the visionary behind RN Technology, brings over 8+ years of experience in education and corporate training. He founded the company to merge academic integrity with practical tech skills. His passion lies in creating opportunities for youth through quality IT education.</p>
          </Col>
        </Row>
      </section>

      <section className="team-section">
        <h2 className="text-center mb-4">Our Expert Team</h2>
        <Row>
          {[{ img: team1, name: 'Aman Verma', role: 'Full-Stack Trainer' },
          { img: team2, name: 'Sneha Roy', role: 'Data Science Expert' },
          { img: team3, name: 'Rahul Mehta', role: 'Cloud Instructor' }]
            .map((member, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <Card className="text-center h-100 shadow">
                  <Card.Img variant="top" src={member.img} style={{ height: '250px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>{member.role}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </section>
    </Container>
  );
};

export default About;
