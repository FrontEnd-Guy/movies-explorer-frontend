import React from "react";
import "./Form.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Form({
  handleSubmit,
  disabled,
  children,
  greeting,
  buttonText,
  question,
  link,
  linkName,
  error,
}) {

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__content">
        <Link to="/">
          <Logo />
        </Link>
        <h1 className="form__title">{greeting}</h1>
        <fieldset className="form__inputs">
          {children}
        </fieldset>
      </div>
      <div className="form__options">
        <span className="form__error">{error}</span>
        <button className="form__button" type="submit" disabled={disabled}>
          {buttonText}
        </button>
        <span className="form__question">
          {question}{" "}
          <Link className="form__link" to={link}>
            {linkName}
          </Link>
        </span>
      </div>
    </form>
  );
}

export default Form;
