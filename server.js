const cors = require('cors');
require('dotenv').config();
const express = require("express");
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();

//
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// 🔥 ENABLE CORS FIRST
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Auth routes
app.use('/api/auth', require('./src/routes/registerRoute'));
app.use('/api/auth', require('./src/routes/loginRoute'));
app.use("/api/auth", require("./src/routes/logoutRoute"));
app.use("/api/auth", require("./src/routes/protectionRoute"));

// Test users route
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});