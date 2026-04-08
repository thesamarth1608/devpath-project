import React from 'react'
import './navbar.css'
import Logo from '../Logo/Logo'
import LogIn from '../LogIn/LogIn';
import { NavLink } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";


const Navbar = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Roadmap", path: "/#roadmap" },
    { label: "Contact", path: "/contact" },
    { label: "Article", path: "/article" },
    { label: "Tutorials", path: "/tutorial" },
  ];
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <Logo variant='navbar-logo' />
          </div>
        </div>

        <div className="nav-links">
          {navLinks.map((item, index) =>
            item.label === "Roadmap" ? (
              <HashLink
                key={index}
                smooth
                to={item.path}
                className="nav-links-path"
              >
                <div>{item.label}</div>
              </HashLink>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-links-path-active" : "nav-links-path"
                }
              >
                <div>{item.label}</div>
              </NavLink>
            )
          )}
        </div>
        <div className="user-navLink"><div className="navbar-actions"> <LogIn/> </div></div>
      </div>
    </nav>

  )
}

export default Navbar
