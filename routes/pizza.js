import express from "express";
import { getPizzas, createPizza } from "../controllers/pizza.js";

const router = express.Router();

// GET /api/users
router.get("/", getPizzas);

// POST /api/users
router.post("/", createPizza);

export default router;
