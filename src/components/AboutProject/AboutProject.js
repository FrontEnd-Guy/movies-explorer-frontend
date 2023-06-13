import React from "react";
import Headline from "../Headline/Headline";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about" id="about">
      <Headline title={"О проекте"} />
      <div className="about__container">
        <div className="about__columns">
          <div className="about__column">
            <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
            <p className="about__caption">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about__column">
            <h3 className="about__title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about__caption">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about__stages">
          <span className="about__stage-span about__stage-span_accent_green">
            1 неделя
          </span>
          <span className="about__stage-span about__stage-span_accent_grey">
            4 недели
          </span>
          <span className="about__stage-span">Back-end</span>
          <span className="about__stage-span">Front-end</span>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
