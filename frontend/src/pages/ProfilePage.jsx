import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Form from "../components/ui/Form";
import Notification from "../components/ui/Notification";
import useProfile from "../hooks/useProfile";

export default function ProfilePage() {
  const {
    nameRef,
    emailRef,
    errors,
    success,
    onSubmit,
    onDeleteClick,
    user,
  } = useProfile();
  
  return (
    <div>
      <h1>Profile</h1>

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
      </Form>

      <Button onClick={onDeleteClick} label="Delete Account" />

      {errors.length > 0 && <Notification type="error" messages={errors} />}

      {success.length > 0 && <Notification type="success" messages={success} />}
    </div>
  );
}
