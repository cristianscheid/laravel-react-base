import PageContainer from "../components/PageContainer";

export default function ContactPage() {
  return (
    <PageContainer title="Get in Touch">
      <p className="mb-6 text-lg text-center text-gray-300">
        Feel free to reach out if you have any questions or would like to
        connect.
      </p>
      <div className="flex flex-col items-center justify-center mt-6 space-y-5 text-center">
        <div className="flex items-center justify-center space-x-3">
          <img
            src="https://avatars.githubusercontent.com/u/74515775?v=4"
            alt="Cristian Scheid"
            className="w-16 h-16 rounded-full shadow-lg"
          />
          <div>
            <p className="text-lg text-gray-300">Cristian Scheid</p>
            <p className="text-md text-gray-400">Full Stack Developer</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/cristian-scheid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white"
              alt="LinkedIn"
            />
          </a>
          <a href="mailto:cristianscheid@gmail.com">
            <img
              src="https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white"
              alt="Gmail"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5551995531260&text=Hello!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/-Whatsapp-4CA143?style=flat-square&labelColor=4CA143&logo=whatsapp&logoColor=white"
              alt="Whatsapp"
            />
          </a>
        </div>
        <p className="mt-6 max-w-lg text-md text-gray-400">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to collaborate. Let’s connect and bring our ideas to
          life!
        </p>
      </div>
    </PageContainer>
  );
}
