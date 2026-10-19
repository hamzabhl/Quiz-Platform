# 🎯 Quiz Application

A full-stack Quiz web application built with Node.js, following the MVC (Model-View-Controller) architecture and using Prisma ORM for database management.

## 🚀 Features

- Interactive quiz functionality
- Structured MVC architecture (`models`, `views`, `controllers`, `routes`)
- Database management and migrations powered by **Prisma ORM**
- Custom middleware and configuration management

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Backend Framework:** Express.js
- **ORM / Database:** Prisma (`schema.prisma`)
- **Frontend:** Views & Pages templates

## 📂 Project Structure

```text
Quiz/
├── prisma/
│   ├── migrations/          # Database migration history
│   └── schema.prisma        # Prisma database schema
├── src/
│   ├── config/              # Application configuration files
│   ├── controllers/         # Route logic and request handlers
│   ├── midleware/           # Custom middleware functions
│   ├── models/              # Data models and database queries
│   ├── pages/               # Page templates/components
│   ├── routes/              # Application API and view routes
│   └── views/               # UI view templates
├── .env                     # Environment variables (ignored by Git)
├── .gitignore               # Git ignored files
├── package.json             # Project dependencies and scripts
├── quiz.png                 # Project preview image
└── server.js                # Application entry point
```

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/quiz.git](https://github.com/your-username/quiz.git)
cd quiz
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory and add your database connection string and port:
```env
DATABASE_URL="your_database_connection_string_here"
PORT=3000
```

### 4. Run database migrations
Generate the Prisma client and apply migrations to your database:
```bash
npx prisma migrate dev
npx prisma generate
```

### 5. Start the server
```bash
node server.js
```
