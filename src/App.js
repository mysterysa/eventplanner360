import React from 'react';
import Home from './components/Home';
import EventCreation from './components/EventCreation';
import VendorCoordination from './components/VendorCoordination';
import Footer from './components/Footer';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import Engagement from './components/Engagement';
import Wedding from './components/Wedding';
import Corporate from './components/Corporate';
import Artist from './components/Artist';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventcreation" element={<EventCreation />} />
          <Route path="/vendorcoordination" element={<VendorCoordination />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/corporate" element={<Corporate/>} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
  
  export default App;

