import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Auth from "./components/Auth.jsx";
import Home from "./components/Home.jsx";
import ProductList from "./components/ProductList.jsx";
import AddProduct from "./components/AddProduct.jsx";
import { setAuthToken } from "./services/api.js";
import { Container, Box } from "@mui/material";

function App() {
	const [user, setUser] = useState(null);
	const [viewProducts, setViewProducts] = useState(false);

	const handleLogout = () => {
		setUser(null);
		setAuthToken(null);
		setViewProducts(false);
	};

	const handleStartShopping = () => {
		setViewProducts(true);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<Navbar user={user} onLogout={handleLogout} />
			<Container sx={{ flex: 1, mt: 3, mb: 3 }}>
				{!user && <Auth onAuthenticate={setUser} />}
				{user && !viewProducts && (
					<Home onStartShopping={handleStartShopping} />
				)}
				{user && viewProducts && (
					<>
						<AddProduct />
						<ProductList />
					</>
				)}
			</Container>
			<Footer />
		</Box>
	);
}

export default App;
