import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider.jsx";
import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [errors, setErrors] = useState(null);
  const { setUser, setToken } = useStateContext();

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    axiosClient
      .post("/signup", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
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
      <h1>Signup for free</h1>

      {/* Signup form */}
      <form onSubmit={onSubmit}>
        <Input
          ref={nameRef}
          type="text"
          placeholder="Full Name"
          required
        />
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
      </form>

      {/* Navigation message */}
      <p>
        Already registered? <Link to="/login">Sign in</Link>
      </p>

      {/* Validation errors */}
      {errors && (
        <div>
          {Object.keys(errors).map((key) => (
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>
      )}
    </div>
  );
}
