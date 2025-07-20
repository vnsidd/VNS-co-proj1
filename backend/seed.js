// backend/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('../server/models/Service');

dotenv.config();

const services = [
  {
    name: "Hair Spa",
    category: "Bathing",
    subcategory: "Shampoo",
    description: "Relaxing hair spa with herbal shampoo and oil massage.",
    price: 499,
    discount: 10,
    imageUrl: "https://via.placeholder.com/300x200"
  },
  {
    name: "Full Body Bath",
    category: "Bathing",
    subcategory: "Soap",
    description: "Deep cleansing with organic soap and essential oils.",
    price: 799,
    discount: 0,
    imageUrl: "https://via.placeholder.com/300x200"
  },
  {
    name: "Beard Grooming",
    category: "Grooming",
    subcategory: "Trimming",
    description: "Perfect beard shape and trim for a clean look.",
    price: 299,
    discount: 5,
    imageUrl: "https://via.placeholder.com/300x200"
  },
  {
    name: "Hair Cut",
    category: "Grooming",
    subcategory: "Cutting",
    description: "Professional haircut by experienced stylists.",
    price: 399,
    discount: 0,
    imageUrl: "https://via.placeholder.com/300x200"
  }
];

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log("MongoDB connected");

  await Service.deleteMany({});
  console.log("Old services deleted");

  await Service.insertMany(services);
  console.log("Sample services inserted");

  mongoose.disconnect();
}).catch(err => {
  console.error("Seeding error:", err);
});
