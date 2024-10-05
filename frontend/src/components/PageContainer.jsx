export default function PageContainer({ title, children, is404 = false }) {
  return (
    <div
      className={`flex flex-col items-center justify-between ${
        is404 ? "h-screen" : "h-[calc(100vh-72px)]"
      } overflow-y-auto dark:bg-gray-800 p-5`}
    >
      <div className="flex flex-col items-center mt-5 text-center">
        <h1 className="text-5xl font-bold text-gray-100 mb-5">{title}</h1>
        <div className="mt-5">{children}</div>
      </div>
      <footer className="text-gray-400 text-md mt-5">
        <p>&copy; {new Date().getFullYear()} Cristian Scheid</p>
      </footer>
    </div>
  );
}
