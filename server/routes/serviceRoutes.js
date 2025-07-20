import express from "express";
import Service from "../models/Service.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const { category, subcategory } = req.query;
  const services = await Service.find({ category, subcategory });
  res.json(services);
});

export default router;
