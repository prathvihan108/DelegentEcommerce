import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				py: 2,
				mt: "auto",
				backgroundColor: (theme) =>
					theme.palette.mode === "light"
						? theme.palette.grey[200]
						: theme.palette.grey[800],
				textAlign: "center",
			}}
		>
			<Typography variant="body2" color="text.secondary">
				&copy; {new Date().getFullYear()} My E-Commerce App. All rights
				reserved.
			</Typography>
		</Box>
	);
};

export default Footer;
