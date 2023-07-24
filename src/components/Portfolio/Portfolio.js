import React from "react";
import "./Portfolio.css";
import { ReactComponent as LinkIcon } from "../../images/portfolio-link-icon.svg";

function Portfolio() {
  const portfolio = [
    {
      path: "https://frontend-guy.github.io/how-to-learn/",
      title: "Static website",
    },
    {
      path: "https://frontend-guy.github.io/russian-travel/",
      title: "Adaptive website",
    },
    {
      path: "https://frontend-guy.github.io/react-mesto-auth/",
      title: "Single-page application",
    },
  ];

  return (
    <section className="portfolio">
      <h2 className="portfolio__headline">Portfolio</h2>
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
              <LinkIcon />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
