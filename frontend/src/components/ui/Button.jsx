export default function Button({
  type = "button",
  onClick,
  label,
  variant = "primary",
}) {
  const baseStyles =
    "my-4 w-full font-medium rounded-lg text-sm px-5 py-2.5 text-white focus:outline-none";

  const colorStyles =
    variant === "primary"
      ? "focus:ring-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      : "focus:ring-4 bg-red-600 hover:bg-red-700 focus:ring-red-800";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${colorStyles}`}
    >
      {label}
    </button>
  );
}
