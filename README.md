📝 Blogging Platform

A simple and powerful Blogging Platform built using Node.js, Express.js, and MongoDB, with optional frontend support (React/HTML-CSS).
This project allows users to create, edit, delete, and view blog posts, with admin capabilities for managing content and users.

🚀 Features

Admin

Manage all blog posts (approve, edit, delete)

Manage user accounts

Moderate comments

User

Create, edit, and delete own posts

Like and comment on other posts

View all blogs with categories or tags

System

Supports image uploads for posts

Handles authentication and authorization (JWT)

Supports Markdown rendering for posts

Optional email notifications for new posts or comments

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Frontend (optional): React / HTML, CSS, Tailwind CSS or Bootstrap

Authentication: JSON Web Token (JWT)

Other Tools: Multer (image upload), Nodemailer (email notifications), Postman (API testing)

📂 Project Structure
Blogging-Platform/
│
├── backend/
│   ├── models/         # User, Post, Comment schemas
│   ├── routes/         # API routes
│   ├── controllers/    # Business logic
│   ├── middleware/     # Auth and validation
│   ├── config/         # DB and environment setup
│   └── server.js       # Main entry point
│
├── frontend/
│   ├── index.html
│   ├── post.html
│   ├── login.html
│   ├── register.html
│   └── dashboard.html
│
└── README.md

⚡ API Endpoints
Auth APIs

POST /api/auth/register → Register a new user

POST /api/auth/login → Login and get JWT token

Blog APIs

POST /api/posts → Create a new post

GET /api/posts → Get all posts

GET /api/posts/:id → Get single post

PUT /api/posts/:id → Edit a post

DELETE /api/posts/:id → Delete a post

Comment APIs

POST /api/posts/:id/comments → Add comment to a post

DELETE /api/comments/:id → Delete a comment

🛠️ Installation & Setup
1. Clone the repository
git clone https://github.com/<your-username>/Blogging-Platform.git
cd Blogging-Platform

2. Install dependencies
cd backend
npm install

3. Setup environment variables

Create a .env file inside backend/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

4. Run the server
npm start

✅ Testing

Use Postman or Thunder Client to test the API endpoints.
Example requests:

Create a post → POST /api/posts

Get all posts → GET /api/posts

Login → POST /api/auth/login

💡 Future Enhancements

Add search and filters for blog posts

Add categories/tags

Add like/dislike feature

Add profile pages for users

Deploy to Render / Vercel / Railway

📸 Optional Frontend Features

Display blog feed and individual posts

Allow user signup/login via frontend

Provide a Markdown editor for creating posts

Responsive UI using Tailwind CSS or Bootstrap
