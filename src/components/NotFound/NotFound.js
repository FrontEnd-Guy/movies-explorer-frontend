import React from "react";
import "./NotFound.css";

function NotFound() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <main className="not-found">
      <div className="not-found__info">
        <span className="not-found__number">404</span>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button className="not-found__link" onClick={handleBack}>
        Назад
      </button>
    </main>
  );
}

export default NotFound;
