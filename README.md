ToDo Application with User Authentication

Description

This project is a full-stack ToDo application that provides user authentication and task management functionality. Users can register, log in, create, view, update, and delete their ToDo items. The application also includes features like authentication middleware to secure routes and relational database models using Sequelize ORM.

Features

User Registration and Login: Allows users to create an account and log in securely.

Task Management: Users can create, view, update, and delete ToDo tasks.

Authentication Middleware: Protects routes from unauthorized access.

Sequelize ORM: Handles database interactions and model definitions.

Environment Variables: Utilizes .env files for secure configuration.

Installation and Setup

Prerequisites

Node.js

NPM or Yarn

MySQL or a compatible database

Steps

Clone the repository:

git clone <repository_url>

Navigate to the project directory:

cd <project_name>

Install dependencies:

npm install

Configure the database:

Update the config/config.json file with your database credentials.

Alternatively, set environment variables for database configuration.

Run database migrations:

npx sequelize-cli db:migrate

Start the server:

npm start

File Structure

|-- models
|   |-- index.js        # Database connection and model setup
|   |-- Todo.js         # Defines the Todo model
|   |-- userCredentials.js # Defines the UserCredentials model
|-- routes
|   |-- toDoRoutes.js   # Routes for managing ToDo tasks
|   |-- userRoutes.js   # Routes for user authentication
|-- controllers
|   |-- todoController.js # Logic for handling ToDo-related operations
|   |-- userController.js # Logic for handling user-related operations
|-- middleware
|   |-- auth.js         # Middleware for protecting routes
|-- config
|   |-- config.json     # Database configuration
|   |-- db.js           # Sequelize connection setup
|-- .env                # Environment variables
|-- app.js              # Entry point for the application

API Endpoints

User Routes (/api/user)

POST /register: Registers a new user.

POST /login: Logs in an existing user.

GET /logout: Logs out the current user.

ToDo Routes (/api/todo)

POST /create: Creates a new ToDo item (requires authentication).

GET /: Fetches all ToDo items.

GET /:id: Fetches a specific ToDo item by ID.

PUT /:id/update: Updates a specific ToDo item by ID.

DELETE /:id/delete: Deletes a specific ToDo item by ID.

Environment Variables

Create a .env file in the root directory with the following variables:

PORT=6001
DB_USER=<your_database_username>
DB_PASSWORD=<your_database_password>
DB_NAME=<your_database_name>
DB_HOST=<your_database_host>
JWT_SECRET=<your_jwt_secret_key>

Usage

Start the server:

npm start

Use tools like Postman or cURL to test the endpoints.

Interact with the application through the provided routes.

Dependencies

Express: Web framework

Sequelize: ORM for database management

MySQL2: MySQL client for Node.js

dotenv: Environment variable management

jsonwebtoken: For secure token-based authentication

Future Enhancements

Implement pagination for task lists.

Add a frontend UI for easier interaction.

Support for task prioritization and deadlines.

Implement role-based access control (RBAC).

License

This project is licensed under the MIT License.

Contributors

Oshing Rana Magar

