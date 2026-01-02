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
import BasicComputer from "./BasicComputer.jsx";
import ADCA from "./ADCA.jsx";
import Typing from "./Typing.jsx";
import DIOA from "./DIOA.jsx";
import TallyGST from "./TallyGst.jsx";
import WebDevelopment from "./WebDevelopment.jsx";
import HtmlCss from "./HtmlCss.jsx";
import Java from "./java.jsx";
import JavaScript from "./JavaScript.jsx";
import Python from "./Python.jsx";
import GraphicDesigning from "./GraphicDesigning.jsx";
import Photoshop from "./Photoshop.jsx";
import CorelDraw from "./CorelDraw.jsx";
import CCPP from "./CCPP.jsx";
import DataEntry from "./DataEntry.jsx";
import ADIWA from "./ADIWA.jsx";
import AutoCAD from "./AutoCAD.jsx";



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

        {/* COURSES */}
        <Route path="/courses/basic-computer" element={<BasicComputer />} />
        <Route path="/courses/adca" element={<ADCA />} />
        <Route path="/courses/typing" element={<Typing />} />
        <Route path="/courses/adiwa" element={<ADIWA />} />
        <Route path="/courses/dioa" element={<DIOA />} />
        <Route path="/courses/dca" element={<DIOA />} />
        <Route path="/courses/tally-gst" element={<TallyGST />} />
        <Route path="/courses/html-css" element={<HtmlCss />} />

        {/* ===== OTHER COURSES (NAVBAR ONLY) ===== */}
        <Route path="/courses/web-development" element={<WebDevelopment />} />
        <Route path="/courses/java" element={<Java />} />
        <Route path="/courses/javascript" element={<JavaScript />} />
        <Route path="/courses/python" element={<Python />} />
        <Route path="/courses/graphic-design" element={<GraphicDesigning />} />
        <Route path="/courses/autocad" element={<AutoCAD />} />
        <Route path="/courses/photoshop" element={<Photoshop />} />
        <Route path="/courses/corel-draw" element={<CorelDraw />} />
        <Route path="/courses/c-cpp" element={<CCPP />} />
        <Route path="/courses/data-entry" element={<DataEntry />} />

        {/* 🔥 GALLERY ROUTES */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery-all" element={<GalleryAll />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
