import PageContainer from "../components/PageContainer";
import Button from "../components/ui/Button";
import ConfirmationModal from "../components/ui/ConfirmationModal";
import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import Notification from "../components/ui/Notification";
import useProfile from "../hooks/useProfile";

export default function ProfilePage() {
  const {
    nameRef,
    emailRef,
    errors,
    success,
    onSubmit,
    openModal,
    closeModal,
    confirmDelete,
    user,
    isModalOpen,
  } = useProfile();

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
          onClick={openModal}
          label="Delete Account"
          variant="secondary"
        />
      </Form>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={() => {
          confirmDelete();
          closeModal();
        }}
        title="Are you sure you want to delete your account?"
        confirmLabel="Yes, delete"
        cancelLabel="No, cancel"
      />

      {errors.length > 0 && <Notification type="error" messages={errors} />}
      {success.length > 0 && <Notification type="success" messages={success} />}
    </PageContainer>
  );
}
