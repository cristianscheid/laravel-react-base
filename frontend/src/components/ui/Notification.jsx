const Notification = ({ type, messages }) => {
  if (!messages || messages.length === 0) return null;

  const textColor = type === "error" ? "text-red-400" : "text-green-400";

  return (
    <div className="max-w-sm mx-auto mb-4 p-4 text-center text-sm bg-gray-800 rounded-lg">
      {messages.map((message, index) => (
        <p key={index} className={textColor}>
          {message}
        </p>
      ))}
    </div>
  );
};

export default Notification;
