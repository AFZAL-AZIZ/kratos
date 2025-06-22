const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productsRouter = require("./routes/productRoutes");
const usersRouter = require("./routes/userRoutes");

//middlewares
app.use(express.json());

//routing
app.use("/products", productsRouter);
app.use("/users", usersRouter);

//server setup
const port = 4578;
const DB =
    "mongodb+srv://owaisasad09:GlgE6h4EPDoXhG5Q@cluster0.iz4spda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.listen(port, () => {
    console.log(`Started listening on port ${port}`);
});

mongoose.connect(DB);
