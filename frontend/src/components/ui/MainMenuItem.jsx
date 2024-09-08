import { Link } from "react-router-dom";

export default function MainMenuItem({ linkTo, label }) {
  return (
    <li>
      <Link
        className="block p-3 rounded text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
        to={linkTo}
      >
        {label}
      </Link>
    </li>
  );
}
