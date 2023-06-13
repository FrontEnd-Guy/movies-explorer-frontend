import React, { useState } from "react";
import "./SearchForm.css";
import { ReactComponent as SearchIcon } from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="search">
      <div className="search__container">
        <div className="search__bar">
          <form className="search__form">
            <SearchIcon className="search__icon" />
            <input className="search__input" placeholder="Фильм" />
            <button className="search__button">Найти</button>
          </form>
        </div>
        <label className="search__filter">
          <FilterCheckbox checked={isChecked} onChange={handleCheckboxChange} />
          <span className="search__filter-text">Короткометражки</span>
        </label>
      </div>
      <div className="search__underline"></div>
    </section>
  );
}

export default SearchForm;
