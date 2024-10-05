import { forwardRef } from "react";

const Input = forwardRef(
  ({ type, placeholder, required, label, defaultValue }, ref) => {
    return (
      <div className="mb-5">
        {label && (
          <label className="block mb-2 text-sm font-medium text-white">
            {label}
          </label>
        )}
        <input
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={required}
          ref={ref}
          className="block w-full rounded-lg border p-2.5 text-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    );
  }
);

export default Input;
