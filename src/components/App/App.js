import React from "react";
import "./App.css";
import { useLocation, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import { SavedMoviesProvider } from "../../providers/SavedMoviesProvider";
import CurrentUserProvider from "../../providers/CurrentUserContext";

function App() {
  const location = useLocation();
  const headerRoutes = ["/", "/movies", "/saved-movies", "/profile"];
  const footerRoutes = ["/", "/movies", "/saved-movies"];

  return (
    <div className="app">
      <CurrentUserProvider>
        <SavedMoviesProvider>
          {headerRoutes.includes(location.pathname) && (
            <Header isLoggedIn={true} />
          )}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/movies"
              element={<ProtectedRoute element={Movies} />}
            />
            <Route
              path="/saved-movies"
              element={<ProtectedRoute element={SavedMovies} />}
            />
            <Route
              path="/profile"
              element={<ProtectedRoute element={Profile} />}
            />
          </Routes>
          {footerRoutes.includes(location.pathname) && <Footer />}
        </SavedMoviesProvider>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
