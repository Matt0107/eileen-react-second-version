import React from "react";
import { NavLink } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div id="error">
      <h1>Page not found</h1>
      <img src="./assets/guitar.svg" alt="guitar" className="guitar-error" />
      <NavLink to="/">
        <button>Go Back To Home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
