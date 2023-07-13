import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import { ReactComponent as SearchIcon } from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSubmit, searchTerm, isChecked, onError, isOnSavedMoviesPage }) {
  const [input, setInput] = useState(searchTerm || '');
  const [checkbox, setCheckbox] = useState(isChecked || false);
  
  useEffect(() => {
    setInput(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    setCheckbox(isChecked);
  }, [isChecked]);

  const handleCheckboxChange = () => {
    const newCheckboxState = !checkbox;
    setCheckbox(newCheckboxState);
    onSubmit(input, newCheckboxState);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input && !isOnSavedMoviesPage) {
      onError('Нужно ввести ключевое слово');
    } else {
      onError(null)
      onSubmit(input, checkbox);
    }
  };

  return (
    <section className="search">
      <div className="search__container">
        <div className="search__bar">
          <form className="search__form" onSubmit={handleSubmit}>
            <SearchIcon className="search__icon" />
            <input className="search__input" placeholder="Фильм" value={input} onChange={handleInputChange}/>
            <button className="search__button">Найти</button>
          </form>
        </div>
        <label className="search__filter">
          <FilterCheckbox checked={checkbox} onChange={handleCheckboxChange} />
          <span className="search__filter-text">Короткометражки</span>
        </label>
      </div>
      <div className="search__underline"></div>
    </section>
  );
}

export default SearchForm;
