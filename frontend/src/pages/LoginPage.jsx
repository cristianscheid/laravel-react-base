import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../services/api/axios-client.js";
import { useStateContext } from "../services/contexts/ContextProvider.jsx";
import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";
import Form from "../components/ui/Form.jsx";
import Notification from "../components/ui/Notification.jsx";

export default function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState([]);
  const { setUser, setToken } = useStateContext();

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    setErrors([]);

    axiosClient
      .post("/login", payload)
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
      <h1>Login to Your Account</h1>

      <Form onSubmit={onSubmit}>
        <Input ref={emailRef} type="email" placeholder="Email" required />
        <Input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
        />
        <Button type="submit" label="Login" />
      </Form>

      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>

      {errors.length > 0 && <Notification type="error" messages={errors} />}
    </div>
  );
}
