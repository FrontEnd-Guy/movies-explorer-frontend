import React, { useState, useCallback, useContext } from "react";
import "./Navigation.css";
import { ReactComponent as ProfileIcon } from "../../images/profile-icon.svg";
import { ReactComponent as MenuIcon } from "../../images/menu-icon.svg";
import { ReactComponent as CloseIcon } from "../../images/close-icon.svg";
import { Link, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../providers/CurrentUserContext";

const navigationRoutes = [
  { path: "/", title: "Главная", smallScreenOnly: true },
  { path: "/movies", title: "Фильмы" },
  { path: "/saved-movies", title: "Сохраненные фильмы" },
];

function NavigationLink({ path, title, activePath, onClick }) {
  return (
    <li>
      <Link
        className={`nav__link ${
          path === activePath ? "nav__link_active" : ""
        } ${activePath === "/" ? "nav__link_white" : ""}`}
        to={path}
        onClick={onClick}
      >
        {title}
      </Link>
    </li>
  );
}

function ProfileButton({ activePath, ...props }) {
  return (
    <Link className="nav__profile" to="/profile" {...props}>
      <span className={`${activePath === "/" ? "nav__link_white" : ""}`}>
        Аккаунт
      </span>
      <ProfileIcon className="nav__profile-icon" />
    </Link>
  );
}

function Navigation() {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const activePath = location.pathname;
  const toggleMenu = useCallback(() => setToggle(!toggle), [toggle]);
  const { user } = useContext(CurrentUserContext);
  return (
    <>
      {user ? (
        <>
          <nav className="nav">
            <ul className="nav__links">
              {navigationRoutes
                .filter((route) => !route.smallScreenOnly)
                .map((route) => (
                  <NavigationLink
                    key={route.title}
                    {...route}
                    activePath={activePath}
                  />
                ))}
            </ul>
            <ProfileButton activePath={activePath} />
          </nav>

          <nav className="nav__menu">
            <MenuIcon
              className={`nav__menu-icon ${
                activePath === "/" ? "nav__menu-icon_white" : ""
              }`}
              onClick={toggleMenu}
            />
            {toggle && (
              <>
                <div className="nav__menu-overlay" onClick={toggleMenu} />
                <div className="nav__menu-curtain">
                  <CloseIcon className="nav__menu-close" onClick={toggleMenu} />
                  <ul className="nav__links">
                    {navigationRoutes.map((route) => (
                      <NavigationLink
                        key={route.title}
                        {...route}
                        activePath={activePath}
                        onClick={toggleMenu}
                      />
                    ))}
                  </ul>
                  <ProfileButton activePath={activePath} onClick={toggleMenu} />
                </div>
              </>
            )}
          </nav>
        </>
      ) : (
        <nav className="nav__auth">
          <Link className="nav__auth-signup" to="/signup">
            Регистрация
          </Link>
          <Link className="nav__auth-signin" to="/signin">
            Войти
          </Link>
        </nav>
      )}
    </>
  );
}

export default Navigation;
