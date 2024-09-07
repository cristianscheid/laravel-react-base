const Notification = ({ type, messages }) => {
  if (!messages || messages.length === 0) return null;

  return (
    <div className="max-w-sm mx-auto p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
      {messages.map((message, index) => (
        <p key={index} className={type}>
          {message}
        </p>
      ))}
    </div>
  );
};

export default Notification;
