import express from "express";
import { getPizzas, createPizza } from "../controllers/pizza.js";

const router = express.Router();

// GET /api/pizzas
router.get("/", getPizzas);

// POST /api/pizzas
router.post("/", createPizza);

export default router;
