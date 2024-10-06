import PageContainer from "../components/PageContainer";
import Button from "../components/ui/Button";
import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import Notification from "../components/ui/Notification";
import useChangePassword from "../hooks/useChangePassword";

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
          placeholder="Enter your current password"
          required
        />
        <Input
          ref={newPasswordRef}
          type="password"
          label="New Password: "
          placeholder="Enter your new password"
          required
        />
        <Input
          ref={newPasswordConfirmationRef}
          type="password"
          label="New Password Confirmation: "
          placeholder="Confirm your new password"
          required
        />
        <Button type="submit" label="Change Password" />
      </Form>

      {errors.length > 0 && <Notification type="error" messages={errors} />}
      {success.length > 0 && <Notification type="success" messages={success} />}
    </PageContainer>
  );
}
