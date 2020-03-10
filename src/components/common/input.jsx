import React from "react";
const Input = ({
  name,
  label,
  value,
  placeholder,
  error,
  onChange,
  labelClassName,
  inputClassName,
  autoFocus
}) => {
  return (
    <div className="form-group">
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        type="text"
        autoFocus={autoFocus}
        className={inputClassName}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
