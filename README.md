# Laravel-React-Base

## Description

This project serves as a minimal template for rapid development using Laravel for the backend and React for the frontend, styled with Tailwind CSS. It features user authentication and profile management, providing a solid foundation for building more complex applications.

### Features

- User signup and login
- Profile viewing, updating, and deletion
- Password change functionality
- Protected routes using Laravel Sanctum for authentication

## Built With

![PHP](https://img.shields.io/badge/PHP-8.3.12-gray?logo=php)
![Laravel](https://img.shields.io/badge/Laravel-11.21.0-gray?logo=laravel)
![React](https://img.shields.io/badge/React-18.3.1-gray?logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.10-gray?logo=tailwindcss)

## Visuals

![Project Screenshot](link-to-your-screenshot.png)

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**

   ```bash
   git clone https://github.com/cristianscheid/laravel-react-base.git
   cd laravel-react-base
   ```

2. **Install dependencies**

   - For the backend (Laravel):

   ```bash
   cd backend
   composer install
   ```

   - For the frontend (React):

   ```bash
   cd frontend
   npm install
   ```

3. **Set up environment variables**

   - In the `backend` directory, copy the `.env.example` file to create your `.env` file, then configure your database and other settings.
   - In the `frontend` directory, copy the `.env.example` file to create your `.env` file and set the API base URL, which points to where your Laravel application is running.

4. **Run migrations**

   ```bash
   php artisan migrate
   ```

5. **Start the servers**

   - For the backend:

   ```bash
   php artisan serve
   ```

   - For the frontend:

   ```bash
   npm run dev
   ```

## Usage

Once the application is running, you can access it at `http://localhost:5173`.

## Support

For help, please open an issue in this repository or contact me at [your.email@example.com].

## Roadmap

- Add more complex user roles and permissions
- Integrate additional features like email verification
- Improve UI/UX components

## License

MIT License

Copyright (c) [year] [your name]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Project Status

Development is ongoing. Feel free to fork the project or contribute as you see fit!
