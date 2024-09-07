import { Link } from "react-router-dom";

import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";
import Form from "../components/ui/Form.jsx";
import Notification from "../components/ui/Notification.jsx";
import useLogin from "../hooks/useLogin.js";

export default function LoginPage() {
  const { emailRef, passwordRef, errors, onSubmit } = useLogin();

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
