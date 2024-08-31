import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider.jsx";

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
        <input ref={nameRef} type="text" placeholder="Full Name" required />
        <input
          ref={emailRef}
          type="email"
          placeholder="Email Address"
          required
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
        />
        <input
          ref={passwordConfirmationRef}
          type="password"
          placeholder="Password Confirmation"
          required
        />
        <button type="submit">Signup</button>
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
