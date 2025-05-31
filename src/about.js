import React from "react";
import "./about.css";
import {  Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="animated-bg">
      <div className="container py-5">
         <Link to="/" className="btn-home text-black"><FontAwesomeIcon icon={faHouse}/></Link>
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="about-section p-4">
              <div className="text-center">
                <video className="animated-gif"
                autoPlay loop muted playsInline
                  src="video/The girl is doing web development.mp4" 
                  alt="video"/>  
                   </div>
        <h2 id="about" data-aos="zoom-out"  data-aos-duration="1300" data-aos-delay="300" data-aos-easing="ease-in-out"
        data-aos-once="true"> <br/> About Me :  </h2>
        <p data-aos="zoom-in"  data-aos-duration="1300" data-aos-delay="300" data-aos-easing="ease-in-out"
        data-aos-once="true" id="about-me" >  <br/>
     I'm very interested in working in the frontend field.
        I  have some projects
         <br/>  &rarr;(available on my Github)   <br/>
    &rarr;I also had experience in carrying out team projects.  <br/>
     &rarr; I implemented responsive design that can run on both desktop and mobile in my projects. <br/> <br/>
<span id="span1">Birth Date: December 2005  &#127880; <br/>
        Location: Tehran , SattarKhan &#127969; <br/>  </span> 
</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="skills-section p-4">
           <h2 className="section-title text-center mb-4">Education :</h2>
              <div className="coded-text mb-4">
<h3 className="degree">  &#9656; Bachelor's degree student in Computer Engineering, Islamic Azad University.
     <br/>     <br/>
       &#9656;MFT student in web design with Ms. Saheb Ekhtari .
     <br/>     <br/>
     &#9656;FCE language certificate and completion of all Jahad Daneshgahi language training courses

     </h3>
              </div>


        <h2 className="section-title text-center mb-4">Skills</h2>
              <div className="skills-chart">
                <SkillBar name="Html" percent={90} />
                <SkillBar name="Css" percent={90} />
                <SkillBar name="JavaScript" percent={60} />
                <SkillBar name="React" percent={45} />
                <SkillBar name="Bootstrap" percent={70} />
                <span class="badge badge-secondary mr-5">Haven't used it yet</span>
                  <SkillBar name="Git" percent={55} />
                   <span class="badge badge-secondary mr-5">New learning</span>
                   <SkillBar name="Tailwind" percent={45} />
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const SkillBar = ({ name, percent }) => {
  return (
    <div className="skill-item mb-3 ">
      <div className="d-flex justify-content-between mb-1">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>
      <div className="progress">
        <div 
          className="progress-bar " 
          style={{ width: percent + '%' }} 
          ></div>
      </div>
   </div>
  );
};

export default App;