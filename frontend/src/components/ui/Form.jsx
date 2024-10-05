export default function Form({ onSubmit, children }) {
  return (
    <form className="mx-auto max-w-sm" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
