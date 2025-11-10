import React, { useState } from "react";
import API from "../services/api.js";
import { Box, TextField, Button, Typography } from "@mui/material";

const AddProduct = ({ onAdd }) => {
	const [form, setForm] = useState({ name: "", price: "", description: "" });
	const [error, setError] = useState("");

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			const payload = { ...form, price: Number(form.price) };
			await API.post("/products", payload);
			setForm({ name: "", price: "", description: "" });
			if (onAdd) onAdd();
		} catch (err) {
			setError(err.response?.data?.message || "Adding product failed");
		}
	};

	return (
		<Box sx={{ maxWidth: 400, mx: "auto", my: 3 }}>
			<form onSubmit={handleSubmit}>
				<TextField
					label="Name"
					name="name"
					value={form.name}
					onChange={handleChange}
					fullWidth
					margin="normal"
					required
				/>
				<TextField
					label="Price"
					name="price"
					type="number"
					value={form.price}
					onChange={handleChange}
					fullWidth
					margin="normal"
					required
				/>
				<TextField
					label="Description"
					name="description"
					value={form.description}
					onChange={handleChange}
					fullWidth
					margin="normal"
					multiline
					minRows={2}
				/>
				{error && (
					<Typography color="error" variant="body2" mt={1}>
						{error}
					</Typography>
				)}
				<Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
					Add Product
				</Button>
			</form>
		</Box>
	);
};

export default AddProduct;
