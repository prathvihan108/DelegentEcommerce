import React, { useEffect, useState } from "react";
import API from "../services/api.js";
import {
	Box,
	Typography,
	Card,
	CardContent,
	Grid,
	Container,
	CircularProgress,
	IconButton,
	Chip,
} from "@mui/material";
import { Package, Star, Heart, ShoppingCart } from "lucide-react";

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [favorites, setFavorites] = useState(new Set());

	useEffect(() => {
		API.get("/products")
			.then((res) => {
				setProducts(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, []);

	const toggleFavorite = (id) => {
		setFavorites((prev) => {
			const newFavorites = new Set(prev);
			if (newFavorites.has(id)) {
				newFavorites.delete(id);
			} else {
				newFavorites.add(id);
			}
			return newFavorites;
		});
	};

	if (loading) {
		return (
			<Box
				sx={{
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<CircularProgress size={60} sx={{ color: "#667eea" }} />
			</Box>
		);
	}

	return (
		<Box
			sx={{
				minHeight: "100vh",
				background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
				py: 12,
				pt: 12,
			}}
		>
			<Container maxWidth="lg">
				<Box sx={{ textAlign: "center", mb: 6 }}>
					<Chip
						label="Featured Collection"
						sx={{
							background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
							color: "white",
							fontWeight: 600,
							mb: 2,
						}}
					/>
					<Typography
						variant="h3"
						sx={{
							fontWeight: 800,
							mb: 2,
							background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						Featured Products
					</Typography>
					<Typography variant="h6" sx={{ color: "#666" }}>
						Discover our curated collection of premium products
					</Typography>
				</Box>

				<Grid container spacing={4}>
					{products.map((p) => (
						<Grid item xs={12} sm={6} md={4} key={p._id}>
							<Card
								sx={{
									height: "100%",
									borderRadius: 4,
									boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
									transition: "all 0.3s ease",
									"&:hover": {
										transform: "translateY(-8px)",
										boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
									},
								}}
							>
								<Box
									sx={{
										height: 200,
										background:
											"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										position: "relative",
									}}
								>
									<Package
										size={80}
										color="rgba(255,255,255,0.3)"
										strokeWidth={1.5}
									/>
									<IconButton
										onClick={() => toggleFavorite(p._id)}
										sx={{
											position: "absolute",
											top: 16,
											right: 16,
											background: "white",
											"&:hover": {
												background: "white",
												transform: "scale(1.1)",
											},
										}}
									>
										<Heart
											size={20}
											fill={favorites.has(p._id) ? "#ef4444" : "none"}
											color={favorites.has(p._id) ? "#ef4444" : "#666"}
										/>
									</IconButton>
								</Box>

								<CardContent sx={{ p: 3 }}>
									<Typography
										variant="h6"
										sx={{
											fontWeight: 700,
											mb: 1,
											color: "#333",
										}}
									>
										{p.name}
									</Typography>

									<Typography
										variant="body2"
										sx={{
											color: "#666",
											mb: 2,
											height: 40,
											overflow: "hidden",
											textOverflow: "ellipsis",
											display: "-webkit-box",
											WebkitLineClamp: 2,
											WebkitBoxOrient: "vertical",
										}}
									>
										{p.description || "No description available"}
									</Typography>

									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: 1,
											mb: 2,
										}}
									>
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												size={16}
												fill={i < 4 ? "#fbbf24" : "none"}
												color="#fbbf24"
											/>
										))}
										<Typography variant="body2" sx={{ color: "#666", ml: 0.5 }}>
											4.5 (128)
										</Typography>
									</Box>

									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
										}}
									>
										<Typography
											variant="h5"
											sx={{
												fontWeight: 800,
												color: "#667eea",
											}}
										>
											₹{p.price}
										</Typography>
										<IconButton
											sx={{
												background:
													"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
												color: "white",
												"&:hover": {
													background:
														"linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
												},
											}}
										>
											<ShoppingCart size={20} />
										</IconButton>
									</Box>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default ProductList;
