import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import hamBtn from "./hamburger-menu.svg";

function Navbar() {
  const [showLinks, setShowLinks] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  const handleClick = () => setShowLinks(!showLinks);

  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth > 768) {
      setShowBtn(false);
      setShowLinks(true);
    } else {
      setShowBtn(true);
      setShowLinks(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowBtn(false);
      setShowLinks(true);
    } else {
      setShowBtn(true);
      setShowLinks(false);
    }
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-name">
        <div>Amara Ceresi</div>
        {showBtn && <img alt="hamburger menu" src={hamBtn} onClick={handleClick}/>}
      </div>
      {showLinks && (
        <div className="navbar-links-container">
          <Link to="/aboutme">About Me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
