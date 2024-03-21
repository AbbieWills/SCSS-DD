import React from "react";
import { Routes, Route } from "react-router-dom"; 
import {
  Home,
  About,
  Contact,
  MeetMaker,
  NotFound
} from "./pages";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/meetthemaker" element={<MeetMaker />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
