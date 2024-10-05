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
    <div className="flex min-h-screen dark:bg-gray-900">
      <div className="max-w-md w-full m-auto p-5 space-y-5 dark:bg-gray-900">
        <AppLogo></AppLogo>
        <h2 className="text-4xl text-center font-bold dark:text-white">
          {title}
        </h2>
        <div className="space-y-4">{children}</div>
        <p className="max-w-sm mx-auto dark:text-white">
          {footerText}{" "}
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            to={linkTo}
          >
            {linkText}
          </Link>
        </p>
      </div>
    </div>
  );
}
