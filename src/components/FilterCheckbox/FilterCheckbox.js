import React from "react";
import "./FilterCheckbox.css";
import uncheckedImage from "../../images/checkbox-unchecked.svg";
import checkedImage from "../../images/checkbox-checked.svg";

const FilterCheckbox = ({ checked, onChange }) => {
  return (
    <div onClick={onChange}>
      <img src={checked ? checkedImage : uncheckedImage} alt="checkbox" />
    </div>
  );
};

export default FilterCheckbox;
