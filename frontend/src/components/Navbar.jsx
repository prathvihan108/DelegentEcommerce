import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = ({ user, onLogout }) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" sx={{ flexGrow: 1, cursor: "pointer" }}>
					E-Commerce
				</Typography>
				{user ? (
					<>
						<Typography variant="body1" sx={{ mr: 2 }}>
							Hello, {user.name}
						</Typography>
						<Button color="inherit" onClick={onLogout}>
							Logout
						</Button>
					</>
				) : null}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
