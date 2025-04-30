import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gallery1 from "../assests/gallary/t1.jpeg";
import gallery2 from "../assests/gallary/t2.jpeg";
import gallery3 from "../assests/gallary/t4.jpeg";

import './Gallery.css';

const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery1, gallery2, gallery3];

  return (
    <Container className="gallery-section py-5">
      <h2 className="text-center mb-5">Our Gallery</h2>
      <Row>
        {images.map((img, idx) => (
          <Col key={idx} md={4} sm={6} className="mb-4" data-aos="zoom-in">
            <div className="gallery-img-container">
              <img src={img} alt={`Gallery ${idx + 1}`} className="img-fluid rounded shadow" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
