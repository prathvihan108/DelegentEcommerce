import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { ShoppingCart, TrendingUp, Package, Star } from "lucide-react";

const Home = ({ onStartShopping }) => {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
				display: "flex",
				alignItems: "center",
				position: "relative",
				overflow: "hidden",
				pt: 8,
			}}
		>
			{/* Animated background circles */}
			<Box
				sx={{
					position: "absolute",
					top: "10%",
					left: "5%",
					width: "300px",
					height: "300px",
					background: "rgba(255,255,255,0.1)",
					borderRadius: "50%",
					animation: "float 6s ease-in-out infinite",
					"@keyframes float": {
						"0%, 100%": { transform: "translateY(0px)" },
						"50%": { transform: "translateY(-20px)" },
					},
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					bottom: "10%",
					right: "5%",
					width: "400px",
					height: "400px",
					background: "rgba(255,255,255,0.08)",
					borderRadius: "50%",
					animation: "float 8s ease-in-out infinite",
				}}
			/>

			<Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
				<Grid container spacing={4} alignItems="center">
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								background: "rgba(255,255,255,0.95)",
								px: 2,
								py: 1,
								borderRadius: 3,
								display: "inline-flex",
								alignItems: "center",
								gap: 1,
								mb: 3,
								boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
							}}
						>
							<TrendingUp size={20} color="#667eea" />
							<Typography
								variant="body2"
								sx={{ fontWeight: 600, color: "#667eea" }}
							>
								Trending Products 2025
							</Typography>
						</Box>

						<Typography
							variant="h2"
							sx={{
								fontWeight: 800,
								color: "white",
								mb: 3,
								fontSize: { xs: "2.5rem", md: "3.5rem" },
								lineHeight: 1.2,
							}}
						>
							Discover Amazing Products
						</Typography>

						<Typography
							variant="h6"
							sx={{
								color: "rgba(255,255,255,0.9)",
								mb: 4,
								fontWeight: 400,
							}}
						>
							Shop the latest trends at unbeatable prices. Quality products
							delivered to your doorstep.
						</Typography>

						<Button
							variant="contained"
							size="large"
							onClick={onStartShopping}
							sx={{
								background: "white",
								color: "#667eea",
								px: 4,
								py: 2,
								fontSize: "1.1rem",
								fontWeight: 700,
								borderRadius: 3,
								textTransform: "none",
								boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
								"&:hover": {
									background: "white",
									transform: "translateY(-2px)",
									boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
								},
								transition: "all 0.3s ease",
							}}
							startIcon={<ShoppingCart size={24} />}
						>
							Start Shopping
						</Button>

						<Grid container spacing={3} sx={{ mt: 4 }}>
							<Grid item xs={4}>
								<Box sx={{ textAlign: "center" }}>
									<Typography
										variant="h4"
										sx={{ fontWeight: 700, color: "white" }}
									>
										500+
									</Typography>
									<Typography
										variant="body2"
										sx={{ color: "rgba(255,255,255,0.8)" }}
									>
										Products
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={4}>
								<Box sx={{ textAlign: "center" }}>
									<Typography
										variant="h4"
										sx={{ fontWeight: 700, color: "white" }}
									>
										50K+
									</Typography>
									<Typography
										variant="body2"
										sx={{ color: "rgba(255,255,255,0.8)" }}
									>
										Customers
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={4}>
								<Box sx={{ textAlign: "center" }}>
									<Typography
										variant="h4"
										sx={{
											fontWeight: 700,
											color: "white",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											gap: 0.5,
										}}
									>
										4.9 <Star size={20} fill="white" />
									</Typography>
									<Typography
										variant="body2"
										sx={{ color: "rgba(255,255,255,0.8)" }}
									>
										Rating
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12} md={6}>
						<Box
							sx={{
								display: { xs: "none", md: "flex" },
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Package
								size={300}
								color="rgba(255,255,255,0.2)"
								strokeWidth={1}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Home;
