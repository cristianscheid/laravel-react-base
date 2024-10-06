import PageContainer from "../components/PageContainer";

export default function AboutPage() {
  return (
    <PageContainer title="About This Project">
      <p className="mb-6 text-lg text-gray-300">
        This project serves as a minimal template designed for rapid
        development.
      </p>
      <div className="flex flex-col items-center justify-center mt-6 space-y-5 text-center">
        <p className="max-w-lg text-md text-gray-400">
          It includes essential features like user authentication and profile
          editing, providing a solid foundation for building more complex
          applications. The backend API is powered by Laravel, ensuring robust
          and scalable performance, while the sleek React frontend delivers a
          responsive user experience.
        </p>
        <p className="max-w-lg text-md text-gray-400">
          Whether you're a beginner or an experienced developer, this template
          aims to simplify the setup process, allowing you to focus on building
          the features that matter most to your project.
        </p>
        <p className="max-w-lg text-md text-gray-400">
          Explore the code, customize it to your needs, and start building your
          next web application with confidence!
        </p>
      </div>
    </PageContainer>
  );
}
