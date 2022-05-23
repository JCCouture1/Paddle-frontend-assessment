import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "../styles/Navbar.css";

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
      <div>
               {/*the logo */}
          <div className='navbar'>
              <div className="logo">
                  <h1 className='logo-h1'>METRICKS</h1>
              </div>         

                {/*the navbar  links */}
             <div className={openLinks ? "nav-links-mobile" : "nav-links"}>
                <NavLink className="link" to="/github">GIT</NavLink>
                <NavLink className="link" to="/about">ABOUT US</NavLink>
                <NavLink className="link" to="/blog">BLOG</NavLink>
                <NavLink className="link" to="/"><button className='nav-button'>CONTACT US</button></NavLink>
              </div>
                 {/*we add a toggle button for the page */}
                  <button className='menu-icon' onClick={toggleNavbar}>
                      <MenuIcon />
                  </button>
        </div>
     </div>
  )
}

export default Navbar
