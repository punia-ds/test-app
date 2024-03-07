import { Router } from "express";
import {
  addCat,
  deleteCat,
  getAllCats,
  getSingleCat,
  updateCat,
  updateCatStatus,
} from "./controller.js";

const CategoryRoutes = Router();

CategoryRoutes.post("/add", addCat);
CategoryRoutes.get("/all", getAllCats);
CategoryRoutes.get("/single/:id", getSingleCat);
CategoryRoutes.put("/update", updateCat);
CategoryRoutes.put("/status", updateCatStatus);
CategoryRoutes.delete("/delete/:_id", deleteCat);

export default CategoryRoutes;
