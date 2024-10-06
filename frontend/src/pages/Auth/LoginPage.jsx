import AuthPageContainer from "../../components/AuthPageContainer.jsx";
import Button from "../../components/ui/Button.jsx";
import Form from "../../components/ui/Form.jsx";
import Input from "../../components/ui/Input.jsx";
import Notification from "../../components/ui/Notification.jsx";
import useLogin from "../../hooks/useLogin.js";

export default function LoginPage() {
  const { emailRef, passwordRef, errors, onSubmit } = useLogin();

  return (
    <AuthPageContainer
      title="Login"
      footerText="Don't have an account?"
      linkText="Sign up here"
      linkTo="/signup"
    >
      <Form onSubmit={onSubmit}>
        <Input
          ref={emailRef}
          type="email"
          label="Your email"
          placeholder="youremail@example.com"
          required
        />
        <Input
          ref={passwordRef}
          type="password"
          label="Your password"
          placeholder="Enter your password"
          required
        />
        <Button type="submit" label="Login" />
      </Form>

      {errors.length > 0 && <Notification type="error" messages={errors} />}
    </AuthPageContainer>
  );
}
