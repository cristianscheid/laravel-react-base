# Laravel & React Base

## Description

This project serves as a minimal template for rapid development, using Laravel as a REST API for the backend and React for the frontend, all styled with Tailwind CSS. It features user authentication and profile management, providing a solid foundation for building more complex applications.

### Features

- User signup and login
- Profile viewing, updating, and deletion
- Password change functionality
- Protected routes using Laravel Sanctum for authentication
- Mobile-first design approach with responsive layouts

> Note: A branch `raw` is available, providing the same project without any styling. This is useful for those who prefer plain CSS or frameworks like Bootstrap instead of Tailwind CSS. The installation process remains the same; simply use `git clone -b raw` to clone the repository.

## Built With

![PHP](https://img.shields.io/badge/PHP-8.3-gray?logo=php&style=for-the-badge)
![Laravel](https://img.shields.io/badge/Laravel-11.21-gray?logo=laravel&style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-8.0-gray?logo=mysql&style=for-the-badge)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-gray?logo=javascript&style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-gray?logo=react&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-gray?logo=tailwindcss&style=for-the-badge)

## Visuals

https://github.com/user-attachments/assets/6042e15b-dc1f-483a-b3a1-299daeeb0460

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**

   ```
   git clone https://github.com/cristianscheid/laravel-react-base.git
   cd laravel-react-base
   ```

2. **Install dependencies**

   `project-root/backend$`

   ```
   composer install
   ```

   `project-root/frontend$`

   ```
   npm install
   ```

3. **Set up environment variables**

   `project-root/backend$`

   ```
   cp .env.example .env
   ```

   Open the `.env` file and configure your database and other settings (you can keep the default settings to use SQLite for simplicity).

   `project-root/frontend$`

   ```
   cp .env.example .env
   ```

   Open the `.env` file and set the API base URL to point to your Laravel application (default: `http://localhost:8000`).

4. **Run migrations**

   `project-root/backend$`

   ```
   php artisan migrate
   ```

5. **Start the servers**

   `project-root/backend$`

   ```
   php artisan serve
   ```

   `project-root/frontend$`

   ```
   npm run dev
   ```

## Usage

Once the application is running, you can access it at `http://localhost:5173`.

## License

Distributed under the MIT License. See LICENSE.txt for more information.
