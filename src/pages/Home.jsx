import ClientLogo from "../components/ClientLogo";
import Gallary from "../components/Gallary";
import HeroSection from "../components/HeroSection";
import Project from "../components/Project";
import Courses from "./Courses";
import Testimonial from "./Testimonial";


function Home() {
  return (
    <>
      <HeroSection />
      <Courses />
      <Project />
      <Gallary />
      <Testimonial />
      <ClientLogo />

    </>
  );
}

export default Home;
