import { Router } from "express";
import {
  getAllDonors,
  getSingleDonor,
  registerDonor,
  updateDonorStatus,
} from "./controller.js";

const DonorRoutes = Router();

DonorRoutes.post("/register", registerDonor);
DonorRoutes.get("/all", getAllDonors);
DonorRoutes.get("/single/:_id", getSingleDonor);
DonorRoutes.put("/update/status", updateDonorStatus);
DonorRoutes.delete("/delete/:_id", updateDonorStatus);

export default DonorRoutes;
