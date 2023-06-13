import React from "react";
import "./FormInput.css";

function FormInput({
  title,
  name,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  required,
  minLength,
  maxLength,
  error,
}) {
  return (
    <label className="form-input">
      {title}
      <input
        className="form-input__field"
        name={name}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
      <span className="form-input__error">{error}</span>
    </label>
  );
}

export default FormInput;
