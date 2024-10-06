export default function PageContainer({ title, children, is404 = false }) {
  return (
    <div
      className={`flex flex-col items-center justify-between p-5 ${
        is404 ? "h-screen" : "h-[calc(100vh-72px)]"
      } overflow-y-auto bg-gray-800`}
    >
      <div className="flex flex-col items-center mt-5">
        <h1 className="mb-5 text-5xl font-bold text-center text-gray-100">
          {title}
        </h1>
        <div className="w-full mt-5">{children}</div>
      </div>
      <footer className="mt-5 text-md text-gray-400">
        <p>&copy; {new Date().getFullYear()} Cristian Scheid</p>
      </footer>
    </div>
  );
}
