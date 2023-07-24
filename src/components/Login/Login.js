import React, { useContext } from "react";
import Form from "../Form/Form";
import { CurrentUserContext } from "../../providers/CurrentUserContext";
import FormInput from "../FormInput/FormInput";
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Login() {
  const { apiErrMsg, handleSignIn, setApiErrMsg } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignIn(values)
      .then(() => resetForm())
      .catch((err) => {
        console.log(err);
        setApiErrMsg(err.message);
      });
  };

  return (
    <main className="sign-in">
      <Form
        handleSubmit={handleSubmit}
        disabled={!isValid}
        greeting="Glad to see you!"
        buttonText="Sign In"
        question="Not registered yet?"
        link="/signup"
        linkName="Register"
        error={apiErrMsg}
      >
        <FormInput
          name="email"
          title="E-mail"
          type="email"
          placeholder="Your E-mail"
          required={true}
          minLength="3"
          maxLength="30"
          value={values.email || ''}
          onChange={handleChange}
          error={errors.email || ''}
        />
        <FormInput
          name="password"
          title="Password"
          type="password"
          placeholder="Enter password"
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
