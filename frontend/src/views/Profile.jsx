import { useRef, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function Profile() {
  const { user, setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);
  const nameRef = useRef();
  const emailRef = useRef();

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };

    axiosClient
      .put("/user", payload)
      .then(({ data }) => {
        setUser(data);
        setSuccess("Profile was successfully updated");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  const onDeleteClick = (user) => {
    if (!window.confirm("Are you sure you want to delete your account?")) {
      return;
    }
    axiosClient.delete("/user").then(() => {
      setUser({});
      setToken(null);
      <Navigate to="/login" />;
    });
  };

  return (
    <div>
      <h1>Profile</h1>

      {/* Profile form */}
      <form onSubmit={onSubmit}>
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
        <Button type="submit" label="Save" />
      </form>

      <Link to="/password-change">Change Password</Link>

      <button onClick={() => onDeleteClick(user)}>Delete My Account</button>

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
