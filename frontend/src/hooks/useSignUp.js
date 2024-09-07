import { useRef, useState } from "react";

import axiosClient from "../services/api/axios-client.js";
import { useStateContext } from "../services/contexts/ContextProvider.jsx";

export default function useSignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [errors, setErrors] = useState([]);
  const { setUser, setToken } = useStateContext();

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    setErrors([]);

    axiosClient
      .post("/signup", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
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
    nameRef,
    emailRef,
    passwordRef,
    passwordConfirmationRef,
    errors,
    onSubmit,
  };
}
