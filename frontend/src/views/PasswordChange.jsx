import { useRef, useState } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function PasswordChange() {
  const { setUser } = useStateContext();
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
        <Input
          ref={currentPasswordRef}
          type="password"
          label="Current Password: "
          required
        />
        <Input
          ref={newPasswordRef}
          type="password"
          label="New Password: "
          required
        />
        <Input
          ref={newPasswordConfirmationRef}
          type="password"
          label="New Password Confirmation: "
          required
        />
        <Button type="submit" label="Change Password" />
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
