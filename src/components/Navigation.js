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
// const burgerMenu = document.querySelector(".burger-menu");
// const burgerMenuContent = document.querySelector(".burger-menu-content");
// const closeButton = document.querySelector(".close-button");

// burgerMenu.addEventListener("click", function () {
//   document.body.classList.toggle("burger-menu-open");
// });

// closeButton.addEventListener("click", function () {
//   document.body.classList.remove("burger-menu-open");
// });

// document.addEventListener("click", function (event) {
//   if (
//     !event.target.closest(".burger-menu") &&
//     !event.target.closest(".burger-menu-content")
//   ) {
//     document.body.classList.remove("burger-menu-open");
//   }
// });
// const title = document.querySelector(".title");

// title.addEventListener("click", function () {
//   window.location.href = "/";
// });

export default Navigation;
