import React from "react";
import { NavLink } from "react-router-dom";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div>
          <a
            href="https://open.spotify.com/artist/6BEnmlx54iiGEDYXS7jcN4"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaSpotify className="social-icon" />
          </a>
          <a
            href="https://music.apple.com/gd/artist/eileen-baum/1497923452"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaApple className="social-icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCsezrcwS3afG6R4kYCGEiqg"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaYoutube className="social-icon" />
          </a>
        </div>
        <div>
          <NavLink to="/impressum" className="legal">
            Impressum
          </NavLink>
          <NavLink to="/privacy" className="legal">
            Privacy Policy
          </NavLink>
          <p className="legal">Powered by Serve and Code</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
