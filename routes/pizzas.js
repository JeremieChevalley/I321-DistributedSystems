import express from "express";
import { getPizzas, getPizzaById, createPizza } from "../controllers/pizzas.js";

const router = express.Router();

// GET /pizzas
router.get("/", getPizzas);

// GET /pizzas/:id
router.get("/:id", getPizzaById);

// POST /pizzas
router.post("/", createPizza);

export default router;
