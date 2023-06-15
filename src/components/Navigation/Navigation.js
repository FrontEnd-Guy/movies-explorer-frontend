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

const NavigationLink = ({ path, title, activePath, onClick }) => (
  <li>
    <Link
      className={`nav-link ${
        path === activePath ? "nav-link_active" : ""
      } ${activePath === "/" ? "nav-link_white" : ""}`}
      to={path}
      onClick={onClick}
    >
      {title}
    </Link>
  </li>
);

const NavigationLinks = ({ routes, activePath, onClick }) => (
  <ul className="nav-links">
    {routes.map((route) => (
      <NavigationLink
        key={route.title}
        {...route}
        activePath={activePath}
        onClick={onClick}
      />
    ))}
  </ul>
);

const ProfileButton = ({ activePath, ...props }) => (
  <Link className="nav-profile" to="/profile" {...props}>
    <span className={`${activePath === "/" ? "nav-profile__link_white" : ""}`}>
      Аккаунт
    </span>
    <ProfileIcon className="nav-profile__icon" />
  </Link>
);

function Navigation() {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const activePath = location.pathname;
  const toggleMenu = useCallback(() => setToggle(!toggle), [toggle]);
  const { user } = useContext(CurrentUserContext);

  return user ? (
    <>
      <nav className="nav">
        <NavigationLinks
          routes={navigationRoutes.filter((route) => !route.smallScreenOnly)}
          activePath={activePath}
        />
        <ProfileButton activePath={activePath} />
      </nav>

      <nav className="nav-menu">
        <MenuIcon
          className={`nav-menu__icon ${
            activePath === "/" ? "nav-menu__icon_white" : ""
          }`}
          onClick={toggleMenu}
        />
        {toggle && (
          <>
            <div className="nav-menu__overlay" onClick={toggleMenu} />
            <div className="nav-menu__curtain">
              <CloseIcon className="nav-menu__close" onClick={toggleMenu} />
              <NavigationLinks
                routes={navigationRoutes}
                activePath={activePath}
                onClick={toggleMenu}
              />
              <ProfileButton activePath={activePath} onClick={toggleMenu} />
            </div>
          </>
        )}
      </nav>
    </>
  ) : (
    <nav className="nav-auth">
      <Link className="nav-auth__signup" to="/signup">
        Регистрация
      </Link>
      <Link className="nav-auth__signin" to="/signin">
        Войти
      </Link>
    </nav>
  );
}

export default Navigation;
