import { Link } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";
import Form from "../components/ui/Form.jsx";
import Notification from "../components/ui/Notification.jsx";
import useSignUp from "../hooks/useSignUp.js";

export default function SignUpPage() {
  const {
    nameRef,
    emailRef,
    passwordRef,
    passwordConfirmationRef,
    errors,
    onSubmit,
  } = useSignUp();

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
