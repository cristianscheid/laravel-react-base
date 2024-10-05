import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Form from "../components/ui/Form";
import Notification from "../components/ui/Notification";
import useChangePassword from "../hooks/useChangePassword";
import PageContainer from "../components/PageContainer";

export default function ChangePasswordPage() {
  const {
    currentPasswordRef,
    newPasswordRef,
    newPasswordConfirmationRef,
    errors,
    success,
    onSubmit,
  } = useChangePassword();

  return (
    <PageContainer title="Change Password">
      <Form onSubmit={onSubmit}>
        <Input
          ref={currentPasswordRef}
          type="password"
          label="Current Password: "
          required
        />
        <Input
          ref={newPasswordRef}
          type="password"
          label="New Password: "
          required
        />
        <Input
          ref={newPasswordConfirmationRef}
          type="password"
          label="New Password Confirmation: "
          required
        />
        <Button type="submit" label="Change Password" />
      </Form>

      {errors.length > 0 && <Notification type="error" messages={errors} />}
      {success.length > 0 && <Notification type="success" messages={success} />}
    </PageContainer>
  );
}
