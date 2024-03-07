import { Router } from "express";
import {
  addRadio,
  deleteRadio,
  getRadioByCategory,
  getRadios,
  getSingleRadio,
  updateRadioStatus,
} from "./controller.js";

// test-backend\routes\radios\route.js
const RadioRoutes = Router();
RadioRoutes.post("/add", addRadio);
RadioRoutes.get("/all", getRadios);
RadioRoutes.get("/category/:id", getRadioByCategory); // Get radios by category id
RadioRoutes.get("/single/:id", getSingleRadio);
RadioRoutes.put("/status", updateRadioStatus);
RadioRoutes.delete("/delete/:id", deleteRadio);

export default RadioRoutes;
