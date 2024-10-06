import Button from "../ui/Button";

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  confirmLabel = "Yes",
  cancelLabel = "No",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative w-full max-w-md p-4">
        <div className="relative bg-gray-800 rounded-lg shadow-lg">
          <div className="p-6 text-center">
            <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>
            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                label={confirmLabel}
                variant="primary"
              />
              <Button
                onClick={onClose}
                label={cancelLabel}
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
