import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </span>
      <div className="footer__info">
        <span className="footer__copyright">
          &copy; {new Date().getFullYear()}
        </span>
        <ul className="footer__links">
          <li>
            <a
              className="footer__link"
              href="https://practicum.com"
              rel="noreferrer"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://github.com/FrontEnd-Guy/movies-explorer-frontend"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
