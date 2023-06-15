import React from "react";
import images from "../../utils/images";
import Headline from "../Headline/Headline";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="student">
      <Headline title={"Студент"} />
      <div className="student__container">
        <div className="student__image-container">
          <img
            className="student__image"
            src={images.studentPicture}
            alt="Student"
          />
        </div>
        <div className="student__text-container">
          <h3 className="student__title">Виталий</h3>
          <span className="student__caption">Фронтенд-разработчик, 30 лет</span>
          <p className="student__bio">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по {"веб\u2011разработке"},
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="student__github-link"
            href="https://github.com/FrontEnd-Guy"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
