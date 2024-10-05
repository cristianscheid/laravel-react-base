import { forwardRef } from "react";

const Input = forwardRef(
  ({ type, placeholder, required, label, defaultValue }, ref) => {
    return (
      <div className="mb-5">
        {label && (
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label}
          </label>
        )}
        <input
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={required}
          ref={ref}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      </div>
    );
  }
);

export default Input;
