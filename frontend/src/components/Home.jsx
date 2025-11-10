import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Home = ({ onStartShopping }) => {
	return (
		<Box sx={{ textAlign: "center", mt: 8 }}>
			<Typography variant="h3" gutterBottom>
				Welcome to My E-Commerce Store
			</Typography>
			<Typography variant="h6" mb={4}>
				Discover amazing products at unbeatable prices!
			</Typography>
			<Button variant="contained" size="large" onClick={onStartShopping}>
				Start Shopping
			</Button>
		</Box>
	);
};

export default Home;
