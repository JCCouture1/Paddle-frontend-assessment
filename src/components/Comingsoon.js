import React from 'react';
import "../styles/Comingsoon.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Comingsoon() {
  return (
    <div className='content'>
      
      <h1 className='content-h1'> SOMETHING AWESOME IS <br /> COMING SOON</h1>
      <p className='content-p'>Your all-in-one affiliate marketting tracking 
        software <span>track, automate </span> and <br />
       <span> optimize</span> your campaigns  </p>
       {/* we create the four content box */}

       <div className="content-box">
          <div className="box1">
              <h1 className="box1-h1">7</h1>
              <p className="box1-p">Days</p>
          </div>
          <div className="box1">
              <h1 className="box1-h1">24</h1>
              <p className="box1-p">Hours</p>
          </div>
          <div className="box1">
              <h1 className="box1-h1">54</h1>
              <p className="box1-p">Minutes</p>
          </div>
          <div className="box1">
              <h1 className="box1-h1">11</h1>
              <p className="box1-p">Seconds</p>
          </div>
       </div>
       <form>
           <div>
              <input type="text" className='form-input' placeholder='First Name' required />
              <input type="text" className='form-input' placeholder='Last Name' required />
          </div>
        </form>
          <div className="second-input">
              <input type="text" className='email-input' placeholder='Enter your email address...' />
              <button className='input-button'>JOIN OUR WAITING LIST</button>
          </div>

          {/* we create the footer */}

          <div className="footer"> 
              <div className='content-footer'>
                  <YouTubeIcon className='content-footer'/>
                  <FacebookIcon className='content-footer'/>
                  <LinkedInIcon className='content-footer'/>
                  <InstagramIcon className='content-footer'/>
                  <TwitterIcon className='content-footer'/>
              </div>
              <div className='footer-p'>
                  <p className="footer-p">Terms of services</p>
                  <p className='footer-span'>Privacy policy</p>
              </div>
                   <p className='copyright'>Copyright 2021 @ Peddle Technologies. ALL Rights Reserved.</p>
          </div>
       
      
    </div>
  )
}

export default Comingsoon
 