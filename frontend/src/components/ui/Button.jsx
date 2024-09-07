export default function Button({ type, onClick, label }) {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
}
