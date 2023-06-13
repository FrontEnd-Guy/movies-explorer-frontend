import React from "react";
import "./Portfolio.css";
import { ReactComponent as LinkIcon } from "../../images/portfolio-link-icon.svg";

function Portfolio() {
  const portfolio = [
    {
      path: "https://frontend-guy.github.io/how-to-learn/",
      title: "Статичный сайт",
    },
    {
      path: "https://frontend-guy.github.io/russian-travel/",
      title: "Адаптивный сайт",
    },
    {
      path: "https://frontend-guy.github.io/react-mesto-auth/",
      title: "Одностраничное приложение",
    },
  ];

  return (
    <section className="portfolio">
      <h2 className="portfolio__headline">Портфолио</h2>
      <ul className="portfolio__links-list">
        {portfolio.map((item) => (
          <li className="portfolio__links-item" key={item.title}>
            <a
              className="portfolio__link"
              href={item.path}
              rel="noreferrer"
              target="_blank"
            >
              {item.title}
            </a>
            <LinkIcon />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
