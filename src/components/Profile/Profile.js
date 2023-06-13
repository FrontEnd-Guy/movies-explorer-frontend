import React, { useContext, useState, useCallback } from "react";
import { CurrentUserContext } from "../../providers/CurrentUserContext";
import "./Profile.css";

function Profile() {
  const { user, setUser, handleSignOut, apiErrMsg } = useContext(CurrentUserContext);

  const [userData, setUserData] = useState({
    userName: user.name,
    userEmail: user.email,
  });

  const [errors, setErrors] = useState({
    userName: "",
    userEmail: "",
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: e.target.validationMessage,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setUser({ name: userData.userName, email: userData.userEmail });
      setIsEditMode(false);
    },
    [setUser, userData]
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
            name="userName"
            className="profile__form-input"
            value={userData.userName}
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
            name="userEmail"
            className="profile__form-input"
            value={userData.userEmail}
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
              disabled={
                Object.values(errors).some((error) => error) ||
                (userData.userName === user.name &&
                  userData.userEmail === user.email)
              }
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
