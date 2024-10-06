import PageContainer from "../components/PageContainer";

export default function AboutPage() {
  return (
    <PageContainer title="About This Project">
      <p className="mb-6 text-lg text-center text-gray-300">
        This application serves as a minimal template for rapid development.
      </p>
      <div className="flex flex-col items-center justify-center mt-6 space-y-5 text-center">
        <p className="max-w-lg text-md text-gray-400">
          It features user authentication and profile editing, providing a solid
          foundation for more complex applications. The backend API is powered
          by Laravel, ensuring robust performance, while the React frontend
          offers a responsive user experience.
        </p>
        <p className="max-w-lg text-md text-gray-400">
          Styled with Tailwind CSS, the application adopts a utility-first
          approach for easy design and consistent styling.
        </p>
        <p className="max-w-lg text-md text-gray-400">
          Whether you're a beginner or an experienced developer, this template
          simplifies the setup process, allowing you to focus on building key
          features.
        </p>
        <p className="max-w-lg text-md text-gray-400">
          Dive into the code, customize it to fit your needs, and start
          developing your next web application with confidence!
        </p>
      </div>
    </PageContainer>
  );
}
