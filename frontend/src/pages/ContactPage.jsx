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
            href="mailto:cristianscheid@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white"
              alt="Gmail"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/cristianscheid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/LinkedIn-2B66B2?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+TGlua2VkSW48L3RpdGxlPjxwYXRoIGQ9Ik0yMC40NDcgMjAuNDUyaC0zLjU1NHYtNS41NjljMC0xLjMyOC0uMDI3LTMuMDM3LTEuODUyLTMuMDM3LTEuODUzIDAtMi4xMzYgMS40NDUtMi4xMzYgMi45Mzl2NS42NjdIOS4zNTFWOWgzLjQxNHYxLjU2MWguMDQ2Yy40NzctLjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek01LjMzNyA3LjQzM2MtMS4xNDQgMC0yLjA2My0uOTI2LTIuMDYzLTIuMDY1IDAtMS4xMzguOTItMi4wNjMgMi4wNjMtMi4wNjMgMS4xNCAwIDIuMDY0LjkyNSAyLjA2NCAyLjA2MyAwIDEuMTM5LS45MjUgMi4wNjUtMi4wNjQgMi4wNjV6bTEuNzgyIDEzLjAxOUgzLjU1NVY5aDMuNTY0djExLjQ1MnpNMjIuMjI1IDBIMS43NzFDLjc5MiAwIDAgLjc3NCAwIDEuNzI5djIwLjU0MkMwIDIzLjIyNy43OTIgMjQgMS43NzEgMjRoMjAuNDUxQzIzLjIgMjQgMjQgMjMuMjI3IDI0IDIyLjI3MVYxLjcyOUMyNCAuNzc0IDIzLjIgMCAyMi4yMjIgMGguMDAzeiIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg=="
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5551995531260"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/Whatsapp-4CA143?style=flat-square&logo=whatsapp&logoColor=white"
              alt="Whatsapp"
            />
          </a>
        </div>
        <p className="mt-6 max-w-lg text-md text-gray-400">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to collaborate. Let's connect and bring our ideas to
          life!
        </p>
      </div>
    </PageContainer>
  );
}
