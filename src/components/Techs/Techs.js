import React from "react";
import "./Techs.css";
import Headline from "../Headline/Headline";

function Techs() {
  const techs = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];

  return (
    <section className="techs">
      <Headline title={"Technologies"} />
      <div className="techs__container">
        <h3 className="techs__title">7 technologies</h3>
        <p className="techs__caption">
          During the web-development course, we have mastered technologies that we applied in
          the graduation project.
        </p>
        <ul className="techs__list">
          {techs.map((tech) => (
            <li key={tech} className="techs__list-item">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Techs;
