# Laravel & React Base

## Description

This project serves as a minimal template for rapid development, using Laravel as a REST API for the backend and React for the frontend, all styled with Tailwind CSS. It features user authentication and profile management, providing a solid foundation for building more complex applications.

### Features

- User signup and login.
- Profile viewing, updating, and deletion.
- Password change functionality.
- Protected routes using Laravel Sanctum for authentication.
- Mobile-first design approach with responsive layouts.

A branch `raw` is also available, providing the same project without any styling. This is useful for those who prefer plain CSS or frameworks like Bootstrap instead of Tailwind CSS. The installation process remains the same; simply use `git clone -b raw https://github.com/cristianscheid/laravel-react-base.git` to clone the repository.

## Built With

![PHP][php-badge]
![Laravel][laravel-badge]
![MySQL][mysql-badge]

![JavaScript][javascript-badge]
![React][react-badge]
![Tailwind CSS][tailwindcss-badge]

## Visuals

https://github.com/user-attachments/assets/6042e15b-dc1f-483a-b3a1-299daeeb0460

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**

   ```
   git clone https://github.com/cristianscheid/laravel-react-base.git
   cd laravel-react-base
   ```

2. **Set up backend environment**

   - Navigate to the backend directory (`laravel-react-base/backend/`).
   - Install dependencies:

     ```
     composer install
     ```

   - Set up environment variables:

     ```
     cp .env.example .env
     ```

     > Open the `.env` file and configure your database and other settings (you can keep the default settings to use SQLite for simplicity).

   - Generate application key:

     ```
     php artisan key:generate --ansi
     ```

   - Run database migrations:

     ```
     php artisan migrate
     ```

3. **Set up frontend environment**

   - Navigate to the frontend directory (`laravel-react-base/frontend/`).
   - Install dependencies:

     ```
     npm install
     ```

   - Set up environment variables:

     ```
     cp .env.example .env
     ```

     > Open the `.env` file and set the API base URL to point to your Laravel application (default: `http://localhost:8000`).

4. **Start the servers**

   - From backend directory (`laravel-react-base/backend/`):

     ```
     php artisan serve
     ```

   - From frontend directory (`laravel-react-base/frontend/`):

     ```
     npm run dev
     ```

## Usage

Once the application is running, you can access it at `http://localhost:5173`.

## License

Distributed under the MIT License. See LICENSE.txt for more information.

<!-- Badges for 'Built With' section -->

[php-badge]: https://img.shields.io/badge/PHP-8.3-gray?style=for-the-badge&logo=php&logoColor=white
[laravel-badge]: https://img.shields.io/badge/Laravel-11.21-gray?style=for-the-badge&logo=laravel&logoColor=white
[mysql-badge]: https://img.shields.io/badge/MySQL-8.0-gray?style=for-the-badge&logo=mysql&logoColor=white
[javascript-badge]: https://img.shields.io/badge/JavaScript-ES6-gray?style=for-the-badge&logo=javascript&logoColor=white
[react-badge]: https://img.shields.io/badge/React-18.3-gray?style=for-the-badge&logo=react&logoColor=white
[tailwindcss-badge]: https://img.shields.io/badge/Tailwind%20CSS-3.4-gray?style=for-the-badge&logo=tailwindcss&logoColor=white
