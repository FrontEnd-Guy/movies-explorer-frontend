import { useState, useCallback, useEffect } from "react";

const useFormWithValidation = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateName = useCallback(
    (value) => {
      const nameRegex = /^[A-Za-z\u0400-\u04FF\s-]*$/;
      if (!nameRegex.test(value)) {
        return "Имя должно содержать только буквы, пробелы и дефис";
      } else if (value.length < 3 || value.length > 30) {
        return "Имя должно быть длиной от 3 до 30 символов";
      } else {
        return "";
      }
    },
    []
  );

  const validateEmail = useCallback(
    (value) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(value);
    },
    []
  );

  const validatePassword = useCallback(
    (value) => {
      return value.length >= 8;
    },
    []
  );

  const handleChange = useCallback((event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    let validationError = '';
    if (!value) {
      validationError = "Это поле - обязательное";
    } else if (name === 'email') {
      validationError = validateEmail(value) ? '' : 'Невалидный email';
    } else if (name === 'name') {
      validationError = validateName(value);
    } else if (name === 'password') {
      validationError = validatePassword(value) ? '' : 'Пароль должен быть не менее 8 символов';
    }

    setValues({...values, [name]: value });
    setErrors({...errors, [name]: validationError });
  }, [validateEmail, validateName, validatePassword, values, errors]);

  useEffect(() => {
    const noErrors = Object.values(errors).every((error) => error === "");
    const allValuesPresent = Object.values(values).every((value) => value.trim() !== "");

    setIsValid(noErrors && allValuesPresent);
  }, [errors, values]);

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    []
  );

  return { values, handleChange, errors, isValid, resetForm };
};

export default useFormWithValidation;
