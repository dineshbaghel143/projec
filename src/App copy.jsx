import { Routes, Route } from "react-router-dom";
import Gallery from "./Gallery";
import GalleryAll from "./GalleryAll";
import ADCA from "./ADCA";
import AutoCAD from "./AutoCAD";
import ADIWA from "./ADIWA";
import BasicComputer from "./BasicComputer";
import CCPP from "./CCPP";
import CorelDraw from "./CorelDraw";
import DataEntry from "./DataEntry";
import DIOA from "./DIOA";
import GraphicDesigning from "./GraphicDesigning";
import HtmlCss from "./HtmlCss";
import Java from "./Java";
import Python from "./Python";
import JavaScript from "./JavaScript";
import Photoshop from "./Photoshop";
import TallyGST from "./TallyGST";
import Typing from "./Typing";
import WebDevelopment from "./WebDevelopment";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/gallery-all" element={<GalleryAll />} />
      <Route path="/adca" element={<ADCA />} />
      <Route path="/autocad" element={<AutoCAD />} />
      <Route path="/adiwa" element={<ADIWA />} />
      <Route path="/basic-computer" element={<BasicComputer />} />
      <Route path="/c-cpp" element={<CCPP />} />
      <Route path="/coreldraw" element={<CorelDraw />} />
      <Route path="/data-entry" element={<DataEntry />} />
      <Route path="/dioa" element={<DIOA />} />
      <Route path="/graphic-designing" element={<GraphicDesigning />} />
      <Route path="/html-css" element={<HtmlCss />} />
      <Route path="/java" element={<Java />} />
      <Route path="/python" element={<Python />} />
      <Route path="/javascript" element={<JavaScript />} />
      <Route path="/photoshop" element={<Photoshop />} />
      <Route path="/tally-gst" element={<TallyGST />} />
      <Route path="/typing" element={<Typing />} />
      <Route path="/web-development" element={<WebDevelopment />} />
    </Routes>
  );
}

export default App;
