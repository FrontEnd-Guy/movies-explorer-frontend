import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainApi from "../utils/MainApi";
import AuthApi from '../utils/AuthApi';
import Preloader from "../components/Preloader/Preloader";

export const CurrentUserContext = React.createContext(null);

const CurrentUserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiErrMsg, setApiErrMsg] = useState(null);

  useEffect(() => {
    setApiErrMsg(null);
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.getUser(jwt)
        .then((data) => {
          setUser(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          navigate("/signin");
        });
    } else {
      setIsLoading(false);
    }
  }, [navigate]);

  function handleSignOut() {
    setUser(null);
    setApiErrMsg(null);
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchTerm');
    localStorage.removeItem('isChecked');
    navigate("/");
  }

  const handleSignUp = useCallback(
    async (data) => {
      try {
        setApiErrMsg(null);
        await AuthApi.signUp(data);
        const { token } = await AuthApi.signIn({
          email: data.email,
          password: data.password
        });
        localStorage.setItem("jwt", token);
        setUser(data);
        setApiErrMsg(null);
        navigate("/movies");
      } catch (err) {
        console.log(err);
        setApiErrMsg(err.message);
        console.log(apiErrMsg);
      }
    },
    [navigate]
  );

  const handleSignIn = useCallback(
    async (data) => {
      setApiErrMsg(null);
      try {
        const { token } = await AuthApi.signIn(data);
        localStorage.setItem("jwt", token);
        MainApi.getUser(token)
          .then((userData) => {
            setUser(userData);
            setApiErrMsg(null);
            navigate("/movies");
          })
          .catch((err) => console.log(err));
      } catch (err) {
        setApiErrMsg(err.message);
        console.log(err);
      }
    },
    [navigate]
  );  

  if (isLoading) {
    return <Preloader />;
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
