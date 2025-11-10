import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create new user
		const user = await User.create({
			name,
			email,
			password: hashedPassword,
		});

		// Create JWT token
		const token = jwt.sign(
			{ id: user._id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: "1d" }
		);

		// Return token and basic user info
		res.status(201).json({
			token,
			user: {
				id: user._id,
				name: user.name,
				email: user.email,
			},
		});
	} catch (err) {
		res.status(500).json({ message: "Server error during signup" });
	}
};

export const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		// Find user by email
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: "User not found" });
		}

		// Compare password with hashed password
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		// Create JWT token
		const token = jwt.sign(
			{ id: user._id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: "1d" }
		);

		// Return token and basic user info
		res.json({
			token,
			user: {
				id: user._id,
				name: user.name,
				email: user.email,
			},
		});
	} catch (err) {
		res.status(500).json({ message: "Server error during login" });
	}
};
