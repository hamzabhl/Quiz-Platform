const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const register = async (req, res) => {
	try {
		const { username, email, password, role } = req.body;

		// 🔍 1. Validate input
		if (!username || !email || !password) {
			return res.status(400).json({ error: 'All fields are required' });
		}

		// 🔍 2. Check if user exists (byEmail)
		const existingUser = await prisma.user.findFirst({
			where: {
				OR: [
					{ email },
					{ username }
				]
			}
		});
		
		if (existingUser) {
			if (existingUser.email === email) {
				return res.status(400).json({ error: 'Email already in use' });
			}

			if (existingUser.username === username) {
				return res.status(400).json({ error: 'Username already in use' });
			}
		}

		// 🔐 3. Hash password
		const hashedPassword = await bcrypt.hash(password, 10);

		// 💾 4. Create user
		const user = await prisma.user.create({
			data: {
				username,
				email,
				password: hashedPassword,
				role: role || 'student',
			},
		});

		// 🚫 Don’t return password
		const { password: _, ...userWithoutPassword } = user;

		res.status(201).json({
			message: 'User created successfully',
			user: userWithoutPassword,
		});

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Server error' });
	}
};

module.exports = { register };