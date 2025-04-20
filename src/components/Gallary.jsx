import React from 'react';

const Gallery = () => {


  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Training Gallery</h2>
        <div className="row g-3">
          {["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"].map((img, i) => (
            <div className="col-md-4" key={i}>
              <div className="card border-0 shadow-sm">
                <img
                  src={`https://source.unsplash.com/600x400/?technology,code,${i}`}
                  alt="Project"
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Gallery;
