import { Router } from "express";
import { addSocial, getSocials, updateStatus } from "./controller.js";

const SocialRoutes = Router();

SocialRoutes.post("/add", addSocial);
SocialRoutes.get("/all", getSocials);
SocialRoutes.put("/status", updateStatus);

export default SocialRoutes;
