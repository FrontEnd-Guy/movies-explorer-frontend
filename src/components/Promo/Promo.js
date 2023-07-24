import React from "react";
import images from "../../utils/images";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div>
          <img
            className="promo__logo"
            src={images.landingLogo}
            alt="the globe from the words web"
          />
        </div>
        <div className="promo__text-container">
          <h1 className="promo__title">
            A study project of a Web Development student.
          </h1>
          <p className="promo__caption">
            Scroll down to find out more about this project and its creator.
          </p>
          <button
            className="promo__button"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Find out more
          </button>
        </div>
      </div>
    </section>
  );
}

export default Promo;
