import React, { useState } from "react";
import Auth from "./components/Auth.jsx";
import ProductList from "./components/ProductList.jsx";
import AddProduct from "./components/AddProduct.jsx";
import { setAuthToken } from "./services/api.js";
import { Container, Typography, Button } from "@mui/material";

function App() {
	const [user, setUser] = useState(null);

	const handleLogout = () => {
		setUser(null);
		setAuthToken(null);
	};

	return (
		<Container>
			<Typography variant="h3" align="center" sx={{ my: 4 }}>
				My E-Commerce Store
			</Typography>

			{!user ? (
				<Auth onAuthenticate={setUser} />
			) : (
				<>
					<AddProduct />
					<ProductList />
					<Button variant="outlined" onClick={handleLogout} sx={{ mt: 3 }}>
						Logout
					</Button>
				</>
			)}
		</Container>
	);
}

export default App;
