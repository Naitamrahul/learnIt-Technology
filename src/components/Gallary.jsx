import React from 'react';
import './Gallery.css';

import gallery1 from "../assests/gallary/t1.jpeg";
import gallery2 from "../assests/gallary/t2.jpeg";
import gallery3 from "../assests/gallary/t6.jpeg";
import gallery4 from "../assests/gallary/t4.jpeg";



const Gallary = () => {
  const images = [gallery1, gallery2, gallery3, gallery4];

  return (
    <section className="gallery-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Gallery</h2>
        <div className="row">
          {images.map((img, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="gallery-img-wrapper">
                <img src={img} alt={`Gallery ${index + 1}`} className="img-fluid rounded shadow-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallary;
