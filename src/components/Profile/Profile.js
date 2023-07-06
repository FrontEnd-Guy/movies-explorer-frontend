import React, { useContext, useEffect, useState, useCallback } from "react";
import { CurrentUserContext } from "../../providers/CurrentUserContext";
import MainApi from "../../utils/MainApi";
import "./Profile.css";
import useFormWithValidation from '../../hooks/useFormWithValidation'; 

function Profile() {
  const { user, setUser, handleSignOut, apiErrMsg, setApiErrMsg } = useContext(CurrentUserContext);

  const [isEditMode, setIsEditMode] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    if (user) {
      resetForm({
        name: user.name,
        email: user.email,
      }, {}, false);
    }
  }, [user, resetForm]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      
      if (!values.name || !values.email) {
        setApiErrMsg("Both fields are required");
        return;
      }

      MainApi.updateUser(values)
        .then((data) => {
          setUser({ name: data.name, email: data.email });
          setIsEditMode(false);
        })
        .catch((error) => {
          setApiErrMsg(error.message);
        });
    },
    [setUser, values]
  );

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, {user.name}!</h1>
      <form
        id="profile__form"
        className="profile__form"
        onSubmit={handleSubmit}
      >
        <label className="profile__form-label">
          Имя
          <input
            name="name"
            className="profile__form-input"
            value={values.name || ''}
            disabled={!isEditMode}
            onChange={handleChange}
            required
            minLength="3"
            maxLength="30"
            type="text"
          />
        </label>
        <div className="profile__separator" />
        <label className="profile__form-label">
          E-mail
          <input
            name="email"
            className="profile__form-input"
            value={values.email || ''}
            disabled={!isEditMode}
            onChange={handleChange}
            required
            type="email"
          />
        </label>
      </form>
      <div className="profile__buttons">
        {isEditMode ? (
          <>
            <span className="profile__error">{apiErrMsg}</span>
            <button
              className="profile__save-button"
              disabled={!isValid || (values.name === user.name && values.email === user.email)}
              type="submit"
              form="profile__form"
            >
              Cохранить
            </button>
          </>
        ) : (
          <>
            <button
              className="profile__button"
              onClick={() => setIsEditMode(true)}
            >
              Редактировать
            </button>
            <button className="profile__button" onClick={handleSignOut}>
              Выйти из аккаунта
            </button>
          </>
        )}
      </div>
    </main>
  );
}

export default Profile;


