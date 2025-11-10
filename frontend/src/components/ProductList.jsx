import React, { useEffect, useState } from "react";
import API from "../services/api.js";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		API.get("/products")
			.then((res) => setProducts(res.data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<Box sx={{ p: 2 }}>
			<Typography variant="h4" mb={3}>
				Products
			</Typography>
			<Grid container spacing={2}>
				{products.map((p) => (
					<Grid item xs={12} sm={6} md={4} key={p._id}>
						<Card>
							<CardContent>
								<Typography variant="h6">{p.name}</Typography>
								<Typography variant="body2" color="text.secondary">
									{p.description || "No description"}
								</Typography>
								<Typography variant="subtitle1" mt={1}>
									₹{p.price}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ProductList;
