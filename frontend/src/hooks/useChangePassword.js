import { useRef, useState } from "react";

import axiosClient from "../services/api/axios-client";
import { useStateContext } from "../services/contexts/ContextProvider";

export default function useChangePassword() {
  const { setUser } = useStateContext();
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);
  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const newPasswordConfirmationRef = useRef();

  const onSubmit = async (ev) => {
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
        currentPasswordRef.current.value = "";
        newPasswordRef.current.value = "";
        newPasswordConfirmationRef.current.value = "";
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

  return {
    currentPasswordRef,
    newPasswordRef,
    newPasswordConfirmationRef,
    errors,
    success,
    onSubmit,
  };
}
