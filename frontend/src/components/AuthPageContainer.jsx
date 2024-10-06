import { Link } from "react-router-dom";
import AppLogo from "./ui/AppLogo";

export default function AuthPageContainer({
  title,
  children,
  footerText,
  linkText,
  linkTo,
}) {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <div className="m-auto w-full max-w-md p-5 bg-gray-900 space-y-5">
        <AppLogo />
        <h2 className="text-center text-4xl font-bold text-white">{title}</h2>
        <div className="space-y-4">{children}</div>
        <p className="max-w-sm mx-auto text-white">
          {footerText}{" "}
          <Link
            className="font-medium text-blue-500 hover:underline"
            to={linkTo}
          >
            {linkText}
          </Link>
        </p>
      </div>
    </div>
  );
}
