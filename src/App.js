// eslint-disable no-unused-vars
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './projects.js';
import React, { useEffect } from 'react';
import About from './about.js'
import Contact from './contact.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import'aos/dist/aos.css'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos'


function App() {
  useEffect(()=> {
    AOS.init();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <div className="animated-bg">
        <Link to="https://github.com/asal2332" className="btn-github text-black"><FontAwesomeIcon icon={faGithub} /></Link>
        <Link to="http://linkedin.com/in/asal-khosh-9289a2363" className="btn-linkdin text-black"><FontAwesomeIcon icon={faLinkedin} /></Link>
              <div  className="profile-card card">
                <h1  data-aos="zoom-in" data-aos-duration="1600"  data-aos-delay="100" data-aos-easing="ease-in-out"
        data-aos-once="true" >Hi, I'm Asal Khosh!</h1>
                <p  data-aos="zoom-in" data-aos-duration="1700"  data-aos-delay="100" data-aos-easing="ease-in-out"
        data-aos-once="true">I'm a frontend developer and computer engineering student,
                   passionate about learning and keeping my skills up to date. Check out my projects and skills!</p>
                <div className="btn-container">
                  <Link to="/projects" data-aos="slide-right"   data-aos-delay="100" data-aos-easing="ease-in-out"
        data-aos-once="true"  data-aos-duration="1600" className="btn1 text-black"> My Projects</Link>
                   <Link to="/about" data-aos="slide-right"   data-aos-delay="100" data-aos-easing="ease-in-out"
        data-aos-once="true"  data-aos-duration="1800" className="btn2  text-black">About Me</Link>
                    <Link to="/contact" data-aos="slide-right"   data-aos-delay="100" data-aos-easing="ease-in-out"
        data-aos-once="true"  data-aos-duration="2000" className="btn3  text-black">Contact Me</Link>
                </div>
              </div>
            </div>
          </div>
        } />
    
        <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    
  );
}
export default App;