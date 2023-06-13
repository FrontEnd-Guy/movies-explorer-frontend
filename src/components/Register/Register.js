import React, { useContext, useState, useCallback } from "react";
import "./Register.css";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import { CurrentUserContext } from "../../providers/CurrentUserContext";

function Register() {
  const { apiErrMsg, handleSignUp } = useContext(CurrentUserContext);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: e.target.validationMessage,
    }));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignUp(userData);
  };

  return (
    <main className="register">
      <Form
        handleSubmit={handleSubmit}
        disabled={Object.values(errors).some((error) => error)}
        greeting="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        question="Уже зарегистрированы?"
        link="/signin"
        linkName="Войти"
        error={apiErrMsg}
      >
        <FormInput
          name="name"
          title="Имя"
          type="text"
          placeholder="Ваше имя"
          required={true}
          minLength="3"
          maxLength="30"
          value={userData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FormInput
          name="email"
          title="E-mail"
          type="email"
          placeholder="Введите почту"
          required={true}
          value={userData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormInput
          name="password"
          title="Пароль"
          type="password"
          placeholder="Введите пароль"
          required={true}
          minLength="8"
          value={userData.password}
          onChange={handleChange}
          error={errors.password}
        />
      </Form>
    </main>
  );
}

export default Register;
