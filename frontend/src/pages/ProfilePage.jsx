import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../services/api/axios-client";
import { useStateContext } from "../services/contexts/ContextProvider";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Form from "../components/ui/Form";
import Notification from "../components/ui/Notification";

export default function ProfilePage() {
  const { user, setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();

  const onSubmit = (ev) => {
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

  const onDeleteClick = () => {
    if (!window.confirm("Are you sure you want to delete your account?")) {
      return;
    }
    axiosClient.delete("/user").then(() => {
      setUser({});
      setToken(null);
      navigate("/login");
    });
  };

  return (
    <div>
      <h1>Profile</h1>

      <Form onSubmit={onSubmit}>
        <Input
          ref={nameRef}
          type="text"
          label="Full Name: "
          defaultValue={user.name}
          required
        />
        <Input
          ref={emailRef}
          type="email"
          label="Email: "
          defaultValue={user.email}
          required
        />
        <Button type="submit" label="Save Changes" />
      </Form>

      <Button onClick={onDeleteClick} label="Delete Account" />

      {errors.length > 0 && <Notification type="error" messages={errors} />}

      {success.length > 0 && <Notification type="success" messages={success} />}
    </div>
  );
}
