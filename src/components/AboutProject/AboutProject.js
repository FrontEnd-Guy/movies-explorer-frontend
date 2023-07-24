import React from "react";
import Headline from "../Headline/Headline";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about" id="about">
      <Headline title={"About the project"} />
      <div className="about__container">
        <div className="about__columns">
          <div className="about__column">
            <h3 className="about__title">The diploma project included 5 stages</h3>
            <p className="about__caption">
              Drawing up a plan, backend work, layout, adding
              functionality, and final refinements.
            </p>
          </div>
          <div className="about__column">
            <h3 className="about__title">
              The diploma took 5 weeks to complete
            </h3>
            <p className="about__caption">
              Each stage had a soft and hard deadline that needed to be
              complied with in order to successfully defend the project.
            </p>
          </div>
        </div>
        <div className="about__stages">
          <span className="about__stage-span about__stage-span_accent_green">
            1 week
          </span>
          <span className="about__stage-span about__stage-span_accent_grey">
            4 weeks
          </span>
          <span className="about__stage-span">Back-end</span>
          <span className="about__stage-span">Front-end</span>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
