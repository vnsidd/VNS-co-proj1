import mongoose from "mongoose";

const SubcategorySchema = new mongoose.Schema({
  name: String,
});

const CategorySchema = new mongoose.Schema({
  name: String,
  subcategories: [SubcategorySchema],
});

export default mongoose.model("Category", CategorySchema);
