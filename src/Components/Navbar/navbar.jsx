import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-scroll';
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {

  // react hooks
  const[showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">HK</div>

        <div className="desktopMenu">
            <Link activeClass="active" spy={true} offset={-100} className="listItem" to="section-home" smooth={true} duration={500} >Home</Link>
            <Link activeClass="active" spy={true} offset={-100} className="listItem" to="section-About" smooth={true} duration={500} >About</Link>
            <Link activeClass="active" spy={true} offset={-100} className="listItem" to="section-experience" smooth={true} duration={500} >Experience</Link>
            <Link activeClass="active" spy={true} offset={-100} className="listItem" to="section-projects" smooth={true} duration={500} >Projects</Link>
            <Link activeClass="active" spy={true} offset={-100} className="listItem" to="section-contact" smooth={true} duration={500} >Contact</Link>
        </div>

        {/* burger menu */}
        {/* <div className="navbar-brand">HK</div> */}
        <div className="mobMenu"> <CgMenuRightAlt className="menu-icon" onClick={()=>setShowMenu(!showMenu)} /></div>

        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass="active" spy={true} offset={-100} className="moblistItem" to="section-home" smooth={true} duration={500} onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass="active" spy={true} offset={-100} className="moblistItem" to="section-About" smooth={true} duration={500} onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass="active" spy={true} offset={-180} className="moblistItem" to="section-experience" smooth={true} duration={500} onClick={()=>setShowMenu(false)}>Experience</Link>
            <Link activeClass="active" spy={true} offset={-180} className="moblistItem" to="section-projects" smooth={true} duration={500} onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass="active" spy={true} offset={-180} className="moblistItem" to="section-contact" smooth={true} duration={500} onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
