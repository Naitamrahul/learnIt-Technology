import CourseCard from "../components/CourseCard";

const courseList = [
  { title: "Full Stack Development", description: "Frontend & Backend using JS, React, Node.", duration: "12 Weeks" },
  { title: "C++ with DSA", description: "Master data structures and algorithms in C++.", duration: "8 Weeks" },
  { title: "Python for Data Science", description: "Data analysis, visualization, and ML basics.", duration: "10 Weeks" },
  { title: "Android Development", description: "Android and IOS Applications .", duration: "10 Weeks" },
  { title: "Robotics", description: "Ardiuno and ESP32 .", duration: "10 Weeks" },
  { title: "IOT based applications", description: "use of IOT Applications  .", duration: "10 Weeks" },
];

function Courses() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Popular Courses</h2>
      <div className="row">
        {courseList.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
