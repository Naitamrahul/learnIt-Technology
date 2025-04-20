function CourseCard({ title, description, duration }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <div className="card-body">
          <h5 className="card-title text-primary">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="text-muted">Duration: {duration}</p>
          <a href="www.google.com" className="btn btn-outline-primary">Enroll Now</a>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
