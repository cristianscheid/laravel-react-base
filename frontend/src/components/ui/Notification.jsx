const Notification = ({ type, messages }) => {
  if (!messages || messages.length === 0) return null;

  return (
    <div>
      {messages.map((message, index) => (
        <p key={index} className={type}>
          {message}
        </p>
      ))}
    </div>
  );
};

export default Notification;
