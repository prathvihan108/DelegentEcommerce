import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Badge } from "@mui/material";
import { ShoppingCart, Sparkles, User, LogOut } from "lucide-react";

const Navbar = ({ user, onLogout }) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<AppBar
			position="fixed"
			sx={{
				background: scrolled
					? "rgba(255, 255, 255, 0.8)"
					: "rgba(255, 255, 255, 0.95)",
				backdropFilter: "blur(20px)",
				boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
				transition: "all 0.3s ease",
			}}
		>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
					<Box
						sx={{
							background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
							p: 1,
							borderRadius: 2,
							display: "flex",
							alignItems: "center",
						}}
					>
						<Sparkles size={24} color="white" />
					</Box>
					<Typography
						variant="h5"
						sx={{
							fontWeight: 700,
							background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							cursor: "pointer",
						}}
					>
						ModernShop
					</Typography>
				</Box>

				<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
					<Button
						sx={{
							color: "#666",
							"&:hover": { background: "rgba(102, 126, 234, 0.1)" },
						}}
					>
						<ShoppingCart size={24} />
					</Button>

					{user ? (
						<>
							<Box
								sx={{
									display: { xs: "none", sm: "flex" },
									alignItems: "center",
									gap: 1,
									background:
										"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
									px: 2,
									py: 1,
									borderRadius: 3,
								}}
							>
								<User size={16} />
								<Typography variant="body2" sx={{ fontWeight: 500 }}>
									{user.name}
								</Typography>
							</Box>
							<Button
								onClick={onLogout}
								variant="contained"
								sx={{
									background:
										"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
									borderRadius: 2,
									textTransform: "none",
									fontWeight: 600,
									"&:hover": {
										background:
											"linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
									},
								}}
								startIcon={<LogOut size={18} />}
							>
								Logout
							</Button>
						</>
					) : null}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
