import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";

export default function NotFoundPage() {
  return (
    <PageContainer title="404 - Page Not Found" is404>
      <p className="text-lg text-gray-300 mb-6">
        Oops! The page you are looking for could not be found.
      </p>
      <p className="text-md text-gray-400 max-w-lg mb-4">
        It might be that the URL is incorrect or the page has been removed.
      </p>
      <p className="text-md text-gray-400 max-w-lg mb-4">
        Please check the URL or return to the{" "}
        <Link to="/" className="text-blue-500 underline hover:text-blue-700">
          Home Page
        </Link>
        .
      </p>
    </PageContainer>
  );
}
