import express from "express";
import { getPizzas, getPizzaById, createPizza } from "../controllers/pizzas.js";

const router = express.Router();

// GET /api/pizzas
router.get("/", getPizzas);

// GET /api/pizzas/:id
router.get("/:id", getPizzaById);

// POST /api/pizzas
router.post("/", createPizza);

export default router;
