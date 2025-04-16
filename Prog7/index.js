const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017").then(() => console.log("MongoDB connected"));

const Product = mongoose.model("Product", { name: String, price: Number, category: String });

const app = express();
app.use(cors());
app.use(express.json());

app.route("/products")
  .post((req, res) => Product.create(req.body)
    .then(p => res.json(p))
    .catch(e => res.status(500)
    .send(e)))
  
  .get((req, res) => Product.find()
    .then(p => res.json(p))
    .catch(e => res.status(500)
    .send(e)));

app.listen(5000);
