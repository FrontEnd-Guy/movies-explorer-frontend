import { useState, useEffect, useCallback } from "react";

const useFormWithValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = useCallback((event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });

    let validationError = '';
    if (!value) {
      validationError = "Это поле - обязательное";
    } else if (name === 'email') {
      validationError = validateEmail(value) ? '' : 'Невалидный email';
    } else if (name === 'name') {
      validationError = validateName(value) ? '' : 'Имя должно содержать только буквы, пробелы и дефис';
    } else if (name === 'password') {
      validationError = value.trim() ? '' : 'Пароль не может быть пустым';
    }

    setErrors({ ...errors, [name]: validationError });
  }, [values, errors]);

  useEffect(() => {
    const isFormValid = Object.values(errors).every((error) => error === "");
    setIsValid(isFormValid);
  }, [errors]);

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    []
  );

  const validateName = useCallback(
    (value) => {
      // Регулярное выражение для проверки имени
      const nameRegex = /^[A-Za-z\u0400-\u04FF\s-]*$/;
      return nameRegex.test(value);
    },
    []
  );

  const validateEmail = useCallback(
    (value) => {
      // Регулярное выражение для проверки email
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(value);
    },
    []
  );

  return { values, handleChange, errors, isValid, resetForm, validateName, validateEmail };
};

export default useFormWithValidation;
