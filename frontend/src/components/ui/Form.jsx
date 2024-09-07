export default function Form({ onSubmit, children }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
