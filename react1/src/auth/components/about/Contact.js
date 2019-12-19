import React from 'react';
import { withRouter } from 'react-router-dom'
import github from './hub.png'
import mail from './email.png'
import Contactus from './Contactus.css';


export default function Contact() {
    return (
      <div className="contact-container">
        <div className="contact">
        <h1>About Us</h1>
        <span>We are a group of junior developers   </span> <br />
       <p>  We loved to present a project that serves our country and Vision 2030 led by the Prince  Muhammad bin Salman.
         We programmed a project on museums in Riyadh to serve tourism and tourists.</p>
         <p className="we">
                  We have a strong commitment to providing quality support,
                  Please if you want to contact us: <br/>
                  <ul>
                        <li><span>Ms. Nouf:<br /><a href="mailto: nsmtroda@gmail.com"> <img src={mail} alt="github logo" height='30px' /></a>
                              <a href=" https://github.com/nouf1"><img className="git" src={github} alt="github logo" height='30px' /></a> </span> </li><br />
                        <li><span>Ms. Dalia:<br /><a href="mailto: dalia.91a@gmail.com"> <img className="mail" src={mail} alt="github logo" height='30px' /></a>
                              <a href="https://github.com/dalia-a"><img className="git" src={github} alt="github logo" height='30px' /></a>  </span></li><br />
                        <li><span>Ms. Norah:<br /><a href="mailto: no_-_no@hotmail.com"> <img src={mail} alt="github logo" height='30px' /></a>
                              <a href="https://github.com/Noury1991"><img className="git" src={github} alt="github logo" height='30px' /></a>  </span></li><br />
                  </ul>
            </p>
        </div>
        </div>
    )
  }