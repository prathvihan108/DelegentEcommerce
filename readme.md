# ModernShop E-Commerce Application

A modern, sleek e-commerce web application built with React and Material-UI featuring a beautiful gradient-based design, user authentication, and product management.

## Features

- **User Authentication** - Sign up and login functionality
- **Product Browsing** - Browse products with ratings and descriptions
- **Product Management** - Add new products to the store
- **Modern UI/UX** - Gradient designs, smooth animations, and responsive layout
- **Shopping Cart** - Cart functionality (UI ready)
- **Wishlist** - Favorite products feature

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Material-UI (MUI)** - UI component library
- **Axios** - HTTP client for API requests
- **Node.js & Express** - Backend server
- **MongoDB** - Database

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**
- **MongoDB** (if using local database)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone git@github.com:prathvihan108/DelegentEcommerce.git

```

### 2. Install Dependencies

```bash
cd frontend
npm install
```

### 3. Install Required Packages

Make sure you have all the necessary packages:

````bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled axios

### 5. Backend Setup

Navigate to your server directory and install dependencies:

```bash
cd server
npm install
````

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/modernshop
JWT_SECRET=your_jwt_secret_key_here
```

## 🏃‍♂️ Running the Application

### Start the Backend Server

```bash
cd server
nodemon server.js
```

The backend server should run on `http://localhost:5000`

### Start the Frontend Application

Open a new terminal and run:

## 🧪 Testing the Application

### Manual Testing Steps

#### 1. **Test Authentication**

- Navigate to `http://localhost:5173`
- You should see the login/signup page
- Click "Don't have an account? Sign Up"
- Fill in:
  - Name: `Test User`
  - Email: `test@example.com`
  - Password: `password123`
- Click "Create Account"
- You should be redirected to the Home page

#### 2. **Test Home Page**

- After login, you should see the welcome screen
- Verify the stats display (500+ Products, 50K+ Customers, 4.9★ Rating)
- Click "Start Shopping" button
- You should be redirected to the Product List page

#### 3. **Test Product List**

- Verify products are displayed in a grid layout
- Test the heart icon (favorite) functionality
- Click on different products
- Verify star ratings are visible
- Test "Add to Cart" buttons

#### 4. **Test Add Product**

- Navigate to Add Product page (if route is set up)
- Fill in the form:
  - Product Name: `Test Product`
  - Price: `999`
  - Description: `This is a test product`
- Click "Add Product"
- Verify success message or product appears in list

#### 5. **Test Logout**

- Click the "Logout" button in the navbar
- Verify you're redirected to the login page
- Verify user state is cleared

### Automated Testing (Optional)

If you want to add automated tests, install testing dependencies:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

Run tests:

```bash
npm test
```

## 📁 Project Structure

```
modernshop-ecommerce/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Auth.jsx
│   │   ├── ProductList.jsx
│   │   └── AddProduct.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## 🎨 Component Overview

### **Navbar**

- Displays app logo and name
- Shows user info when logged in
- Shopping cart icon
- Logout button

### **Home**

- Hero section with gradient background
- Call-to-action button
- Statistics display

### **Auth**

- Login/Signup form
- Form validation
- Error handling

### **ProductList**

- Grid layout of products
- Favorite functionality
- Add to cart buttons
- Product ratings

### **AddProduct**

- Form to add new products
- Input validation
- Loading states

### **Footer**

- Company information
- Quick links
- Contact details
- Copyright notice

## 🔧 Configuration

### API Configuration (`src/services/api.js`)

```javascript
import axios from "axios";

const API = axios.create({
	baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

export const setAuthToken = (token) => {
	if (token) {
		API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		localStorage.setItem("token", token);
	} else {
		delete API.defaults.headers.common["Authorization"];
		localStorage.removeItem("token");
	}
};

export default API;
```

## 🐛 Troubleshooting

### Common Issues

**Issue: "Module not found" errors**

```bash
npm install
npm start
```

**Issue: API connection failed**

- Check if backend is running
- Verify API URL in `.env` file
- Check CORS settings on backend

**Issue: Authentication not working**

- Clear browser localStorage
- Check JWT token configuration
- Verify backend authentication routes

**Issue: Styles not loading**

```bash
npm install @emotion/react @emotion/styled
```

## 📝 API Endpoints

### Authentication

- `POST /api/users/signup` - Register new user
- `POST /api/users/login` - Login user

### Products

- `GET /api/products` - Get all products
- `POST /api/products` - Add new product (requires auth)
- `GET /api/products/:id` - Get single product
- `PUT /api/products/:id` - Update product (requires auth)
- `DELETE /api/products/:id` - Delete product (requires auth)

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

## 📄 License

This project is licensed under the MIT License.

---

**Happy Shopping! 🛍️**
