import { Router } from "express";
import { registerDonor } from "./controller.js";

const DonorRoutes = Router();

DonorRoutes.post("/register", registerDonor);

export default DonorRoutes;
