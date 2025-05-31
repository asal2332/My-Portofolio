// eslint-disable no-unused-vars
import { Link } from 'react-router-dom';
// eslint-disable-line no-unused-vars
import './contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import { faHouse} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import'aos/dist/aos.css'
import { Container, Row, Col } from "react-bootstrap";


const HomePage = () => {
  return (
    <div className="animated-bg">
      <Container className="main-content">
        <Row className="justify-content-center align-items-center">
          <Col className="text-center col-12">
           <Link to="/" className="btn-home text-black"><FontAwesomeIcon icon={faHouse}/></Link>
          
            <h1 className=" title " style={{color: "rgba(105, 206, 169, 0.88)" }}>  <br/>Contact Me </h1>

            <div className="contact-info mb-4">
              <p style={{color: "white" }}><FontAwesomeIcon icon={faGoogle} /> -mail address: khoshasal480@gmail.com </p>
            
            </div>

            
            <div className="social-links mb-4">
          <Link to="https://github.com/asal2332" className="btn-github1 text-black"><FontAwesomeIcon icon={faGithub} /></Link>
 <Link to="http://linkedin.com/in/asal-khosh-9289a2363" className="btn-linkdin2 text-black"><FontAwesomeIcon icon={faLinkedin} /></Link>
            </div>
          </Col>
        </Row>

    
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={8} className="text-center">
            <div className="video-container">
              <div className="video-placeholder">
             <video src='video/7019981_Animation_Black_3840x2160.mp4' className="animated-gif"
                autoPlay loop muted playsInline></video>
            
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;