# BackEnd-AI-Node

A RESTful API backend built with Node.js and Express.js, designed to communicate with frontend applications.

## Features

- ✅ RESTful API architecture
- ✅ CORS enabled for frontend communication
- ✅ Express.js framework
- ✅ Organized project structure (routes, controllers)
- ✅ Error handling middleware
- ✅ Request logging with Morgan
- ✅ Environment variable support
- ✅ Sample CRUD endpoints for Users and Posts

## Project Structure

```
BE-AI-Node/
├── server.js                 # Main server file
├── package.json              # Dependencies and scripts
├── .env.example              # Environment variables template
├── .gitignore               # Git ignore file
├── routes/                   # API routes
│   ├── index.js             # Main router
│   ├── users.js             # User routes
│   └── posts.js             # Post routes
└── controllers/              # Route controllers
    ├── usersController.js   # User business logic
    └── postsController.js   # Post business logic
```

## Installation

1. **Clone the repository** (if applicable) or navigate to the project directory

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables** in `.env` file (optional):
   ```
   PORT=3000
   ```

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

### Health Check
- **GET** `/health` - Check server status

### Users API
- **GET** `/api/users` - Get all users
- **GET** `/api/users/:id` - Get user by ID
- **POST** `/api/users` - Create new user
- **PUT** `/api/users/:id` - Update user
- **DELETE** `/api/users/:id` - Delete user

### Posts API
- **GET** `/api/posts` - Get all posts
- **GET** `/api/posts/:id` - Get post by ID
- **POST** `/api/posts` - Create new post
- **PUT** `/api/posts/:id` - Update post
- **DELETE** `/api/posts/:id` - Delete post

## Example API Requests

### Create a User
```bash
POST http://localhost:3000/api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

### Get All Users
```bash
GET http://localhost:3000/api/users
```

### Create a Post
```bash
POST http://localhost:3000/api/posts
Content-Type: application/json

{
  "title": "My First Post",
  "content": "This is the content of my post",
  "author": "John Doe"
}
```

## Frontend Integration

The API is configured with CORS enabled, so you can make requests from any frontend application. Example using fetch:

```javascript
// Get all users
fetch('http://localhost:3000/api/users')
  .then(response => response.json())
  .then(data => console.log(data));

// Create a user
fetch('http://localhost:3000/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Next Steps

- [ ] Add database integration (MongoDB, PostgreSQL, MySQL, etc.)
- [ ] Add authentication and authorization (JWT)
- [ ] Add input validation (Joi, express-validator)
- [ ] Add rate limiting
- [ ] Add API documentation (Swagger)
- [ ] Add unit and integration tests
- [ ] Add logging service
- [ ] Add Docker configuration

## Dependencies

- **express** - Web framework for Node.js
- **cors** - Enable CORS for frontend communication
- **dotenv** - Environment variable management
- **morgan** - HTTP request logger

## Dev Dependencies

- **nodemon** - Auto-reload server during development

## License

ISC
