# 🛒 MoraMart - MERN E-Commerce Platform

> **MoraMart** is a full-stack, feature-rich e-commerce application built for speed and scalability. It features a modern UI with Framer Motion animations, secure payments via Stripe, real-time admin analytics, and a robust caching system using Redis.

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)](https://www.mongodb.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-blue?logo=stripe)](https://stripe.com/)

---

## 🚀 Live Demo

**[👉 Click here to visit MoraMart Live](https://moramart.onrender.com/)**

---

## 📸 Screenshots

| **Home Page** | **Product Category** |
|:---:|:---:|
| ![Home](image.png) | ![Products](image-1.png) |

| **Shopping Cart** | **Admin Dashboard** |
|:---:|:---:|
| ![Cart](image-3.png) |![Admin](image-4.png) |

| **Checkout Success** | **Mobile View** |
|:---:|:---:|
| ![Success](image-5.png) | ![Mobile](image-2.png) |

---

## ✨ Features

### 👤 **For Customers**

- **Secure Authentication:** Sign up and Login using JWT (Access & Refresh Tokens) with HTTP-Only cookies.
- **Browse & Filter:** Explore products by categories (Jeans, Shoes, Glasses, etc.) with a beautiful, responsive UI.
- **Featured Products:** Carousel slider highlighting top products.
- **Smart Recommendations:** "People also bought" section powered by MongoDB aggregation.
- **Shopping Cart:**
  - Add/Remove items
  - Adjust quantities in real-time
  - **Persistent Cart:** Cart items are saved to the database, so you never lose them even if you switch devices
- **Coupon System:** Apply discount codes at checkout.
- **Stripe Checkout:** Secure, PCI-compliant payment processing.
- **Confetti Celebration:** Fun animation upon successful purchase.

### 🛡️ **For Admins (Dashboard)**

- **Product Management:**
  - Create new products with image uploads (handled via Cloudinary)
  - Delete products
  - Toggle "Featured" status (Updates the homepage slider instantly)
- **Analytics Dashboard:**
  - Visual Line Charts (Recharts) showing Daily Sales and Revenue trends
  - Quick stats: Total Users, Total Products, Total Sales, Total Revenue
- **Redis Caching:** Featured products are cached for lightning-fast load times.

---

## 🛠️ Tech Stack

### **Frontend**

| Technology | Purpose |
|---|---|
| **React (Vite)** | Fast UI framework with instant module replacement |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **Zustand** | Lightweight global state management (Cart, User, Products) |
| **Framer Motion** | Smooth, production-ready animations |
| **Lucide React** | Beautiful, consistent SVG icons |
| **Recharts** | Composable charting library for analytics |
| **Axios** | Promise-based HTTP client |
| **React Hot Toast** | Elegant notifications and alerts |

### **Backend**

| Technology | Purpose |
|---|---|
| **Node.js & Express** | Server and API routing |
| **MongoDB & Mongoose** | NoSQL database with object modeling |
| **Redis (Upstash)** | In-memory caching for featured products |
| **Cloudinary** | Cloud-based image storage and optimization |
| **Stripe API** | Secure payment processing |
| **JWT & bcryptjs** | Authentication and password hashing |

---

## ⚙️ Environment Variables

To run this project locally, create a `.env` file in the backend directory with the following variables:

```env
# Server Configuration
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development

# Authentication Secrets
ACCESS_TOKEN_SECRET=your_super_secret_access_key
REFRESH_TOKEN_SECRET=your_super_secret_refresh_key

# Redis (Caching)
REDIS_URL=your_redis_connection_string

# Cloudinary (Image Uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe (Payments)
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173

# Frontend Keys (If needed in .env or strictly in Vite config)
# VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

---

## 🚀 Installation & Running Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/moramart.git
cd moramart
```

### 2. Install Dependencies

**Backend:**

```bash
npm install
```

**Frontend:**

```bash
cd frontend
npm install
```

### 3. Run the Application

**Terminal 1 (Backend):**

```bash
# From root
npm run dev
# Server will start on http://localhost:5000
```

**Terminal 2 (Frontend):**

```bash
# From frontend folder
cd frontend
npm run dev
# App will start on http://localhost:5173
```

---

## 📦 Deployment

This project is configured for **Single Deployment**. The frontend is built into static files and served by the Express backend.

### Build Command

```bash
npm run build
```

This command:
1. Installs backend dependencies
2. Enters the frontend folder
3. Installs frontend dependencies
4. Builds the React app
5. Moves the `dist` folder to the backend

### Start Command

```bash
npm start
```

---

## 📂 Project Structure

```
moramart/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🔐 Security Features

- **JWT Authentication:** Secure token-based authentication with refresh tokens
- **HTTP-Only Cookies:** Prevents XSS attacks
- **Password Hashing:** bcryptjs for secure password storage
- **PCI Compliance:** Stripe handles all sensitive payment data
- **CORS Protection:** Configured to accept requests only from trusted origins
- **Input Validation:** Server-side validation on all endpoints

---

## 🚦 API Endpoints Overview

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/refresh` - Refresh access token

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove from cart

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user's orders

### Admin
- `GET /api/admin/analytics` - Get sales analytics (Admin)

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**[Your Name]**

- GitHub: [@https://github.com/code0era/](https://github.com/code0era/)
- LinkedIn: [www.linkedin.com/in/shubham-yadav-38a467267/](www.linkedin.com/in/shubham-yadav-38a467267/)
- Email: ashubhamyadav61@gmail.com

---

## 🙏 Acknowledgments

- [MongoDB](https://www.mongodb.com/) for the database
- [Stripe](https://stripe.com/) for payment processing
- [Cloudinary](https://cloudinary.com/) for image hosting
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Recharts](https://recharts.org/) for charting

---

## 📞 Support

If you have any questions or issues, please feel free to:
- Open an issue on GitHub
- Contact me via email
- Reach out on LinkedIn

---

**Happy Coding!  🎉**

**Build With love💖 @code0era  🎉**