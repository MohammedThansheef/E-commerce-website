import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  id: String,
  title: String,
  price: Number,
  ratings: Number,
  image: String,
  category: String,
});

export default mongoose.model("products", productSchema);
