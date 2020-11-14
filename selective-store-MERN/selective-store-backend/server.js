//imports
import express from "express";
import mongoose from "mongoose";
import products from "./dbProducts.js";
import cors from "cors";

//app config
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use(cors());

//DB config
const connection_url = `mongodb+srv://admin:EhdIYQ1SgDxT3xnB@cluster0.zcnjr.mongodb.net/selectivestoredb?retryWrites=true&w=majority`;

mongoose.connect(
  connection_url,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

//api routes
app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.get("/products/sync", (req, res) => {
  products.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/products/new", (req, res) => {
  const dbProducts = req.body;

  products.create(dbProducts, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listen
app.listen(port, () => {
  console.log(`listening to localhost: ${port}`);
});
