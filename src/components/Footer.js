import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div>
          <a
            href="https://open.spotify.com/artist/6BEnmlx54iiGEDYXS7jcN4"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-icon"
              src="/assets/spotify-black.svg"
              alt="Spotify icon"
            />
          </a>
          <a
            href="https://music.apple.com/gd/artist/eileen-baum/1497923452"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-icon"
              src="/assets/apple-black.svg"
              alt="Apple icon"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCsezrcwS3afG6R4kYCGEiqg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-icon"
              src="/assets/youtube-black.svg"
              alt="Youtube icon"
            />
          </a>
        </div>
        <div>
          <NavLink to="/impressum" className="legal">
            Impressum
          </NavLink>
          <NavLink to="/privacy" className="legal">
            Privacy Policy
          </NavLink>
          <p className="legal">Website by Matt - Afrotennis</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
