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
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__caption">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button
            className="promo__button"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
}

export default Promo;
