import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../Style/HeroNavbar.css";
import { serviceList } from "../data/servicesData";
import logoImg from "../Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim().length > 0) {
      const filtered = serviceList.filter(service =>
        service.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (service) => {
    navigate("/"); // Go to home/services page
    setSearchTerm("");
    setSearchResults([]);
    if (isOpen) toggleMenu();

    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={() => isOpen && toggleMenu()}>
          <div className="logo-icon">
            <img src={logoImg} alt="MML Logo" className="navbar-logo-img" />
          </div>
          <div className="logo-text">
            {/* Logo text hidden as per previous user request */}
          </div>
        </Link>

        {/* Menu & Mobile Search */}
        <div className={`menu-wrapper ${isOpen ? "open" : ""}`}>
          <div className="overlay" onClick={toggleMenu}></div>
          <ul className="menu">
            <li className="close-btn" onClick={toggleMenu}>&times;</li>

            <li className="mobile-search">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Explore"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <span className="search-icon">🔍</span>
                {searchResults.length > 0 && (
                  <ul className="search-dropdown">
                    {searchResults.map((res, i) => (
                      <li key={i} onClick={() => handleResultClick(res)}>{res}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>

            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => isOpen && toggleMenu()}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => isOpen && toggleMenu()}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => isOpen && toggleMenu()}
              >
                Contact Us
              </NavLink>
            </li>

          </ul>
        </div>

        {/* Nav Right (Desktop Search & Hamburger) */}
        <div className="nav-right">
          <div className="desktop-search">
            <div className="search-box">
              <input
                type="text"
                placeholder="Explore"
                value={searchTerm}
                onChange={handleSearch}
              />
              <span className="search-icon">🔍</span>
              {searchResults.length > 0 && (
                <ul className="search-dropdown">
                  {searchResults.map((res, i) => (
                    <li key={i} onClick={() => handleResultClick(res)}>{res}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

