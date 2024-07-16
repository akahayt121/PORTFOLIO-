import React from 'react';
import githubIcon from '../public_img/github.png'; 
import linkedinIcon from '../public_img/linkedin.png'; 
import googleIcon from '../public_img/google.png'; 
import facebookIcon from '../public_img/facebook.png'; 
import selfieImage from '../public_img/selfie.jpg'; 
import '../style/ContactMe.css'
const ContactMe = () => {
  return (
    <div className="four_div1" id='four_div1'>
      <div className="four_div11">
        <h1>Reach Out to me!!</h1>
        <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI MY INBOX IS OPEN FOR ALL</p>
        <p>Web Developer | Linux User | Tech Writer | BCA STUDENT</p>
        <div className="location">
          <i className="fa-solid fa-location-dot"></i> Kanpur, India
        </div>
        <p>Open for opportunities: Yes</p>
        <ul className="media">
          <li>
            <a href="https://github.com/akahayt121" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub"  className='media_1'/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/akshay-tiwari-6257282b7/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className='media_1'/>
            </a>
          </li>
          <li>
            <a href="mailto:akshaytiwari2410@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={googleIcon} alt="Google" className='media_1'/>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/akahayt121" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className='media_1'/>
            </a>
          </li>
        </ul>
      </div>
      <div className="four_div12">
        <img src={selfieImage} alt="Selfie" className='selfie' />
      </div>
    </div>
  );
};

export default ContactMe;
