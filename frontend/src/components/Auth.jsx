import React, { useState } from "react";
import API, { setAuthToken } from "../services/api.js";
import { TextField, Button, Typography, Box } from "@mui/material";

const Auth = ({ onAuthenticate }) => {
	const [isLogin, setIsLogin] = useState(true);
	const [form, setForm] = useState({ name: "", email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			const endpoint = isLogin ? "users/login" : "users/signup";
			const res = await API.post(`/${endpoint}`, form);
			setAuthToken(res.data.token);
			onAuthenticate(res.data.user);
		} catch (err) {
			setError(err.response?.data?.message || "Something went wrong");
		}
	};

	return (
		<Box sx={{ maxWidth: 350, mx: "auto", mt: 5 }}>
			<Typography variant="h5" mb={2}>
				{isLogin ? "Login" : "Sign Up"}
			</Typography>
			<form onSubmit={handleSubmit}>
				{!isLogin && (
					<TextField
						label="Name"
						name="name"
						value={form.name}
						onChange={handleChange}
						fullWidth
						margin="normal"
						required
					/>
				)}
				<TextField
					label="Email"
					type="email"
					name="email"
					value={form.email}
					onChange={handleChange}
					fullWidth
					margin="normal"
					required
				/>
				<TextField
					label="Password"
					type="password"
					name="password"
					value={form.password}
					onChange={handleChange}
					fullWidth
					margin="normal"
					required
				/>
				{error && (
					<Typography color="error" variant="body2" mt={1}>
						{error}
					</Typography>
				)}
				<Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
					{isLogin ? "Login" : "Sign Up"}
				</Button>
			</form>
			<Button
				onClick={() => {
					setIsLogin(!isLogin);
					setError("");
					setForm({ name: "", email: "", password: "" });
				}}
				sx={{ mt: 1 }}
				size="small"
			>
				{isLogin ? "Create an account" : "Already have an account?"}
			</Button>
		</Box>
	);
};

export default Auth;
