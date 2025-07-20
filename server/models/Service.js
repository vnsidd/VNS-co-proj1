import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  discount: Number,
  imageUrl: String,
  category: String,
  subcategory: String,
});

export default mongoose.model("Service", ServiceSchema);
