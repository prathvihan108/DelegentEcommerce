import React, { useState } from "react";
import API, { setAuthToken } from "../services/api.js";
import {
	TextField,
	Button,
	Typography,
	Box,
	Container,
	Paper,
	CircularProgress,
} from "@mui/material";
import { User, Mail, Lock } from "lucide-react";

const Auth = ({ onAuthenticate }) => {
	const [isLogin, setIsLogin] = useState(true);
	const [form, setForm] = useState({ name: "", email: "", password: "" });
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			const endpoint = isLogin ? "users/login" : "users/signup";
			const res = await API.post(`/${endpoint}`, form);
			setAuthToken(res.data.token);
			onAuthenticate(res.data.user);
		} catch (err) {
			setError(err.response?.data?.message || "Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box
			sx={{
				minHeight: "100vh",
				background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				py: 8,
				pt: 12,
			}}
		>
			<Container maxWidth="sm">
				<Paper
					elevation={0}
					sx={{
						borderRadius: 4,
						p: 4,
						boxShadow: "0 16px 48px rgba(0,0,0,0.2)",
					}}
				>
					<Box sx={{ textAlign: "center", mb: 4 }}>
						<Box
							sx={{
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								width: 64,
								height: 64,
								borderRadius: 3,
								background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
								mb: 2,
							}}
						>
							<User size={32} color="white" />
						</Box>
						<Typography
							variant="h4"
							sx={{
								fontWeight: 800,
								background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							{isLogin ? "Welcome Back" : "Create Account"}
						</Typography>
						<Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
							{isLogin
								? "Sign in to continue shopping"
								: "Join us and start shopping"}
						</Typography>
					</Box>

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
								variant="outlined"
								InputProps={{
									startAdornment: (
										<User size={20} style={{ marginRight: 8, color: "#999" }} />
									),
								}}
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: 2,
										"&:hover fieldset": {
											borderColor: "#667eea",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#667eea",
										},
									},
								}}
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
							variant="outlined"
							InputProps={{
								startAdornment: (
									<Mail size={20} style={{ marginRight: 8, color: "#999" }} />
								),
							}}
							sx={{
								"& .MuiOutlinedInput-root": {
									borderRadius: 2,
									"&:hover fieldset": {
										borderColor: "#667eea",
									},
									"&.Mui-focused fieldset": {
										borderColor: "#667eea",
									},
								},
							}}
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
							variant="outlined"
							InputProps={{
								startAdornment: (
									<Lock size={20} style={{ marginRight: 8, color: "#999" }} />
								),
							}}
							sx={{
								"& .MuiOutlinedInput-root": {
									borderRadius: 2,
									"&:hover fieldset": {
										borderColor: "#667eea",
									},
									"&.Mui-focused fieldset": {
										borderColor: "#667eea",
									},
								},
							}}
						/>
						{error && (
							<Typography color="error" variant="body2" sx={{ mt: 2 }}>
								{error}
							</Typography>
						)}
						<Button
							type="submit"
							variant="contained"
							fullWidth
							disabled={loading}
							sx={{
								mt: 3,
								py: 1.5,
								borderRadius: 2,
								background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
								fontWeight: 700,
								fontSize: "1rem",
								textTransform: "none",
								"&:hover": {
									background:
										"linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
								},
							}}
						>
							{loading ? (
								<CircularProgress size={24} color="inherit" />
							) : isLogin ? (
								"Sign In"
							) : (
								"Create Account"
							)}
						</Button>
					</form>

					<Box sx={{ textAlign: "center", mt: 3 }}>
						<Button
							onClick={() => {
								setIsLogin(!isLogin);
								setError("");
								setForm({ name: "", email: "", password: "" });
							}}
							sx={{
								textTransform: "none",
								color: "#667eea",
								fontWeight: 600,
								"&:hover": {
									background: "rgba(102, 126, 234, 0.1)",
								},
							}}
						>
							{isLogin
								? "Don't have an account? Sign Up"
								: "Already have an account? Sign In"}
						</Button>
					</Box>
				</Paper>
			</Container>
		</Box>
	);
};

export default Auth;
