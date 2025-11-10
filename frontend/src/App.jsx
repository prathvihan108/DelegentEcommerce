import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Auth from "./components/Auth.jsx";
import Home from "./components/Home.jsx";
import ProductList from "./components/ProductList.jsx";
import AddProduct from "./components/AddProduct.jsx";
import { setAuthToken } from "./services/api.js";
import { Box } from "@mui/material";

function App() {
	const [user, setUser] = useState(null);
	const [viewProducts, setViewProducts] = useState(false);
	const [showAddProduct, setShowAddProduct] = useState(false);

	const handleLogout = () => {
		setUser(null);
		setAuthToken(null);
		setViewProducts(false);
		setShowAddProduct(false);
	};

	const handleStartShopping = () => {
		setViewProducts(true);
	};

	const handleBackToHome = () => {
		setViewProducts(false);
		setShowAddProduct(false);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				background: "#f5f7fa",
			}}
		>
			<Navbar user={user} onLogout={handleLogout} />

			<Box sx={{ flex: 1 }}>
				{!user && <Auth onAuthenticate={setUser} />}

				{user && !viewProducts && (
					<Home onStartShopping={handleStartShopping} />
				)}

				{user && viewProducts && !showAddProduct && <ProductList />}

				{user && viewProducts && showAddProduct && (
					<AddProduct onAdd={() => setShowAddProduct(false)} />
				)}
			</Box>

			<Footer />
		</Box>
	);
}

export default App;
