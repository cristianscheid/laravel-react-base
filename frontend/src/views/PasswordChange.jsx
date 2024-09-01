import { useRef, useState } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function PasswordChange() {
  const { user, setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);
  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const newPasswordConfirmationRef = useRef();

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      current_password: currentPasswordRef.current.value,
      new_password: newPasswordRef.current.value,
      new_password_confirmation: newPasswordConfirmationRef.current.value,
    };

    axiosClient
      .put("/user-password", payload)
      .then(({ data }) => {
        setUser(data);
        setSuccess("Password was successfully updated");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <div>
      <h1>Password Change</h1>

      {/* Profile form */}
      <form onSubmit={onSubmit}>
        <label>
          Current Password:
          <input ref={currentPasswordRef} type="password" required />
        </label>
        <label>
          New Password:
          <input ref={newPasswordRef} type="password" required />
        </label>
        <label>
          New Password Confirmation:
          <input ref={newPasswordConfirmationRef} type="password" required />
        </label>
        <button type="submit">Save</button>
      </form>

      {/* Validation errors */}
      {errors && (
        <div>
          {Object.keys(errors).map((key) => (
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>
      )}

      {/* Success message */}
      {success && <div>{success}</div>}
    </div>
  );
}
