import React, { useState } from "react";
import API from "../services/api.js";
import {
	Box,
	TextField,
	Button,
	Typography,
	Container,
	Paper,
	CircularProgress,
} from "@mui/material";
import { Plus, Package } from "lucide-react";

const AddProduct = ({ onAdd }) => {
	const [form, setForm] = useState({ name: "", price: "", description: "" });
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			const payload = { ...form, price: Number(form.price) };
			await API.post("/products", payload);
			setForm({ name: "", price: "", description: "" });
			if (onAdd) onAdd();
		} catch (err) {
			setError(err.response?.data?.message || "Adding product failed");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box
			sx={{
				minHeight: "100vh",
				background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
				py: 12,
				pt: 12,
			}}
		>
			<Container maxWidth="sm">
				<Paper
					elevation={0}
					sx={{
						borderRadius: 4,
						p: 4,
						boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
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
							<Package size={32} color="white" />
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
							Add New Product
						</Typography>
					</Box>

					<form onSubmit={handleSubmit}>
						<TextField
							label="Product Name"
							name="name"
							value={form.name}
							onChange={handleChange}
							fullWidth
							margin="normal"
							required
							variant="outlined"
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
							label="Price (₹)"
							name="price"
							type="number"
							value={form.price}
							onChange={handleChange}
							fullWidth
							margin="normal"
							required
							variant="outlined"
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
							label="Description"
							name="description"
							value={form.description}
							onChange={handleChange}
							fullWidth
							margin="normal"
							multiline
							rows={4}
							variant="outlined"
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
							variant="contained"
							type="submit"
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
							startIcon={
								loading ? (
									<CircularProgress size={20} color="inherit" />
								) : (
									<Plus size={20} />
								)
							}
						>
							{loading ? "Adding Product..." : "Add Product"}
						</Button>
					</form>
				</Paper>
			</Container>
		</Box>
	);
};

export default AddProduct;
