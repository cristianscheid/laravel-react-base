import { forwardRef } from "react";

const Input = forwardRef(
  ({ type, placeholder, required, label, defaultValue }, ref) => {
    return (
      <div className="input-wrapper">
        {label && <label>{label}</label>}
        <input
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={required}
          ref={ref}
        />
      </div>
    );
  }
);

export default Input;
