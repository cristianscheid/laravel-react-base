import { Link } from "react-router-dom";

import PageContainer from "../components/PageContainer";

export default function NotFoundPage() {
  return (
    <PageContainer title="404 - Page Not Found" is404>
      <div className="flex flex-col items-center justify-center mt-6 space-y-5 text-center">
        <p className="mb-6 text-lg text-gray-300">
          Oops! The page you are looking for could not be found.
        </p>
        <p className="mb-4 max-w-lg text-md text-gray-400">
          It might be that the URL is incorrect or the page has been removed.
        </p>
        <p className="mb-4 max-w-lg text-md text-gray-400">
          Please check the URL or return to the{" "}
          <Link to="/" className="text-blue-500 underline hover:text-blue-700">
            Home Page
          </Link>
          .
        </p>
      </div>
    </PageContainer>
  );
}
