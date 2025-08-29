// Simulation d'une "base de données"
let pizzas = [{ id: 1, name: "Margherita" }];

// GET /api/pizzas
export const getPizzas = (req, res) => {
    res.json(pizzas);
};

// POST /api/pizzas
export const createPizza = (req, res) => {
    const newPizza = { id: Date.now(), ...req.body };
    pizzas.push(newPizza);
    res.status(201).json(newPizza);
};
