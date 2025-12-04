import express from "express";
import { createProduct, deleteProduct, getAllProducts, getfeaturedProducts, getProductsByCategory, getrecommendedProducts, toggleFeaturedProduct } from "../controllers/product.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router(); 

router.get("/", protectRoute , adminRoute, getAllProducts);
router.get("/featured",  getfeaturedProducts);
router.get("/category/:category",  getProductsByCategory);
router.get("/category/:category", protectRoute, getProductsByCategory);
router.get("/recommendations",  getrecommendedProducts);
router.post("/", protectRoute , adminRoute, createProduct);
router.patch("/:id", protectRoute , adminRoute, toggleFeaturedProduct);
router.delete("/:id", protectRoute , adminRoute, deleteProduct);

export default router   