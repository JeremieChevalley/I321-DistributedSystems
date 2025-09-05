import express from "express";
import pizzas from "./routes/pizzas.js";

const app = express();
const port = 3000;

app.use(express.json());

// Route racine
app.get("/", (req, res) => {
    res.send("Bienvenue");
});

// Routes pizzas
app.use("/api/v1/pizzas", pizzas);

app.listen(port, () => {
    console.log(`Pizza API running on http://localhost:${port}`);
});
