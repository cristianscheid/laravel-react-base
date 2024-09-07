import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../services/api/axios-client.js";
import { useStateContext } from "../services/contexts/ContextProvider.jsx";
import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";
import Form from "../components/ui/Form.jsx";
import Notification from "../components/ui/Notification.jsx";

export default function SignUpPage() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [errors, setErrors] = useState([]);
  const { setUser, setToken } = useStateContext();

  const onSubmit = (ev) => {
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

  return (
    <div>
      <h1>Create Your Account</h1>

      <Form onSubmit={onSubmit}>
        <Input ref={nameRef} type="text" placeholder="Full Name" required />
        <Input
          ref={emailRef}
          type="email"
          placeholder="Email Address"
          required
        />
        <Input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
        />
        <Input
          ref={passwordConfirmationRef}
          type="password"
          placeholder="Password Confirmation"
          required
        />
        <Button type="submit" label="Signup" />
      </Form>

      <p>
        Already have an account? <Link to="/login">Log in here</Link>
      </p>

      {errors.length > 0 && <Notification type="error" messages={errors} />}
    </div>
  );
}
