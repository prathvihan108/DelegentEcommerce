import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
				color: "white",
				py: 6,
				mt: "auto",
			}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					<Grid item xs={12} md={4}>
						<Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
							ModernShop
						</Typography>
						<Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
							Your destination for amazing products at unbeatable prices. Shop
							with confidence!
						</Typography>
					</Grid>

					<Grid item xs={12} md={4}>
						<Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
							Quick Links
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
							<Typography
								variant="body2"
								sx={{
									opacity: 0.9,
									cursor: "pointer",
									"&:hover": { opacity: 1 },
								}}
							>
								About Us
							</Typography>
							<Typography
								variant="body2"
								sx={{
									opacity: 0.9,
									cursor: "pointer",
									"&:hover": { opacity: 1 },
								}}
							>
								Products
							</Typography>
							<Typography
								variant="body2"
								sx={{
									opacity: 0.9,
									cursor: "pointer",
									"&:hover": { opacity: 1 },
								}}
							>
								Contact
							</Typography>
							<Typography
								variant="body2"
								sx={{
									opacity: 0.9,
									cursor: "pointer",
									"&:hover": { opacity: 1 },
								}}
							>
								Terms & Conditions
							</Typography>
						</Box>
					</Grid>

					<Grid item xs={12} md={4}>
						<Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
							Contact Us
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
							<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
								<Mail size={16} />
								<Typography variant="body2" sx={{ opacity: 0.9 }}>
									support@modernshop.com
								</Typography>
							</Box>
							<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
								<Phone size={16} />
								<Typography variant="body2" sx={{ opacity: 0.9 }}>
									+91 98765 43210
								</Typography>
							</Box>
							<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
								<MapPin size={16} />
								<Typography variant="body2" sx={{ opacity: 0.9 }}>
									Bengaluru, Karnataka, India
								</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>

				<Box
					sx={{
						borderTop: "1px solid rgba(255,255,255,0.2)",
						mt: 4,
						pt: 3,
						textAlign: "center",
					}}
				>
					<Typography
						variant="body2"
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: 1,
							opacity: 0.9,
						}}
					>
						Made with <Heart size={16} fill="white" /> ©{" "}
						{new Date().getFullYear()} ModernShop. All rights reserved.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
