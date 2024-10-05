const Notification = ({ type, messages }) => {
  if (!messages || messages.length === 0) return null;

  const textColor = type === "error" ? "text-red-400" : "text-green-400";

  return (
    <div className="max-w-sm mx-auto p-4 mb-4 text-sm bg-gray-800 rounded-lg">
      {messages.map((message, index) => (
        <p key={index} className={textColor}>
          {message}
        </p>
      ))}
    </div>
  );
};

export default Notification;
