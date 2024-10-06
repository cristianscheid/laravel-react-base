import AuthPageContainer from "../../components/AuthPageContainer.jsx";
import Button from "../../components/ui/Button.jsx";
import Form from "../../components/ui/Form.jsx";
import Input from "../../components/ui/Input.jsx";
import Notification from "../../components/ui/Notification.jsx";
import useSignUp from "../../hooks/useSignUp.js";

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
    <AuthPageContainer
      title="Signup"
      footerText="Already have an account?"
      linkText="Log in here"
      linkTo="/login"
    >
      <Form onSubmit={onSubmit}>
        <Input
          ref={nameRef}
          type="text"
          label="Full Name"
          placeholder="Enter your full name"
          required
        />
        <Input
          ref={emailRef}
          type="email"
          label="Email address"
          placeholder="youremail@example.com"
          required
        />
        <Input
          ref={passwordRef}
          type="password"
          label="Password"
          placeholder="Enter your password"
          required
        />
        <Input
          ref={passwordConfirmationRef}
          type="password"
          label="Password confirmation"
          placeholder="Confirm your password"
          required
        />
        <Button type="submit" label="Signup" />
      </Form>

      {errors.length > 0 && <Notification type="error" messages={errors} />}
    </AuthPageContainer>
  );
}
