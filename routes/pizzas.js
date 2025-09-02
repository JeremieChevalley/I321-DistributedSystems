import express from "express";
import {
    getPizzas,
    getPizzaById,
    createPizza,
    patchPizza,
    deletePizza
} from "../controllers/pizzas.js";

const router = express.Router();

// CRUD Pizzas
router.get("/", getPizzas);
router.get("/:id", getPizzaById);
router.post("/", createPizza);
router.put("/:id", patchPizza);
router.delete("/:id", deletePizza);

export default router;
