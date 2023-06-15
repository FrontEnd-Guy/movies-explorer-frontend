import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CurrentUserContext = React.createContext();

const CurrentUserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "Виталий",
    email: "pochta@yandex.ru",
  });

  const [apiErrMsg, setApiErrMsg] = useState("Что-то пошло не так...");

  function handleSignOut() {
    setUser(null);
    navigate("/");
  }

  function handleSignUp(user) {
    setUser({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    navigate("/");
  }

  function handleSignIn(user) {
    setUser({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    navigate("/");
  }

  return (
    <CurrentUserContext.Provider
      value={{
        user,
        setUser,
        apiErrMsg,
        setApiErrMsg,
        handleSignOut,
        handleSignUp,
        handleSignIn,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
