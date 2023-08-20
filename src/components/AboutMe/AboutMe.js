import React from "react";
import images from "../../utils/images";
import Headline from "../Headline/Headline";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="student">
      <Headline title={"Student"} />
      <div className="student__container">
        <div className="student__image-container">
          <img
            className="student__image"
            src={images.studentPicture}
            alt="Student"
          />
        </div>
        <div className="student__text-container">
          <h3 className="student__title">Pavel</h3>
          <span className="student__caption">Web developer</span>
          <p className="student__bio">
            My name is Pavel Zakharov. I'm a full-stack web developer. 
            I'm coming from CAD engineering and CNC programming background. 
            I've learned to code through various online resources and Practicum by Yandex. 
            This app was my final project at Practicum. 
            I've built both the backend and the frontend. 
            The tech stack is MERN (MongoDB, ExpressJS, React, Node).
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
