import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import axiosClient from "../services/api/axios-client";
import { useStateContext } from "../services/contexts/ContextProvider";

export default function useProfile() {
  const { user, setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };

    setErrors([]);
    setSuccess([]);

    axiosClient
      .put("/user", payload)
      .then(({ data }) => {
        setUser(data);
        setSuccess(["Profile was successfully updated"]);
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    setErrors([]);
    setSuccess([]);

    axiosClient
      .delete("/user")
      .then(() => {
        setUser({});
        setToken(null);
        navigate("/login");
      })
      .catch(() => {
        setErrors(["An unexpected error occurred. Please try again later."]);
      });
  };

  return {
    nameRef,
    emailRef,
    errors,
    success,
    onSubmit,
    openModal,
    closeModal,
    confirmDelete,
    user,
    isModalOpen,
  };
}
