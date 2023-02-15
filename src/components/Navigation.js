import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navbar">
        <div className="title">Eileen Baum</div>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/media">Media</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <div className="burger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="burger-menu-content">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/media">Media</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button className="close-button">
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
