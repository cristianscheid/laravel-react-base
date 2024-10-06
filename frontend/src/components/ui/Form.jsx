export default function Form({ onSubmit, children }) {
  return (
    <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
