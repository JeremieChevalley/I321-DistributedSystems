// "Base de données" pizza en mémoire
let pizzas = [
    {
        id: 1,
        name: "Margherita",
        image: null,
        ingredients: [
            "Tomato",
            "Mozzarella",
            "Basil"
        ],
        price: 8.5
    },
];

// GET -> toutes les pizzas
export const getPizzas = (req, res) => {
    res.json(pizzas);
};

// GET -> une pizza par ID
export const getPizzaById = (req, res) => {
    const pizzaId = parseInt(req.params.id);
    const pizza = pizzas.find(p => p.id === pizzaId);

    if (!pizza) {
        return res.status(404).json({ message: "Pizza non trouvée 😢" });
    }

    res.json(pizza);
};

// POST -> ajouter une pizza
export const createPizza = (req, res) => {
    const newPizza = { id: Date.now(), ...req.body };
    pizzas.push(newPizza);
    res.status(201).json(newPizza);
};
