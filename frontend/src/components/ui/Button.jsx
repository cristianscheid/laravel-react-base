export default function Button({
  type = "button",
  onClick,
  label,
  variant = "primary",
}) {
  const baseStyles =
    "text-white my-4 w-full font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none";

  const colorStyles =
    variant === "primary"
      ? "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      : "bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";

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
