import React, { Component } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  // scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">          
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 4
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link>
            </li>
          </ul>
        </div>
        <style jsx scope> 
        {`
        
          .nav {
            background-color: var(--off-white);
            position: sticky;
            top: 0px;
            width: 100%;
            height: 80px;
            z-index: 1000;
            box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
          }
          
          .nav-logo {
            height: 60px;
            width: 60px;
          }
          
          .nav-logo:hover {
            cursor: pointer;
          }
          
          .nav .nav-content {
            max-width: 900px;
            padding: 0rem 3rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
          }
          
          .nav-item {
            display: inline;
            margin-left: 2rem;
            color: #333;
          }
          
          .nav-item:hover {
            color: black;
            cursor: pointer;
          }
          
          .section {}
          
          .section-dark {
            background: #333;
            color: white;
          }
          
          .section-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
          }
          
          .active {
            color: blue;
          }

        `} 
      </style>
      </nav>
    );
  }
}