import React, { FC } from "react";

interface InputProps {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
}

const Input: FC<InputProps> = ({
  id,
  name,
  label,
  type,
  placeholder = "",
  required = false,
  helperText,
  error = false,
}) => {
  // define label classes
  const labelClasses = ["block mb-2 text-sm font-medium"];
  if (error) {
    labelClasses.push("text-red-700 dark:text-red-500");
  } else {
    labelClasses.push("text-gray-900 dark:text-white");
  }

  // define input classes
  const inputClasses = ["border text-sm rounded-lg block w-full p-2.5"];
  if (error) {
    // regular
    inputClasses.push(
      "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
    );
    // dark
    inputClasses.push(
      "dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
    );
  } else {
    // regular
    inputClasses.push(
      "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
    );
    // dark
    inputClasses.push(
      "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    );
  }

  const helperClasses = ["mt-2 text-sm"];
  if (error) {
    helperClasses.push("text-red-600 dark:text-red-500");
  } else {
    helperClasses.push("text-gray-500 dark:text-gray-400");
  }

  return (
    <div>
      <label htmlFor={id} className={labelClasses.join(" ")}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        id={id}
        className={inputClasses.join(" ")}
        placeholder={placeholder}
        required={required}
      />
      {helperText && (
        <p id="helper-text" className={helperClasses.join(" ")}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
