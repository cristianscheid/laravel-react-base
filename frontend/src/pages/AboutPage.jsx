import PageContainer from "../components/PageContainer";

export default function AboutPage() {
  return (
    <PageContainer title="About This Project">
      <p className="text-lg text-gray-300 mb-6">
        This project serves as a minimal template designed for rapid
        development.
      </p>
      <p className="text-md text-gray-400 max-w-lg mb-4">
        It includes essential features like user authentication and profile
        editing, providing a solid foundation for building more complex
        applications. The backend API is powered by Laravel, ensuring robust and
        scalable performance, while the sleek React frontend delivers a
        responsive user experience.
      </p>
      <p className="text-md text-gray-400 max-w-lg mb-4">
        Whether you're a beginner or an experienced developer, this template
        aims to simplify the setup process, allowing you to focus on building
        the features that matter most to your project.
      </p>
      <p className="text-md text-gray-400 max-w-lg">
        Explore the code, customize it to your needs, and start building your
        next web application with confidence!
      </p>
    </PageContainer>
  );
}
