//src/controller/protection.js
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const protection = async (req, res) => {
    try {
        // 🍪 1. Get token from cookie
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ error: "Not authenticated" });
        }

        // 🔐 2. Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 🧑‍💻 3. Get user from DB (always safer than trusting token)
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: {
                id: true,
                email: true,
                username: true,
                role: true,
                createdAt: true
            }
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // ✅ 4. Return user
        res.json(user);

    } catch (err) {
        console.error(err);

        return res.status(401).json({
            error: "Invalid or expired token"
        });
    }
};

module.exports = { protection };