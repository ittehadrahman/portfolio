
import React, { useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () =>{
    menuRef.current.style.right = "0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right = "-350px";
  }
  return (
    <div className='navbar'>
      {/* <img src={logo} alt="logo" /> */}
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <li>
          <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
        </li>
        <li>
          <ScrollLink className={`anchor-link ${menu === "home" ? "active" : ""}`} to='home' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setMenu("home")}>
            <p>Home</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink className={`anchor-link ${menu === "about" ? "active" : ""}`} to='about' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setMenu("about")}>
            <p>Technical Skills</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink className={`anchor-link ${menu === "services" ? "active" : ""}`} to='services' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setMenu("services")}>
            <p>Services</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink className={`anchor-link ${menu === "work" ? "active" : ""}`} to='work' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setMenu("work")}>
            <p>Portfolio</p>
          </ScrollLink>
        </li>
        {/* <li>
          <ScrollLink className={`anchor-link ${menu === "contact" ? "active" : ""}`} to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setMenu("contact")}>
            <p>Contact</p>
          </ScrollLink>
        </li> */}
      </ul>
      <ScrollLink className={`nav-connect ${menu === "contact" ? "active" : ""}`} to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setMenu("contact")}>
            <p>Connect with me</p>
          </ScrollLink>
    </div>
  );
}

export default Navbar;
