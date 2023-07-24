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
          <span className="student__caption">Software Engineer, 31</span>
          <p className="student__bio">
              Originating from Russia and graduating with a major in 'System Analysis'
               from the Southern Federal University, I initially started my career as 
               a trader for a large international animal feed producer. But with the 
               changing political climate, I moved to the United States and currently 
               work as a CAD Programmer, creating digital templates in AutoCAD and 
               crafting programs for CNC machines. I further expanded my skills by 
               attending the Yandex Practicum bootcamp, where I meticulously developed 
               my web development capabilities and completed a series of rigorous 
               projects, each scrutinized by professional reviewers. Now, I'm 
               leveraging these skills to provide top-quality freelance services, 
               and I'm eager to contribute to a project startup company. 
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
