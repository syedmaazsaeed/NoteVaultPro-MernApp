# 📝 NoteVaultPro-MERNApp

Welcome to **NoteVaultPro**, a secure and feature-rich note-taking application built using the powerful **MERN Stack** (MongoDB, Express, React, and Node.js). It’s designed to help you efficiently manage your notes, ideas, and to-do lists with ease and security. Whether you're a student, professional, or just someone who loves staying organized, **NoteVaultPro** is the perfect solution for you!



## 🚀 Features

- **🔐 Secure Cloud Storage**: Keep all your notes safely stored in the cloud.
  
- **🗂 Organized Notes**: Create notes with customizable tags and descriptions for easy management.
  
- **🔍 Search Functionality**: Instantly search through your notes by title or tag.
  
- **🔑 User Authentication**: Full-fledged authentication system with JWT for user login and security.
  
- **📲 Real-time Notifications**: Get instant alerts on important actions like note creation, deletion, or updates.
  
- **💻 Responsive Design**: Works seamlessly across devices, be it desktop or mobile.

---

## ⚙️ Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js**
  
- **MongoDB**

### Backend Setup

1. **Clone the repository**:
   
   git clone https://github.com/yourusername/NoteVaultPro-MERNApp.git
   
   cd NoteVaultPro-MERNApp

2.  Navigate to the backend folder and install dependencies:

cd Backend

npm install

3. Create a .env file in the backend root directory and add the following configuration:


MONGO_URI=your-mongo-uri

JWT_SECRET=your-jwt-secret

4. Start the backend server:


npm start

This will start the backend at http://localhost:5000.

Frontend Setup

Navigate to the frontend folder:


cd ../Frontend

Install frontend dependencies:


npm install

Start the frontend development server:


npm start

The frontend will run on http://localhost:3000.

Running Both Servers Concurrently

To start both the frontend and backend servers simultaneously, run:


npm run both

🎮 Usage

Sign Up/Login: Create an account or log in to your existing account.

Create Notes: Navigate to "Insert a Note" and add new notes with title, description, and tags.

Search Notes: Use the search bar to find notes based on title or tags.

Edit/Delete Notes: Modify or delete notes at your convenience.

Logout: Secure your account by logging out after use.

🗂️ Project Structure


NoteVaultPro-MERNApp/
├── Backend/              # Backend folder (Express & MongoDB)
│   ├── controllers/      # Request handlers
│   ├── models/           # Mongoose schemas and models
│   ├── routes/           # API routes
│   └── index.js          # Server setup
│
├── Frontend/             # Frontend folder (React.js)
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── AddNote.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Alert.jsx
│   │   │   ├── Notes.jsx
│   │   │   └── NoteItem.jsx
│   │   ├── App.js        # Main app file
│   │   └── index.js      # Entry point
│
├── .gitignore            # Ignored files in git
├── README.md             # This readme file
└── package.json          # Project configuration and dependencies

💻 Technologies Used

Frontend:

React.js

Bootstrap 5 for UI design

React Router DOM for navigation

Backend:

Node.js

Express.js

MongoDB (Mongoose)

JSON Web Tokens (JWT) for authentication

Development Tools:

Concurrently for running both servers simultaneously

Dotenv for managing environment variables

🤝 Contributing

We welcome contributions! If you'd like to contribute:

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make your changes.

Commit the changes (git commit -m "Added feature").

Push to the branch (git push origin feature-branch).

Open a pull request, and we’ll review your changes.

📞 Contact

Developed by Syed Maaz Saeed.

Feel free to reach out at:

📧 syedmaazsaeeddev@gmail.com

Thank you for using NoteVaultPro! We hope this app helps you stay organized and productive. 😊🚀










