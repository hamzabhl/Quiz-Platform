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
