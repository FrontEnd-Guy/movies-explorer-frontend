import React, { useContext } from "react";
import Form from "../Form/Form";
import { CurrentUserContext } from "../../providers/CurrentUserContext";
import FormInput from "../FormInput/FormInput";
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Login() {
  const { apiErrMsg, handleSignIn } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignIn(values);
    resetForm();
  };

  return (
    <main className="sign-in">
      <Form
        handleSubmit={handleSubmit}
        disabled={!isValid}
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
          value={values.email || ''}
          onChange={handleChange}
          error={errors.email || ''}
        />
        <FormInput
          name="password"
          title="Пароль"
          type="password"
          placeholder="Введите пароль"
          required={true}
          minLength="8"
          value={values.password || ''}
          onChange={handleChange}
          error={errors.password || ''}
        />
      </Form>
    </main>
  );
}

export default Login;
