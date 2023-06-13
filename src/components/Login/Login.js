import React, { useContext, useState, useCallback } from "react";
import Form from "../Form/Form";
import { CurrentUserContext } from "../../providers/CurrentUserContext";
import FormInput from "../FormInput/FormInput";

function Login() {
  const { apiErrMsg, handleSignIn } = useContext(CurrentUserContext);

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
    handleSignIn(userData);
  };

  return (
    <main className="sign-in">
      <Form
        handleSubmit={handleSubmit}
        greeting="Рады видеть!"
        buttonText="Войти"
        question="Ещё не зарегистрированы?"
        link="/signup"
        linkName="Регистрация"
        error={apiErrMsg}
      >
        <FormInput
          name="email"
          title="E-mail"
          type="email"
          placeholder="Ваш E-mail"
          required={true}
          minLength="3"
          maxLength="30"
          value={userData.name}
          onChange={handleChange}
          error={errors.name}
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

export default Login;
