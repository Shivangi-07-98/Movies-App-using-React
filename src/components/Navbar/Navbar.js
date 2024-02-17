import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import './Navbar.scss';
import logo from './img/18pixels.png'

function Navbar() {
  const [show, handleShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [submenu1, setSubmenu1] = useState(false);
  const [submenu2, setSubmenu2] = useState(false);

  const toggleSubmenu1 = () => {
    setSubmenu1(!submenu1);
  };

  const toggleSubmenu2 = () => {
    setSubmenu2(!submenu2);
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  const transitionNavBar = () => {
    if (window.scrollY > 70) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);





  // (() => {

  //   const openNavMenu = document.querySelector(".mobile-menu"),
  //   closeNavMenu = document.querySelector(".close"),
  //   navMenu = document.querySelector(".mobile-links");

  //   openNavMenu.addEventListener("click", toggleNav);
  //   closeNavMenu.addEventListener("click", toggleNav);

  //   function toggleNav(){
  //     navMenu.classList.toggle("open");
  //   }

  // })();

  return (
    <>

      <div className='desktop'>

        <nav className={`navbar ${show ? 'app_navbar' : ''}`}>
          <div className='app_navbar-logo'>
            <img src={logo} alt="logo"></img>
          </div>


          <ul className='app_navbar-links'>
          <li className='menu'><Link to="/home" className='font-medium leading-tight text-3xl text-white inline-block mr-4'>IMDB</Link></li>

          <li className='menu'><Link to="/login" className='font-medium text-blue-500 text-xl hover:text-blue-400'>Login</Link></li>

            <li className='menu'><Link to="/home">HOME</Link></li>
            <li className='menu'><Link to="/about">ABOUT</Link></li>

            {/* Services Dropdown */}
            <div className='dropdown'>
              <li className='menu'>
                SERVICES <i class="fa-solid fa-angle-down"></i>
                <ul className='sub-menu'>
                  <li><Link to="web-design">Web Design and Development</Link></li>
                  <li><Link to="mobile-app">Mobile App Development</Link></li>
                  <li><Link to="e-commerce">E-Commerce and Retail</Link></li>
                  <li><Link to="ai-ml">Artificial Intelligence and Machine Learning</Link></li>
                  <li><Link to="custom-software">Custom Software Development</Link></li>
                  <li><Link to="enterprise-software">Enterprise Software Development</Link></li>
                </ul>
              </li>
            </div>


            <li className='menu'><Link to="/projects">PROJECTS</Link></li>
            <li className='menu'><Link to="/team">TEAM</Link></li>


            {/* Hire Us Dropdown */}
            <div className='dropdown'>
              <li className='menu'>
                HIRE US <i class="fa-solid fa-angle-down"></i>
                <ul className='sub-menu'>
                  <li><Link to="python-developers">Hire Dedicated Python Developers</Link></li>
                  <li><Link to="android-developers">Hire Dedicated Android Developers</Link></li>
                  <li><Link to="ios-developers">Hire Dedicated iOS Developers</Link></li>
                  <li><Link to="php-developers">Hire Dedicated PHP Developers</Link></li>
                  <li><Link to="e-commerce-developers">Hire Dedicated E-commerce Developers</Link></li>
                </ul>
              </li>
            </div>


            <li className='menu'><Link to="/career">CAREER</Link></li>
            <li className='menu'><Link to="/contact">CONTACT</Link></li>
          </ul>

        </nav>

      </div>

      <div className='mobile'>

        <nav className={`navbar`}>
          <div className='app_navbar-logo'>
            <img src={logo} alt="logo"></img>
          </div>

          <div className='mobile-menu' >
            <div className='icon' onClick={toggleNav}>
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
            </div>

            <div className={`overlay ${isOpen ? "active" : ""}`} onClick={toggleNav}></div>

            <ul className={`mobile-links ${isOpen ? "active" : ""}`}>
              <div className='cross' onClick={toggleNav}><i class="fa-solid fa-x"></i></div>
              <li className='menu'><Link to="/home">HOME</Link></li>
              <li className='menu'><Link to="/about">ABOUT</Link></li>

              {/* Services Dropdown */}
              <div className='dropdown'>
                <li className='menu' onClick={toggleSubmenu1}>
                  SERVICES<span><i class="fa-solid fa-angle-down"></i></span>
                  <ul className={`sub-menu1 ${submenu1 ? "active" : ""}`}>
                    <li><Link to="web-design">Web Design and Development</Link></li>
                    <li><Link to="mobile-app">Mobile App Development</Link></li>
                    <li><Link to="e-commerce">E-Commerce and Retail</Link></li>
                    <li><Link to="ai-ml">Artificial Intelligence and Machine Learning</Link></li>
                    <li><Link to="custom-software">Custom Software Development</Link></li>
                    <li><Link to="enterprise-software">Enterprise Software Development</Link></li>
                  </ul>
                </li>
              </div>


              <li className='menu'><Link to="/projects">PROJECTS</Link></li>
              <li className='menu'><Link to="/team">TEAM</Link></li>


              {/* Hire Us Dropdown */}
              <div className='dropdown'>
                <li className='menu' onClick={toggleSubmenu2}>
                  HIRE US<span><i class="fa-solid fa-angle-down"></i></span>
                  <ul className={`sub-menu2 ${submenu2 ? "active" : ""}`}>
                    <li><Link to="python-developers">Hire Dedicated Python Developers</Link></li>
                    <li><Link to="android-developers">Hire Dedicated Android Developers</Link></li>
                    <li><Link to="ios-developers">Hire Dedicated iOS Developers</Link></li>
                    <li><Link to="php-developers">Hire Dedicated PHP Developers</Link></li>
                    <li><Link to="e-commerce-developers">Hire Dedicated E-commerce Developers</Link></li>
                  </ul>
                </li>
              </div>


              <li className='menu'><Link to="/career">CAREER</Link></li>
              <li className='menu'><Link to="/contact">CONTACT</Link></li>

              {/* <div className='close' onClick={toggleNav}><i class="fa-solid fa-x"></i></div> */}
            </ul>

          </div>


        </nav>

      </div>

    </>
  );
}

export default Navbar;