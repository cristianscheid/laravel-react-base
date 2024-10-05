import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Form from "../components/ui/Form";
import Notification from "../components/ui/Notification";
import useProfile from "../hooks/useProfile";
import PageContainer from "../components/PageContainer";

export default function ProfilePage() {
  const { nameRef, emailRef, errors, success, onSubmit, onDeleteClick, user } =
    useProfile();

  return (
    <PageContainer title="Profile">
      <Form onSubmit={onSubmit}>
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
        <Button type="submit" label="Save Changes" />
        <Button
          onClick={onDeleteClick}
          label="Delete Account"
          variant="secondary"
        />
      </Form>

      {errors.length > 0 && <Notification type="error" messages={errors} />}
      {success.length > 0 && <Notification type="success" messages={success} />}
    </PageContainer>
  );
}
