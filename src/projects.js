// eslint-disable no-unused-vars
import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';
// eslint-disable-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    const Projects = [
        {
id : 1 ,
title : 'Bakery-Project'  ,
image: 'img/direct-view-glass-bright-delicious-600nw-2014355195.webp' ,
skills: [ "JavaScript" , "Html Css" ] ,
Link: "#"
        },
        {
id : 2 ,
title : 'Rona Company' ,
image: 'img/sincere-laugh-showing-picture-smartphone-casual-meeting-with-best-friends-restaurant-terrace.jpg',
skills: [ "JavaScript" , "BootStrap", "Html Css"]  ,
Link: "https://rona-company.netlify.app/"
        } ,
        {
            id : 1 ,
title : 'New Project' ,
image: 'img/istockphoto-1221240925-612x612.jpg' , 
skills: [ "Coming" , "Soon" , "..."] ,
Link: "#"
        }

    ] ;
    
    

    return (  
    <div className="animated-bg">
    <div className="projects-container"> 
      <Link to="/" className="btn-home text-black"><FontAwesomeIcon icon={faHouse}/></Link>
         
      <h2  data-aos="zoom-out"  data-aos-duration="1300" data-aos-delay="300" data-aos-easing="ease-in-out"
        data-aos-once="true"   className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {Projects.map((project) => (
          <div key={project.id}  data-aos="slide-right"  data-aos-duration="1300" data-aos-easing="ease-in-out"
        data-aos-once="true"   className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <div className="project-skills">
              {project.skills.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
            <a href="https://rona-company.netlify.app/" className="project-link">See preview</a>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Projects;




