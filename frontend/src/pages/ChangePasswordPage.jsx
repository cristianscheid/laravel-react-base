import { useRef, useState } from "react";
import axiosClient from "../services/api/axios-client";
import { useStateContext } from "../services/contexts/ContextProvider";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Form from "../components/ui/Form";
import Notification from "../components/ui/Notification";

export default function ChangePasswordPage() {
  const { setUser } = useStateContext();
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);
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

    setErrors([]);
    setSuccess([]);

    axiosClient
      .put("/change-password", payload)
      .then(({ data }) => {
        setUser(data);
        setSuccess(["Password was successfully updated"]);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(Object.values(response.data.errors).flat());
        } else {
          setErrors(["An unexpected error occurred. Please try again later."]);
        }
      });
  };

  return (
    <div>
      <h1>Change Password</h1>

      <Form onSubmit={onSubmit}>
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
      </Form>

      {errors.length > 0 && <Notification type="error" messages={errors} />}

      {success.length > 0 && <Notification type="success" messages={success} />}
    </div>
  );
}
