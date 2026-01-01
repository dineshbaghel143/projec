import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar.jsx";
import HeroSlider from "./HeroSlider.jsx";
import CourseTicker from "./CourseTicker.jsx";
import Courses from "./Courses.jsx";
import RegisterNow from "./RegisterNow.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import AboutUs from "./AboutUs.jsx";
import TopRated from "./TopRated.jsx";
import Associations from "./Associations.jsx";
import Contact from "./Contact.jsx";
import StatsCounter from "./StatsCounter.jsx";
import Testimonials from "./Testimonials.jsx";
import Footer from "./Footer.jsx";

import Gallery from "./Gallery.jsx";
import GalleryAll from "./GalleryAll.jsx";

/* ✅ Home Page as a component */
function Home() {
  return (
    <>
      <HeroSlider />
      <CourseTicker />
      <TopRated />
      <CourseTicker />
      <RegisterNow />
      <AboutUs />
      <CourseTicker />
      <Courses />
      <StatsCounter />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Associations />
    </>
  );
}

function App() {
  return (
    <>
      {/* Navbar & Footer stay on all pages */}
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* 🔥 GALLERY ROUTES */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery-all" element={<GalleryAll />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
