import express from "express";
import pizza from "./routes/pizza.js";

const app = express();
const port = 3000;

app.use(express.json());

// Brancher les routes
app.use("/api/pizzas", pizza);

app.listen(port, () => {
    console.log(`✅ API running on http://localhost:${port}`);
});
