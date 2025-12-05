import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

// You will also need to add 'import cors from "cors";' if you did not already, 
// and configure it (not strictly needed for Option B, but good practice).

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Fix __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());




// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

// --- CORRECTED FRONTEND SERVING BLOCK ---
if (process.env.NODE_ENV === "production") {
    // 1. Use path.resolve() for absolute path reliability
    const frontendPath = path.resolve(__dirname, "../frontend", "dist");

    // Serve static assets from the built frontend directory
    app.use(express.static(frontendPath));

    // 2. Use a fallback middleware instead of app.get("*") to prevent PathError
    app.use((req, res, next) => {
        // Only serve index.html if the request is NOT for an API route
        if (!req.path.startsWith("/api")) {
            res.sendFile(path.join(frontendPath, "index.html"));
        } else {
            next(); // Let Express handle the request (e.g., 404 for non-existent API routes)
        }
    });
}

// Start server
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await connectDB();
});
